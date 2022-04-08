import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {UiState} from "../../../../../../core/storage/ui-state";

const SHOW_INITIAL_VIEW_STATE = new InjectionToken<UiState<boolean>>('SHOW_INITIAL_VIEW')

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss'],
  providers: [
    {provide: SHOW_INITIAL_VIEW_STATE, useFactory: () => new UiState<boolean>(false)}
  ]
})
export class TodosContainerComponent implements OnInit {
  constructor(@Inject(SHOW_INITIAL_VIEW_STATE) private readonly _showInitialViewState: UiState<boolean>, ) { }

  ngOnInit(): void {
  }

}
