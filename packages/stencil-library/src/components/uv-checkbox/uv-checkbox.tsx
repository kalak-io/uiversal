import { AttachInternals, Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'uv-checkbox',
  formAssociated: true,
})
export class UvCheckbox {
  /** (optional) Whether the form control is disabled */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** (optional) Associates the control with a form element */
  @Prop({ reflect: true }) form?: string = null;

  /** (optional) Whether the checkbox is indeterminate */
  @Prop({ reflect: true }) indeterminate?: boolean = false;

  /** (optional) Id of the form control */
  @Prop() inputId?: string = 'uv-checkbox';

  /** (optional) Name of the form control. Submitted with the form as part of a name/value pair */
  @Prop() name?: string = null;

  /** (optional) The value of the form control */
  @Prop() nativeValue?: any = false;

  /** (optional) The value when the checkbox is checked */
  @Prop() trueValue?: any = true;

  /** (optional) The value when the checkbox is unchecked */
  @Prop() falseValue?: any = false;

  /** (optional) A value is required or must be checked for the form to be submittable */
  @Prop() required?: boolean = false;

  /** (optional) The initial value of the control */
  @Prop({ mutable: true }) value?: string = null;

  @AttachInternals() internals: ElementInternals;

  @State() checked: boolean = false;

  /** Triggers when the value of checkbox is changed */
  @Event() updated: EventEmitter<string>;

  handleChange() {
    this.checked = !this.checked;
    this.value = this.checked ? this.trueValue : this.falseValue;
    this.internals.setFormValue(this.value);
    this.updated.emit(this.value);
  }

  componentWillLoad() {
    this.checked = this.nativeValue === this.trueValue;
    this.value = this.nativeValue;
    this.internals.setFormValue(this.value);
  }

  render() {
    return (
      <Host>
        <input
          type="checkbox"
          id={this.inputId}
          disabled={this.disabled}
          form={this.form}
          indeterminate={this.indeterminate}
          name={this.name}
          required={this.required}
          value={this.nativeValue}
          true-value={this.trueValue}
          false-value={this.falseValue}
          onInput={() => this.handleChange()}
        />
        <label htmlFor={this.inputId}>
          <slot />
        </label>
      </Host>
    );
  }
}
