// local-storage.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorageKey = 'sharedArray';

  constructor() { }

  getArrayFromLocalStorage(): any[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  addItemToArray(item: any) {
    const array = this.getArrayFromLocalStorage();
    if (!array.includes(item)) {
      array.push(item);
      localStorage.setItem(this.localStorageKey, JSON.stringify(array));
    } else {
      console.log('Item already exists in the array.');
    }
    console.log(array)
  }
}
