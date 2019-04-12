import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyModalComponent } from './my-modal.component';
import { ModalServiceModule } from './modal-service/modal-service.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalServiceModule.forRoot() ],
  declarations: [ AppComponent, MyModalComponent ],
  entryComponents: [MyModalComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
