import { AttachInternals, Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'uv-color',
  formAssociated: true
})
export class UvColor {

  /** (optional) Whether the form control is disabled */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** (optional) Associates the control with a form element */
  @Prop({ reflect: true }) form?: string = null;

  /** (optional) Id of the form control */
  @Prop() inputId?: string = 'uv-color';

  /** (optional) Name of the form control. Submitted with the form as part of a name/value pair */
  @Prop() name?: string = null;

  /** (optional) The initial value of the control */
  @Prop({ mutable: true }) value?: string = '#000000';

  @AttachInternals() internals: ElementInternals;

  /** Triggers when the value of checkbox is changed */
  @Event() updated: EventEmitter<string>;

  handleChange(event) {
    this.value = event.target ? event.target.value : null;
    this.internals.setFormValue(this.value);
    this.updated.emit(this.value);
  }

  componentWillLoad() {
    this.internals.setFormValue(this.value);
  }

  render() {
    return (
      <Host>
        <input
          type="color"
          id={this.inputId}
          disabled={this.disabled}
          form={this.form}
          name={this.name}
          value={this.value}
          onInput={event => this.handleChange(event)}
        />
        <label htmlFor={this.inputId}>
          <slot />
        </label>
      </Host>
    );
  }
}
