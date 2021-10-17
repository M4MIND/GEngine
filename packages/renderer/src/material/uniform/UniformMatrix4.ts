import BaseUniformDescriptor from './BaseUniformDescriptor';

export default class UniformMatrix4 extends BaseUniformDescriptor {
    constructor(name: string) {
        super(name, 16);
    }

    public set(value: number[]): this {
        if (value.length !== 16) {
            throw new Error(``);
        }

        super.set(value);

        return this;
    }

    public use() {}
}
