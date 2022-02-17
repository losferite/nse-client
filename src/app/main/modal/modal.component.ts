import { Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  content = this.modalService.content$;
  isHidden = this.modalService.content$.pipe(
    map(i => !i),
  )

  constructor(private modalService: ModalService) { }

  close() {
    this.modalService.close();
  }
}
