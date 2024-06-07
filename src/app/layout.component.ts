import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "layout",
  standalone: true,
  template: `
    <div class="layout">
      <!-- add language toggle to the layout -->
      <div class="language-toggle">
        <button><a href="/">English</a></button>
        <button><a href="fr-FR"> French</a></button>
      </div>
      <!-- convert above div to dropdown using select, option -->
      <!-- <div class="btn-group">
        <ul class="dropdown-menu">
          <li class="dropdown-item">
            <a href="/">English</a>
          </li>
          <li>
            <a href="fr-FR">French</a>
          </li>
        </ul>
      </div> -->

      <div class="cvr">
        <label for="form-type">
          <a>Control Value Accessor</a>
        </label>
        <select name="form-type" id="form-type" (change)="toggleForm($event)">
          <option disabled selected>Select Form</option>
          <option value="ng-control-value-accessor">Ng Form</option>
          <option value="rf-control-value-accessor">Reactive Form</option>
        </select>
      </div>
    </div>
  `,
  imports: [RouterLink],
  styles: [
    `
      .layout {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #f0f0f0;
      }

      .cvr {
        top: 10px;
        right: 10px;
        margin: 10px;
      }

      a {
        text-decoration: none;
      }

      .language-toggle {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .language-toggle button {
        margin-left: 10px;
      }
      
      .language-toggle button:first-child {
        margin-left: 0;
      }
      
    `,
  ],
})
export class LayoutComponent {
  private readonly router = inject(Router);

  toggleForm(event: Event) {
    const url = (event.target as HTMLSelectElement)?.value;
    console.log(url);
    this.router.navigateByUrl(`/${url}`);
  }
}
