import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, take, takeUntil } from 'rxjs';
import { IBranches } from '../../types/branches';
import { BranchesService } from '../branches.service';
import { StatusService } from '../status.service';

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
  ) {
  }

  ngOnInit(): void {
    this.statusService.status.pipe(
      map(i => i.isBranchDeploying),
      takeUntil(this.destroy),
    ).subscribe(res => this.isBusy = res);
    this.statusService.tick();
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
      this.branchService.deploy(name, this.host).pipe(
        take(1),
      ).subscribe(res => console.log(res));
      this.statusService.tick();
    } else {
      alert('Выбери стенд');
    }
  }
}
