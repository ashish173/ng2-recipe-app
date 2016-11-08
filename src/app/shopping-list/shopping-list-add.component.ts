import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd: boolean = true;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if (changes.item.currentValue == null) {
      this.isAdd = true;
      this.item = {name: null, amount: null };
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newItem: Ingredient = new Ingredient(ingredient.name, ingredient.amount); 
    if (!this.isAdd) {
      this.sls.editItem(this.item, newItem);
    } else { 
       this.item = newItem;
       this.sls.addItem(this.item);       
    }
    this.onClear();
  }

  onDelete(item: Ingredient) {
    this.sls.deleteItem(item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
