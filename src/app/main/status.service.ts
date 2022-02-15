import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, interval, mergeMap, Observable, shareReplay, startWith, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { IStatus } from '../types/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private refresh = new Subject();
  status: Observable<IStatus> = combineLatest([
    interval(10000).pipe(startWith(0)),
    this.refresh,
  ]).pipe(
    mergeMap(() => this.fetch()),
    shareReplay(1),
  )

  constructor(private httpClient: HttpClient) { }

  private fetch(): Observable<IStatus> {
    return this.httpClient.get<IStatus>(environment.apiUrl + 'status');
  }

  tick(): void {
    this.refresh.next('');
  }
}
