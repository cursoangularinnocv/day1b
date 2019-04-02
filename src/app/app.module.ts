import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Test2Directive } from './test2.directive';
import { EmployeeDisplayerComponent } from './employee-displayer/employee-displayer.component';
import { ColorPickerComponent } from './header/color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    Test2Directive,
    EmployeeDisplayerComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
