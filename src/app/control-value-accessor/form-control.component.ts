import { Component, forwardRef } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormsModule,
} from "@angular/forms";

@Component({
  selector: "child",
  standalone: true,
  template: `
    <br />
    Child Value: {{ value.value }}
    <br />
    Child Control:
    <input
      type="text"
      [formControl]="value"
      (ngModeChange)="onChange($event)"
    />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Child),
      multi: true,
    },
  ],
  imports: [ReactiveFormsModule, FormsModule],
})
export class Child implements ControlValueAccessor {
  value = new FormControl();

  onChange: any = () => {};
  onTouched: any = () => {};

  //   constructor() {
  //     this.value.valueChanges.pipe().subscribe((val) => {
  //       console.log(val?.value);
  //       this.onChange(val?.value);
  //     });
  //   }

  writeValue(val: any): void {
    val && this.value.setValue(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}

@Component({
  selector: "parent",
  template: `
    Parent Control
    <input type="text" name="value" [(ngModel)]="value" />
    <br />
    Parent Value: {{ value }}
    <br />
    <child [(ngModel)]="value"></child>
    <br />
  `,
  standalone: true,
  imports: [FormsModule, Child],
})
export default class Parent {
  value = "test";
}
