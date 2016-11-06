import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { Ingredient } from '../../shared/ingredient';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    console.log('Add to shopping list called', ingredients);
    this.sls.addItems(ingredients);
  }

}
