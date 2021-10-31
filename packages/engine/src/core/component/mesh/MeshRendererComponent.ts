import { Matrix4 } from '@nox-engine/mathf';
import EventManager, { CoreEvents } from '../../EventManager';
import Graphics from '../../graphics/Graphics';
import Material from '../../graphics/material/Material';
import Shader from '../../graphics/shader/Shader';
import { BasicUniforms } from '../../graphics/Unifroms';
import BaseComponent from '../BaseComponent';
import MeshFilterComponent from './MeshFilterComponent';

export default class MeshRendererComponent extends BaseComponent {
    public material: Material = new Material(Shader.find(''));

    public onRendererObject() {
        if (this.hasComponent<MeshFilterComponent>(MeshFilterComponent) && this.material) {
            this.material.getUniform(BasicUniforms.MODEL)?.set(this.transform.getModelMatrix());
            this.material.getUniform(BasicUniforms.MODEL_INVERT_MATRIX)?.set(Matrix4.transpose(Matrix4.inverse(this.transform.getModelMatrix())));

            Graphics.drawMesh(
                this.getComponent<MeshFilterComponent>(MeshFilterComponent).mesh,
                this.material as Material,
            );
        }
    }

    protected preparation(): void {
        EventManager.subscribe(CoreEvents.RENDERER_OBJECT, this.onRendererObject.bind(this));
    }
}
