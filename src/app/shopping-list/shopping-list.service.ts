import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient';

// Injectable only if this service receives other services
// otherwise if it only gets injected then it'll do without
// @Injectable metadata
@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    // Applies push on each 
    Array.prototype.push.apply(this.items, items);
  }

}
