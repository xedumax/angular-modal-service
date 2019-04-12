import { Component } from '@angular/core';

import { Modal } from './modal-service/models/modal.model';

@Component({
  template: `
    <div class="modal">
      <div class="modal-header">
        <button type="button" class="close" (click)="cancel()">&times;</button>
        <h3>{{ title }}</h3>
      </div>
      <div class="modal-body">
        <p>{{ message }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="save()">Save</button>
      </div>
    </div>
  `
})
export class MyModalComponent extends Modal {

  title: string;
  message: string;

  onInjectInputs(inputs): void {
    this.title = inputs.title;
    this.message = inputs.message;
  }

  save(): void {
    this.close('saving');
  }

  cancel(): void {
    this.dismiss('canceling');
  }

}