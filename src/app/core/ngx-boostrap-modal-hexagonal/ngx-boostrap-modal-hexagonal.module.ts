import {InjectionToken, NgModule, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SHOW_MODAL_COMMAND, ShowsModalCommandPort} from "../global-ports/shows-modal.command-port";
import {HIDES_MODAL_COMMAND, HidesModalCommandPort} from "../global-ports/hides-modal.command-port";
import {BsModalRef, BsModalService, ModalModule} from "ngx-bootstrap/modal";

class NgxBoostrapModalService implements ShowsModalCommandPort, HidesModalCommandPort {
  private readonly _modalsMap = new Map<string, BsModalRef>([])

  constructor(private readonly bsModal: BsModalService) {
  }

  hide(modalId: string): void {
    this._modalsMap.get(modalId).hide();
  }

  show(templateRef: TemplateRef<unknown>, modalId: string): void {
    this._modalsMap.set(modalId, this.bsModal._showModal(templateRef))
  }

}
const BOOTSTRAP_MODAL_SERVICE = new InjectionToken<ShowsModalCommandPort & HidesModalCommandPort>('BOOTSTRAP_MODAL_SERVICE');

@NgModule({
  declarations: [],
  imports: [
    ModalModule.forRoot(),
    CommonModule
  ],
  providers: [
    {provide: BOOTSTRAP_MODAL_SERVICE, useClass: NgxBoostrapModalService},
    {provide: SHOW_MODAL_COMMAND, useExisting: BOOTSTRAP_MODAL_SERVICE},
    {provide: HIDES_MODAL_COMMAND, useExisting: BOOTSTRAP_MODAL_SERVICE},
  ]
})
export class NgxBoostrapModalHexagonalModule { }
