import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { EnvsService } from '../../../main/envs.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  @Output() update = new EventEmitter();
  form = this.fb.group({
    term: [''],
    host: [''],
  }) ;
  hosts: Observable<string[]> = this.envsServices.list.pipe(
    map(data => data.map(env => env.name)),
  );

  constructor(
    private fb: FormBuilder,
    private envsServices: EnvsService,
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroy),
    ).subscribe(res => this.update.emit(res));
  }

  ngOnDestroy(): void {
    this.destroy.next('');
    this.destroy.complete();
  }

}
