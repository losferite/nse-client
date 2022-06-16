import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, take, takeUntil } from 'rxjs';
import { IBranches } from '../../../types/branches';
import { BranchesService } from '../../../main/branches.service';
import { ModalService } from '../../../main/modal/modal.service';
import { StatusService } from '../../../main/status.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  host?: string;
  branches: Observable<IBranches[]> = this.branchService.list;
  isBusy = false;

  constructor(
    private branchService: BranchesService,
    private statusService: StatusService,
    private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.statusService.status.pipe(
      map(i => i.isBranchDeploying),
      takeUntil(this.destroy),
    ).subscribe(res => this.isBusy = res);
  }

  ngOnDestroy(): void {
    this.destroy.next('');
    this.destroy.complete();
  }

  updateSearch(data: {term: string; host: string}): void {
    this.branchService.getBranches(data.term);
    this.host = data.host;
  }

  deploy(name: string) {
    if (this.host) {
      this.isBusy = true;
      this.branchService.deploy(name, this.host).pipe(
        take(1),
      ).subscribe(() => {
        this.statusService.tick();
        this.modalService.open(`Разливаем ветку ${ name } на стенд ${ this.host }`);
      });
    } else {
      this.modalService.open( `Выбери стенд`);
    }
  }
}
