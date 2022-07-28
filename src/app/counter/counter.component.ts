import { Component } from "@angular/core";
import { createSelector, Store } from "@ngrx/store";
import * as counterSlice from "./counter-slice";

@Component({
  selector: "app-counter",
  template: `<button (click)="increment()">INCREMENT</button>:
    {{ counter$ | async }}`
})
export class CounterComponent {
  constructor(private readonly store: Store<{}>) {}

  counter$ = this.store.select(
    createSelector(counterSlice.selectFeature, (state) => state.count)
  );

  increment() {
    this.store.dispatch(counterSlice.increment());
  }
}
