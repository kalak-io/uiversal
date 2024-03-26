import { AttachInternals, Component, Event, EventEmitter, Prop, h } from '@stencil/core';

export type availableType = 'email' | 'password' | 'search' | 'tel' | 'text' | 'url';

@Component({
  tag: 'uv-input',
  formAssociated: true,
})
export class UvInput {
  /** (optional) Whether the form control is disabled */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** (optional) Associates the control with a form element */
  @Prop({ reflect: true }) form?: string = null;

  /** (optional) Maximum length (number of characters) of value */
  @Prop() maxlength?: number = null;

  /** (optional) Minimum length (number of characters) of value */
  @Prop() minlength?: number = null;

  /** (optional) Name of the form control. Submitted with the form as part of a name/value pair */
  @Prop() name?: string = null;

  /** (optional) Pattern the value must match to be valid */
  @Prop() pattern?: string = null;

  /** (optional) Text that appears in the form control when it has no value set */
  @Prop({ reflect: true }) placeholder?: string = null;

  /** (optional) The value is not editable */
  @Prop() readonly?: boolean = false;

  /** (optional) A value is required or must be checked for the form to be submittable */
  @Prop() required?: boolean = false;

  /** (optional) Size of the control */
  @Prop() size?: number = null;

  /** (optional) Input type default: 'text' */
  @Prop() type?: availableType = 'text';

  /** (optional) The initial value of the control */
  @Prop({ mutable: true }) value: string = null;

  @AttachInternals() internals: ElementInternals;

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
      <input
        disabled={this.disabled}
        form={this.form}
        maxlength={this.maxlength}
        minlength={this.minlength}
        name={this.name}
        pattern={this.pattern}
        placeholder={this.placeholder}
        readonly={this.readonly}
        required={this.required}
        size={this.size}
        type={this.type}
        value={this.value}
        onInput={event => this.handleChange(event)}
      />
    );
  }
}
