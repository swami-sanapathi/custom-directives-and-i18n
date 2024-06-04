import { InjectionToken } from "@angular/core";

export const WINDOW = new InjectionToken<Window>("window");

export function windowProvider(document: Document) {
  return document.defaultView;
}
