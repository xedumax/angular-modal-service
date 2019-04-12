import { Component } from '@angular/core';

import { ModalService } from './modal-service/modal-service.service';
import { ModalRef } from './modal-service/models/modal-ref.model';
import { MyModalComponent } from './my-modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(
    private modalService: ModalService
  ) { }

  onCreateModal(): void {
    const modalRef = this.modalService.open(MyModalComponent, { title: 'My dynamic title', message: 'My dynamic message' });

    modalRef.onResult().subscribe(
      closed => console.log('closed', closed),
      dismissed => console.log('dismissed', dismissed),
      () => console.log('completed')
    );
  }
}
