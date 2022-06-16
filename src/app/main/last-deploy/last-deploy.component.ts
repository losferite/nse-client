import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IStatus } from '../../types/status';
import { ModalService } from '../modal/modal.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-last-deploy',
  templateUrl: './last-deploy.component.html',
  styleUrls: [ './last-deploy.component.css' ],
})
export class LastDeployComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  statusData?: IStatus;

  constructor(
    private status: StatusService,
    private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.status.status.pipe(
      takeUntil(this.destroy),
    ).subscribe(res => this.statusData = res);
    this.status.tick()
  }

  ngOnDestroy(): void {
    this.destroy.next('');
    this.destroy.complete();
  }

  showLastResult(data: { error: string, message: string } | undefined): void {
    if (!data) {
      return;
    }
    const title = data.error
      ? '<p class="font-medium text-red-500 mb-3">Произошла ошибка</p>'
      : '<p class="font-medium text-blue-600 mb-3">Вывод команды</p>';

    this.modalService.open(`${ title }
      ${ data.message || '' }
      ${ data.error || '' }
    `);
  }
}
