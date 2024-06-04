import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "i18n",
    loadComponent: () => import("./i18n/article.component"),
  },
  {
    path: "",
    redirectTo: "i18n",
    pathMatch: "full",
  },
];
