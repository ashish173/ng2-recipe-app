import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  private recipeIndex: number = 1; // temp hack

  constructor(private sls: ShoppingListService, private router: Router) { }

  ngOnInit() {
    // id should be init here
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    console.log('Add to shopping list called', ingredients);
    this.sls.addItems(ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    console.log("on delete called");
    this.router.navigate(['/recipes']);
  }

}
