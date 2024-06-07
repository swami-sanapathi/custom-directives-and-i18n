import { Component } from "@angular/core";
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
} from "@angular/forms";

@Component({
  selector: "child",
  standalone: true,
  template: `
    <br />
    Child Value: {{ value }}
    <br />
    Child Control:
    <input type="text" [(ngModel)]="value" (ngModelChange)="onChange($event)" />
  `,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: Child, multi: true }],
  imports: [FormsModule],
})
export class Child implements ControlValueAccessor {
  value!: string;
  onChange!: (value: string) => void;

  // This method is called when the value of the control changes, but only when the control is changed from the parent component.
  writeValue(value: string): void {
    this.value = value;
  }

  // This method is called when the control value changes in the child component and
  // propagates the changes from the child to the parent component. The `onChange` method is called
  // with the new value. The `onChange` method is registered in the `registerOnChange` method initially,
  // so it holds the reference provided during `registerOnChange`.

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}
}

@Component({
  selector: "parent",
  standalone: true,
  imports: [Child, FormsModule],
  template: `
    Parent Control
    <input type="text" name="value" id="value" [(ngModel)]="value" />
    <child name="value" [(ngModel)]="value"></child>
    <br />
    Parent Value: {{ value }}
  `,
})
export default class Parent {
  value: string = "test";
}
