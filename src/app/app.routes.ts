import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "i18n",
    loadComponent: () => import("./i18n/article.component"),
  },
  {
    path: "ng-control-value-accessor",
    loadComponent: () => import("./control-value-accessor/ng-control.component"),
  },
  {
    path: "rf-control-value-accessor",
    loadComponent: () => import("./control-value-accessor/form-control.component"),
  },
  {
    path: "",
    redirectTo: "i18n",
    pathMatch: "full",
  },
];
