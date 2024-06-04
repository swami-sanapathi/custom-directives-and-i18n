import { Component } from "@angular/core";

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
  changeLanguage(lang: string) {
    // change the baseHref to the selected language using
    const baseHref = `/${lang}`;
    window.location.assign(baseHref);
  }
}
