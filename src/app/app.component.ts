import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LayoutComponent } from "./layout.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <layout />
    <router-outlet />
  `,
  imports: [RouterOutlet, LayoutComponent],
})
export class AppComponent {
  title = "i18n and custom directives demo";
}
