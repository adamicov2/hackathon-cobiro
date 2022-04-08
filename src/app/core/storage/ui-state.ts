import {BehaviorSubject, Observable, shareReplay} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class UiState<T> {
  private readonly _value = new BehaviorSubject<T | null>(null)
  constructor(initialState: T | null = null) {
    this._value.next(initialState);
  }

  setState(state: T): void {
    this._value.next(state);
  }

  select(): Observable<T> {
    return this._value.asObservable().pipe(shareReplay(1));
  }
}
