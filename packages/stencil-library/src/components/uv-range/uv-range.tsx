import { AttachInternals, Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'uv-range',
  formAssociated: true
})
export class UvRange {
  /** (optional) Whether the form control is disabled */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** (optional) Associates the control with a form element */
  @Prop({ reflect: true }) form?: string = null;

  /** (optional) Value of the id attribute of the <datalist> of autocomplete options */
  @Prop() list?: string = null;

  /** (optional) Id of the form control */
  @Prop() inputId?: string = 'uv-checkbox';

  /** (optional) Name of the form control. Submitted with the form as part of a name/value pair */
  @Prop() name?: string = null;

  /** (optional) Minimum value */
  @Prop() min?: number = null;

  /** (optional) Maximum value */
  @Prop() max?: number = null;

  /** (optional) Options for the <datalist> */
  @Prop() options?: string[] = [];

  /** (optional) Step value */
  @Prop() step?: string = "any";

  /** (optional) The initial value of the control */
  @Prop({ mutable: true }) value: string = null;

  @AttachInternals() internals: ElementInternals;

  /** Triggers when the value of checkbox is changed */
  @Event() updated: EventEmitter<string>;

  handleChange(event) {
    this.value = event.target.value;
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
          type="range"
          id={this.inputId}
          disabled={this.disabled}
          form={this.form}
          min={this.min}
          max={this.max}
          name={this.name}
          step={this.step}
          value={this.value}
          list={this.list}
          onInput={event => this.handleChange(event)}
        />
        {this.list && this.options.length > 0 ?
          <datalist id={this.list}>
            {this.options.map(
              option => <option value={option} />
            )}
          </datalist> :
          null
        }
        {this.value}
      </Host>
    );
  }
}
