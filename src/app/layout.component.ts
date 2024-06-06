import { Component, LOCALE_ID, inject } from "@angular/core";
import { WINDOW } from "../core/providers/document";
import { Router } from "@angular/router";

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
  // private readonly router = inject(Router);

  changeLanguage(lang: string) {
    const baseHref = lang === "en-US" ? "/" : `/${lang}/i18n`;
    console.log(`Changing language to ${baseHref}`);
    this.window!.location.assign(baseHref);
    // this.router.navigateByUrl();
  }
}
