import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, shareReplay, startWith, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { IEnvs } from '../types/envs';

@Injectable({
  providedIn: 'root'
})
export class EnvsService {
  private refresh = new Subject();
  list = this.refresh.pipe(
    startWith(0),
    mergeMap(() => this.fetch()),
    shareReplay(1),
  );

  constructor(private httpClient: HttpClient) { }

  private fetch(): Observable<IEnvs[]> {
    return this.httpClient.get<{ data: IEnvs[] }>(environment.apiUrl + 'envs').pipe(
      map(i => i.data),
    );
  }

  tick() {
    this.refresh.next('');
  }
}
