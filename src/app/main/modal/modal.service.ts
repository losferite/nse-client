import { Injectable } from '@angular/core';
import { distinctUntilChanged, ReplaySubject, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private content = new ReplaySubject(1);
  content$ = this.content.pipe(
    startWith(null),
    distinctUntilChanged(),
  );

  constructor() { }

  open(content: string) {
    this.content.next(content);
  }

  close() {
    this.content.next(null);
  }
}
