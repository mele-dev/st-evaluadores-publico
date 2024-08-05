import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  public items: item[] = []

  public addItem(nameof: string, contentof: string) {
    this.items.push({

      name: nameof,

      content: contentof

    })
  }

  public removeItem(item: item) {
    const index = this.items.indexOf(item);

    this.items.splice(index, 1);
  }

  public getItemList() {

    const itemList = this.items;

    return itemList;
  }
}

export interface item {
  name: string;
  content: string;
}

