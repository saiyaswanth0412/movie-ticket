import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  private genreSubject = new BehaviorSubject<string>('All');
  selectedGenere$ = this.genreSubject.asObservable();

  set selectedGenere(value: string) {
    this.genreSubject.next(value);
  }

  get selectedGenere(): string {
    return this.genreSubject.getValue();
  }
}
