import {InjectionToken} from "@angular/core";

export interface OpensSuccessAlertCommandPort {
  open(message: string): void;
}

export const OPEN_SUCCESS_ALERT = new InjectionToken<OpensSuccessAlertCommandPort>('OPEN_SUCCESS_ALERT');
