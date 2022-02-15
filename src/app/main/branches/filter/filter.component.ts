import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { environment } from '../../../../environments/environment';

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
  hosts: string[] = environment.hosts;

  constructor(private fb: FormBuilder) { }

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
