import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private showModalSubject = new Subject<void>();
  showModal$ = this.showModalSubject.asObservable();

  constructor() { }

  triggerModal() {
    this.showModalSubject.next();
  }
}
