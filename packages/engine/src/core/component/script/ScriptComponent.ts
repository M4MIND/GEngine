import EventManager, { CoreEvents } from '../../EventManager';
import BaseComponent from '../BaseComponent';

export default abstract class ScriptComponent extends BaseComponent {
    public abstract start(): void;

    public abstract update(): void;

    protected preparation(): void {
        EventManager.subscribe(CoreEvents.START, this.start.bind(this));
        EventManager.subscribe(CoreEvents.UPDATE, this.update.bind(this));
    }
}
