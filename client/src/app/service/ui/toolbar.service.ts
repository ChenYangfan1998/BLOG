import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private subject: Subject<String> = new BehaviorSubject<String>('light');

  public get state(): Observable<String> {
    return this.subject.asObservable();
  }

  constructor() { }

  setMode (mode: string) {
    this.subject.next(mode);
  }
}
