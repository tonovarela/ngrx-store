import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "./counter.component";
import counterReducer, { name as counterFeatureKey } from "./counter-slice";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer)
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule {}
