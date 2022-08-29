import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ResultViewComponent } from './components/result-view/result-view.component';


@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
