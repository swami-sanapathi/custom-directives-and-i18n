import { Component, LOCALE_ID, inject } from "@angular/core";
import { WINDOW } from "../core/providers/document";

@Component({
  selector: "layout",
  standalone: true,
  template: `
    <div class="layout">
      <!-- add language toggle to the layout -->
      <div class="language-toggle">
        <button (click)="changeLanguage('en-US')">English</button>
        <button (click)="changeLanguage('fr-FR')">French</button>
      </div>
    </div>
  `,
  styles: [
    `
      .layout {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .language-toggle {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    `,
  ],
})
export class LayoutComponent {
  private readonly window = inject(WINDOW);
  private readonly locale = inject(LOCALE_ID);

  changeLanguage(lang: string) {
    const baseHref = this.locale === "en-US" ? "/" : `/${lang}`;
    this.window!.location.assign(baseHref);
  }
}
