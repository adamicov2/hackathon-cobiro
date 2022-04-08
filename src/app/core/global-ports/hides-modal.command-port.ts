import {InjectionToken} from "@angular/core";

export interface HidesModalCommandPort {
  hide(modalId: string): void;
}


export const HIDES_MODAL_COMMAND = new InjectionToken<HidesModalCommandPort>('HIDES_MODAL')
