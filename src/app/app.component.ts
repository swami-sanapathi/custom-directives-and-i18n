import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MultiSelectComponent } from "./shared/components/multi-select.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h1 i18n>Welcome to {{ title }}!</h1>

    <multi-select />
  `,
  styles: [],
  imports: [RouterOutlet, MultiSelectComponent],
})
export class AppComponent {
  title = $localize`"component-directves"`;
}
