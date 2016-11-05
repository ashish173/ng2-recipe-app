import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipe: Recipe;
  recipe = new Recipe('Dummy', 'dummy', 'http://placehold.it/50x50');

  constructor() { }

  ngOnInit() {
  }

}
