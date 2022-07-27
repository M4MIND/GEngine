import * as fs from 'fs';
import fsPath from 'path';
import { Dirent } from 'fs';

export default class FS {
  public static pathParse(path: string): string[] {
    return path.split(fsPath.sep)
  }

  public static readdir(path: string[]): Promise<Dirent[]> {
    return new Promise((resolve, reject) => {
      fs.readdir(fsPath.join(process.cwd(), ...path), { withFileTypes: true }, (err, files) => {
        if (err) {
          return reject(err);
        }

        return resolve(files);
      });
    });
  }

  public static readFile(path: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(fsPath.join(process.cwd(), ...path), (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data.toString());
      });
    });
  }

  public static writeFile(path: string[], data: Buffer): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fs.writeFile(fsPath.join(process.cwd(), ...path), data, {}, () => {
        resolve(true)
      })
    })
  }
}
