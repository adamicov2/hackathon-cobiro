import {InjectionToken, TemplateRef} from "@angular/core";

export interface ShowsModalCommandPort {
  show(templateRef: TemplateRef<unknown>, modalId: string): void;
}

export const SHOW_MODAL_COMMAND = new InjectionToken<ShowsModalCommandPort>('SHOW_MODAL_COMMAND');
