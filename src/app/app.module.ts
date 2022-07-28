import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { CounterModule } from "./counter/counter.module";

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({}), CounterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
