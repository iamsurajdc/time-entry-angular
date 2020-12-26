import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DxSelectBoxModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DxSelectBoxModule,
    DxDataGridModule,
  ],
  exports: [FormsModule],
  providers: [],
  schemas: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
