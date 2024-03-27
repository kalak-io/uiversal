/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { availableType } from "./components/uv-input/uv-input";
export { availableType } from "./components/uv-input/uv-input";
export namespace Components {
    interface UvButton {
        "callback"?: Function;
        "disabled": boolean;
    }
    interface UvCheckbox {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) The value when the checkbox is unchecked
         */
        "falseValue"?: any;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Whether the checkbox is indeterminate
         */
        "indeterminate"?: boolean;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) The value of the form control
         */
        "nativeValue"?: any;
        /**
          * (optional) A value is required or must be checked for the form to be submittable
         */
        "required"?: boolean;
        /**
          * (optional) The value when the checkbox is checked
         */
        "trueValue"?: any;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface UvColor {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface UvField {
        /**
          * (optional) The class css to apply to the label of the field.
         */
        "classLabel"?: string;
        /**
          * (optional) The class css to apply to the mesage of the field.
         */
        "classMessage"?: string;
        /**
          * (optional) The label of the field.
         */
        "label"?: string;
        /**
          * (optional) The mesage of the field.
         */
        "message"?: string;
    }
    interface UvFile {
        /**
          * (optional) Hint for expected file type in file upload controls
         */
        "accept"?: string;
        /**
          * (optional) Media capture input method in file upload controls
         */
        "capture"?: string;
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Value of the id attribute of the <datalist> of autocomplete options
         */
        "list"?: string;
        /**
          * (optional) Whether to allow multiple values
         */
        "multiple"?: boolean;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) A value is required or must be checked for the form to be submittable
         */
        "required"?: boolean;
    }
    interface UvInput {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Value of the id attribute of the <datalist> of autocomplete options
         */
        "list"?: string;
        /**
          * (optional) Maximum length (number of characters) of value
         */
        "maxlength"?: number;
        /**
          * (optional) Minimum length (number of characters) of value
         */
        "minlength"?: number;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) Options for the <datalist>
         */
        "options"?: string[];
        /**
          * (optional) Pattern the value must match to be valid
         */
        "pattern"?: string;
        /**
          * (optional) Text that appears in the form control when it has no value set
         */
        "placeholder"?: string;
        /**
          * (optional) The value is not editable
         */
        "readonly"?: boolean;
        /**
          * (optional) A value is required or must be checked for the form to be submittable
         */
        "required"?: boolean;
        /**
          * (optional) Size of the control
         */
        "size"?: number;
        /**
          * (optional) Input type default: 'text'
         */
        "type"?: availableType;
        /**
          * (optional) The initial value of the control
         */
        "value": string;
    }
    interface UvNumberinput {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Value of the id attribute of the <datalist> of autocomplete options
         */
        "list"?: string;
        /**
          * (optional) Maximum value
         */
        "max"?: number;
        /**
          * (optional) Minimum value
         */
        "min"?: number;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) Options for the <datalist>
         */
        "options"?: string[];
        /**
          * (optional) Text that appears in the form control when it has no value set
         */
        "placeholder"?: string;
        /**
          * (optional) The value is not editable
         */
        "readonly"?: boolean;
        /**
          * (optional) Step value
         */
        "step"?: string;
        /**
          * (optional) The initial value of the control
         */
        "value": string;
    }
    interface UvRadio {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) The value of the form control
         */
        "nativeValue"?: any;
        /**
          * (optional) A value is required or must be checked for the form to be submittable
         */
        "required"?: boolean;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface UvRange {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Value of the id attribute of the <datalist> of autocomplete options
         */
        "list"?: string;
        /**
          * (optional) Maximum value
         */
        "max"?: number;
        /**
          * (optional) Minimum value
         */
        "min"?: number;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) Options for the <datalist>
         */
        "options"?: string[];
        /**
          * (optional) Step value
         */
        "step"?: string;
        /**
          * (optional) The initial value of the control
         */
        "value": string;
    }
}
export interface UvCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUvCheckboxElement;
}
export interface UvColorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUvColorElement;
}
export interface UvFileCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUvFileElement;
}
export interface UvInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUvInputElement;
}
export interface UvNumberinputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUvNumberinputElement;
}
export interface UvRadioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUvRadioElement;
}
export interface UvRangeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUvRangeElement;
}
declare global {
    interface HTMLUvButtonElement extends Components.UvButton, HTMLStencilElement {
    }
    var HTMLUvButtonElement: {
        prototype: HTMLUvButtonElement;
        new (): HTMLUvButtonElement;
    };
    interface HTMLUvCheckboxElementEventMap {
        "updated": string;
    }
    interface HTMLUvCheckboxElement extends Components.UvCheckbox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUvCheckboxElementEventMap>(type: K, listener: (this: HTMLUvCheckboxElement, ev: UvCheckboxCustomEvent<HTMLUvCheckboxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUvCheckboxElementEventMap>(type: K, listener: (this: HTMLUvCheckboxElement, ev: UvCheckboxCustomEvent<HTMLUvCheckboxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUvCheckboxElement: {
        prototype: HTMLUvCheckboxElement;
        new (): HTMLUvCheckboxElement;
    };
    interface HTMLUvColorElementEventMap {
        "updated": string;
    }
    interface HTMLUvColorElement extends Components.UvColor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUvColorElementEventMap>(type: K, listener: (this: HTMLUvColorElement, ev: UvColorCustomEvent<HTMLUvColorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUvColorElementEventMap>(type: K, listener: (this: HTMLUvColorElement, ev: UvColorCustomEvent<HTMLUvColorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUvColorElement: {
        prototype: HTMLUvColorElement;
        new (): HTMLUvColorElement;
    };
    interface HTMLUvFieldElement extends Components.UvField, HTMLStencilElement {
    }
    var HTMLUvFieldElement: {
        prototype: HTMLUvFieldElement;
        new (): HTMLUvFieldElement;
    };
    interface HTMLUvFileElementEventMap {
        "updated": string;
    }
    interface HTMLUvFileElement extends Components.UvFile, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUvFileElementEventMap>(type: K, listener: (this: HTMLUvFileElement, ev: UvFileCustomEvent<HTMLUvFileElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUvFileElementEventMap>(type: K, listener: (this: HTMLUvFileElement, ev: UvFileCustomEvent<HTMLUvFileElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUvFileElement: {
        prototype: HTMLUvFileElement;
        new (): HTMLUvFileElement;
    };
    interface HTMLUvInputElementEventMap {
        "updated": string;
    }
    interface HTMLUvInputElement extends Components.UvInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUvInputElementEventMap>(type: K, listener: (this: HTMLUvInputElement, ev: UvInputCustomEvent<HTMLUvInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUvInputElementEventMap>(type: K, listener: (this: HTMLUvInputElement, ev: UvInputCustomEvent<HTMLUvInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUvInputElement: {
        prototype: HTMLUvInputElement;
        new (): HTMLUvInputElement;
    };
    interface HTMLUvNumberinputElementEventMap {
        "updated": string;
    }
    interface HTMLUvNumberinputElement extends Components.UvNumberinput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUvNumberinputElementEventMap>(type: K, listener: (this: HTMLUvNumberinputElement, ev: UvNumberinputCustomEvent<HTMLUvNumberinputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUvNumberinputElementEventMap>(type: K, listener: (this: HTMLUvNumberinputElement, ev: UvNumberinputCustomEvent<HTMLUvNumberinputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUvNumberinputElement: {
        prototype: HTMLUvNumberinputElement;
        new (): HTMLUvNumberinputElement;
    };
    interface HTMLUvRadioElementEventMap {
        "updated": string;
    }
    interface HTMLUvRadioElement extends Components.UvRadio, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUvRadioElementEventMap>(type: K, listener: (this: HTMLUvRadioElement, ev: UvRadioCustomEvent<HTMLUvRadioElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUvRadioElementEventMap>(type: K, listener: (this: HTMLUvRadioElement, ev: UvRadioCustomEvent<HTMLUvRadioElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUvRadioElement: {
        prototype: HTMLUvRadioElement;
        new (): HTMLUvRadioElement;
    };
    interface HTMLUvRangeElementEventMap {
        "updated": string;
    }
    interface HTMLUvRangeElement extends Components.UvRange, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUvRangeElementEventMap>(type: K, listener: (this: HTMLUvRangeElement, ev: UvRangeCustomEvent<HTMLUvRangeElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUvRangeElementEventMap>(type: K, listener: (this: HTMLUvRangeElement, ev: UvRangeCustomEvent<HTMLUvRangeElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUvRangeElement: {
        prototype: HTMLUvRangeElement;
        new (): HTMLUvRangeElement;
    };
    interface HTMLElementTagNameMap {
        "uv-button": HTMLUvButtonElement;
        "uv-checkbox": HTMLUvCheckboxElement;
        "uv-color": HTMLUvColorElement;
        "uv-field": HTMLUvFieldElement;
        "uv-file": HTMLUvFileElement;
        "uv-input": HTMLUvInputElement;
        "uv-numberinput": HTMLUvNumberinputElement;
        "uv-radio": HTMLUvRadioElement;
        "uv-range": HTMLUvRangeElement;
    }
}
declare namespace LocalJSX {
    interface UvButton {
        "callback"?: Function;
        "disabled"?: boolean;
    }
    interface UvCheckbox {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) The value when the checkbox is unchecked
         */
        "falseValue"?: any;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Whether the checkbox is indeterminate
         */
        "indeterminate"?: boolean;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) The value of the form control
         */
        "nativeValue"?: any;
        /**
          * Triggers when the value of checkbox is changed
         */
        "onUpdated"?: (event: UvCheckboxCustomEvent<string>) => void;
        /**
          * (optional) A value is required or must be checked for the form to be submittable
         */
        "required"?: boolean;
        /**
          * (optional) The value when the checkbox is checked
         */
        "trueValue"?: any;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface UvColor {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * Triggers when the value of checkbox is changed
         */
        "onUpdated"?: (event: UvColorCustomEvent<string>) => void;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface UvField {
        /**
          * (optional) The class css to apply to the label of the field.
         */
        "classLabel"?: string;
        /**
          * (optional) The class css to apply to the mesage of the field.
         */
        "classMessage"?: string;
        /**
          * (optional) The label of the field.
         */
        "label"?: string;
        /**
          * (optional) The mesage of the field.
         */
        "message"?: string;
    }
    interface UvFile {
        /**
          * (optional) Hint for expected file type in file upload controls
         */
        "accept"?: string;
        /**
          * (optional) Media capture input method in file upload controls
         */
        "capture"?: string;
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Value of the id attribute of the <datalist> of autocomplete options
         */
        "list"?: string;
        /**
          * (optional) Whether to allow multiple values
         */
        "multiple"?: boolean;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        "onUpdated"?: (event: UvFileCustomEvent<string>) => void;
        /**
          * (optional) A value is required or must be checked for the form to be submittable
         */
        "required"?: boolean;
    }
    interface UvInput {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Value of the id attribute of the <datalist> of autocomplete options
         */
        "list"?: string;
        /**
          * (optional) Maximum length (number of characters) of value
         */
        "maxlength"?: number;
        /**
          * (optional) Minimum length (number of characters) of value
         */
        "minlength"?: number;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        "onUpdated"?: (event: UvInputCustomEvent<string>) => void;
        /**
          * (optional) Options for the <datalist>
         */
        "options"?: string[];
        /**
          * (optional) Pattern the value must match to be valid
         */
        "pattern"?: string;
        /**
          * (optional) Text that appears in the form control when it has no value set
         */
        "placeholder"?: string;
        /**
          * (optional) The value is not editable
         */
        "readonly"?: boolean;
        /**
          * (optional) A value is required or must be checked for the form to be submittable
         */
        "required"?: boolean;
        /**
          * (optional) Size of the control
         */
        "size"?: number;
        /**
          * (optional) Input type default: 'text'
         */
        "type"?: availableType;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface UvNumberinput {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Value of the id attribute of the <datalist> of autocomplete options
         */
        "list"?: string;
        /**
          * (optional) Maximum value
         */
        "max"?: number;
        /**
          * (optional) Minimum value
         */
        "min"?: number;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * Triggers when the value of checkbox is changed
         */
        "onUpdated"?: (event: UvNumberinputCustomEvent<string>) => void;
        /**
          * (optional) Options for the <datalist>
         */
        "options"?: string[];
        /**
          * (optional) Text that appears in the form control when it has no value set
         */
        "placeholder"?: string;
        /**
          * (optional) The value is not editable
         */
        "readonly"?: boolean;
        /**
          * (optional) Step value
         */
        "step"?: string;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface UvRadio {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * (optional) The value of the form control
         */
        "nativeValue"?: any;
        /**
          * Triggers when the value of checkbox is changed
         */
        "onUpdated"?: (event: UvRadioCustomEvent<string>) => void;
        /**
          * (optional) A value is required or must be checked for the form to be submittable
         */
        "required"?: boolean;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface UvRange {
        /**
          * (optional) Whether the form control is disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Associates the control with a form element
         */
        "form"?: string;
        /**
          * (optional) Id of the form control
         */
        "inputId"?: string;
        /**
          * (optional) Value of the id attribute of the <datalist> of autocomplete options
         */
        "list"?: string;
        /**
          * (optional) Maximum value
         */
        "max"?: number;
        /**
          * (optional) Minimum value
         */
        "min"?: number;
        /**
          * (optional) Name of the form control. Submitted with the form as part of a name/value pair
         */
        "name"?: string;
        /**
          * Triggers when the value of checkbox is changed
         */
        "onUpdated"?: (event: UvRangeCustomEvent<string>) => void;
        /**
          * (optional) Options for the <datalist>
         */
        "options"?: string[];
        /**
          * (optional) Step value
         */
        "step"?: string;
        /**
          * (optional) The initial value of the control
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "uv-button": UvButton;
        "uv-checkbox": UvCheckbox;
        "uv-color": UvColor;
        "uv-field": UvField;
        "uv-file": UvFile;
        "uv-input": UvInput;
        "uv-numberinput": UvNumberinput;
        "uv-radio": UvRadio;
        "uv-range": UvRange;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uv-button": LocalJSX.UvButton & JSXBase.HTMLAttributes<HTMLUvButtonElement>;
            "uv-checkbox": LocalJSX.UvCheckbox & JSXBase.HTMLAttributes<HTMLUvCheckboxElement>;
            "uv-color": LocalJSX.UvColor & JSXBase.HTMLAttributes<HTMLUvColorElement>;
            "uv-field": LocalJSX.UvField & JSXBase.HTMLAttributes<HTMLUvFieldElement>;
            "uv-file": LocalJSX.UvFile & JSXBase.HTMLAttributes<HTMLUvFileElement>;
            "uv-input": LocalJSX.UvInput & JSXBase.HTMLAttributes<HTMLUvInputElement>;
            "uv-numberinput": LocalJSX.UvNumberinput & JSXBase.HTMLAttributes<HTMLUvNumberinputElement>;
            "uv-radio": LocalJSX.UvRadio & JSXBase.HTMLAttributes<HTMLUvRadioElement>;
            "uv-range": LocalJSX.UvRange & JSXBase.HTMLAttributes<HTMLUvRangeElement>;
        }
    }
}
