export enum CoreEvents {
    START = 'start',
    UPDATE = 'update',
    CAMERA = 'onCamera',
    RENDERER_OBJECT = 'onRendererObject',
    PRE_RENDER = 'onPreRender',
    FIXED_UPDATE = 'onFixedUpdate',
}

export default class EventManager {
    private static subscribers: Map<string, (() => void)[]> = new Map<string, (() => void)[]>();

    public static subscribe(event: string, listener: () => void): void {
        if (!this.subscribers.has(event)) {
            this.subscribers.set(event, []);
        }

        this.subscribers.get(event)!.push(listener);
    }

    public static dispatch(event: CoreEvents | string): void {
        if (!this.subscribers.has(event)) {
            return;
        }

        for (let listener of this.subscribers.get(event) ?? []) {
            listener();
        }
    }
}
