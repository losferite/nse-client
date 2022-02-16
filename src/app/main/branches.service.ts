import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
} from 'rxjs';
import { environment } from '../../environments/environment';
import { IBranches } from '../types/branches';

@Injectable({
  providedIn: 'root',
})
export class BranchesService {
  private term = new BehaviorSubject('');
  list = this.term.pipe(
    distinctUntilChanged(),
    debounceTime(300),
    switchMap((term) => this.fetch(term)),
    shareReplay(1),
  );

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getBranches(term: string = ''): void {
    this.term.next(term);
  }

  fetch(term: string): Observable<IBranches[]> {
    return this.httpClient.get<{ data: IBranches[] }>(environment.apiUrl + 'branches', {
      params: { term },
    }).pipe(
      map(i => i.data),
      catchError((err) => {
        console.warn({ err });
        return of([]);
      }),
    );
  }

  deploy(branch: string, env: string): Observable<{ data: string }> {
    return this.httpClient.get<{ data: string }>(environment.apiUrl + 'branch', {
      params: {
        id: branch,
        env: env,
      },
    });
  }
}
