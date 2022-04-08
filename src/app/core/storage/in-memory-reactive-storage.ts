import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

export interface SelectsValue<T> {
  select(): Observable<T>;
}

export interface SavesValue<T> {
  save(value: T): void;
}

export interface ReactiveStorage<T> extends SelectsValue<T>, SavesValue<T> {}

export class InMemoryReactiveStorage<T> implements ReactiveStorage<T> {
  private readonly _value = new BehaviorSubject<T | null>(null);

  constructor(readonly initialValue?: T) {
    console.log('Instance');
    initialValue && this._value.next(initialValue);
  }

  save(value: T): void {
    console.log('Next', value);
    this._value.next(value);
  }

  select(): Observable<T | null> {
    console.log('Select called');
    return this._value.asObservable();
  }
}
