import {BehaviorSubject, Observable, shareReplay} from "rxjs";

export interface SelectsValue<T> {
  select(): Observable<T>
}

export interface SavesValue<T> {
  save(value: T): void;
}

export class InMemoryReactiveStorage<T> implements SelectsValue<T>, SavesValue<T> {
  private readonly _value = new BehaviorSubject<T | null>(null);

  constructor(readonly initialValue?: T) {
    initialValue && this._value.next(initialValue);
  }

  save(value: T): void {
    this._value.next(value);
  }


  select(): Observable<T> {
    return this._value.asObservable().pipe(shareReplay(1))
  }

}
