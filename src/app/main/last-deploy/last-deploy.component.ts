import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ModalService } from '../modal/modal.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-last-deploy',
  templateUrl: './last-deploy.component.html',
  styleUrls: [ './last-deploy.component.css' ],
})
export class LastDeployComponent {
  lastDeploy$ = this.status.status.pipe(
    map(i => i.lastDeploy),
  );
  isDeploying$ = this.status.status.pipe(
    map(i => i.isBranchDeploying)
  );

  constructor(
    private status: StatusService,
    private modalService: ModalService,
  ) {
  }

  showLastResult(data: { error: string, message: string }): void {
    const title = data.error
      ? '<p class="font-medium text-red-500 mb-3">Произошла ошибка</p>'
      : '<p class="font-medium text-blue-600 mb-3">Вывод команды</p>';

    this.modalService.open(`${ title }
      ${ data.message }
      ${ data.error }
    `);
  }
}
