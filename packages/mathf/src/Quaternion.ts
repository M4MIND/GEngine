import Matrix4 from './Matrix4';
import Vector3 from './Vector3';

export default class Quaternion {
    constructor(private x = 0, private y = 0, private z = 0, private w = 1) {}

    public axisAngle(v: Vector3, angle: number): this {
        let s = Math.sin(angle * .5);

        this.x = v.x * s;
        this.y = v.y * s;
        this.z = v.z * s;
        this.w = Math.cos(angle * .5);

        return this;
    }

    public toMatrix4(): Matrix4 {
        let w = this.w;
        let x = this.x;
        let y = this.y;
        let z = this.z;

        let n = w * w + x * x + y * y + z * z;
        let s = n === 0 ? 0 : 2 / n;
        let wx = s * w * x, wy = s * w * y, wz = s * w * z;
        let xx = s * x * x, xy = s * x * y, xz = s * x * z;
        let yy = s * y * y, yz = s * y * z, zz = s * z * z;

        return new Matrix4(
            1 - (yy + zz), xy - wz, xz + wy, 0,
            xy + wz, 1 - (xx + zz), yz - wx, 0,
            xz - wy, yz + wx, 1 - (xx + yy), 0,
            0, 0, 0, 1,
        );
    }

    public euler(x: number, y: number, z: number) {
        var c1 = Math.cos(x / 2);
        var c2 = Math.cos(y / 2);
        var c3 = Math.cos(z / 2);
        var s1 = Math.sin(x / 2);
        var s2 = Math.sin(y / 2);
        var s3 = Math.sin(z / 2);

        this.y = s1 * c2 * c3 + c1 * s2 * s3;
        this.x = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;
    }

    public toVector() {
        return new Vector3(this.x, this.y, this.z);
    }
}
