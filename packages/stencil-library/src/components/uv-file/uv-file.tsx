import { AttachInternals, Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'uv-file',
  formAssociated: true
})
export class UvFile {
  /** (optional) Hint for expected file type in file upload controls */
  @Prop() accept?: string;

  /** (optional) Media capture input method in file upload controls */
  @Prop() capture?: string;

  /** (optional) Whether the form control is disabled */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** (optional) Associates the control with a form element */
  @Prop({ reflect: true }) form?: string = null;

  /** (optional) Id of the form control */
  @Prop() inputId?: string = 'uv-file';

  /** (optional) Value of the id attribute of the <datalist> of autocomplete options */
  @Prop() list?: string = null;

  /** (optional) Whether to allow multiple values */
  @Prop() multiple?: boolean = false;

  /** (optional) Name of the form control. Submitted with the form as part of a name/value pair */
  @Prop() name?: string = null;

  /** (optional) A value is required or must be checked for the form to be submittable */
  @Prop() required?: boolean = false;

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
          type="file"
          id={this.inputId}
          accept={this.accept}
          capture={this.capture}
          disabled={this.disabled}
          form={this.form}
          list={this.list}
          multiple={this.multiple}
          name={this.name}
          onInput={event => this.handleChange(event)}
        />
      </Host>
    );
  }
};
