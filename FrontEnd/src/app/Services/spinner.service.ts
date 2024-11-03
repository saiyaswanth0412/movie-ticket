import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loading = false;

  show() {
    this.loading = true;    
  }

  hide() {
    this.loading = false;
  }

  isLoading() {
    return this.loading;
  }
}
