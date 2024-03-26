import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'uv-field',
  styleUrl: 'uv-field.css',
  formAssociated: true,
})
export class UvField {
  /** (optional) The label of the field. */
  @Prop() label?: string = '';
  /** (optional) The class css to apply to the label of the field. */
  @Prop() classLabel?: string = '';
  /** (optional) The mesage of the field. */
  @Prop() message?: string = '';
  /** (optional) The class css to apply to the mesage of the field. */
  @Prop() classMessage?: string = '';

  render() {
    const label = !!this.label ? <label class={this.classLabel}>{this.label}</label> : null;
    const message = !!this.message ? <small class={this.classMessage}>{this.message}</small> : null;

    return (
      <div class="uv-field">
        <slot name="label">{label}</slot>
        <slot>Insert an input component</slot>
        <slot name="message">{message}</slot>
      </div>
    );
  }
}
