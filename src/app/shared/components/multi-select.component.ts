import { Component } from "@angular/core";

@Component({
  selector: "multi-select",
  standalone: true,
  template: `
    <div class="multi-select-container">
      <label for="multi-select">Multi Select</label>
      <select id="multi-select" name="multi-select" >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </select>
    </div>
  `,
  styles: `
    .multi-select-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    label {
      margin-bottom: 10px;
    }
`,
})
export class MultiSelectComponent {
  constructor() {
    console.log("MultiSelectComponent created");
  }
}
