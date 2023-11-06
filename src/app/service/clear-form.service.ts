import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClearFormService {
  private clearFormSubject = new Subject<void>();
  public clearFormObservable = this.clearFormSubject.asObservable();

  public clearForm() {
    this.clearFormSubject.next();
  }
}
