import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { 
  Form, 
  FormBuilder, 
  FormArray, 
  FormGroup, 
  FormControl, 
  Validators
} from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeIndex: number;
  private subscription: Subscription; 
  private isNew: boolean = true;
  private recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          // Edit
          this.isNew = false
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          console.log('edit mode');
        } else {
          // New 
          this.isNew = true;
          this.recipe = null;
          console.log('create mode');          
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if (this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  get ingredients(): FormArray { return this.recipeForm.get('ingredients') as FormArray; }

  private initForm() {
    // vars
    let recipeName = '';
    let recipeImageUrl =  '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    // edit form logic
    if( !this.isNew ) {
      for(let i = 0; i < this.recipe.ingredient.length; i++) {
        recipeIngredients.push(
          // Using FormGroup
          new FormGroup({ 
            'name': new FormControl(this.recipe.ingredient[i].name, Validators.required),
            'amount': new FormControl(this.recipe.ingredient[i].amount, [
              Validators.required,
              Validators.pattern('\\d+')
            ])
          })
        );
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    // create final form
    // Using FormBuilder approach
    this.recipeForm =  this.formBuilder.group({
      'name':        [recipeName, Validators.required],
      'description': [recipeContent, Validators.required],
      'imagePath':   [recipeImageUrl, Validators.required],
      'ingredient':  recipeIngredients 
      // VIMP NOTE don't put recipeIngredients inside an array that makes it a formControl type
      // We don't want that instead it should be FormArray type whose controls could be fetched
    });
    console.log('Recipe form controls', this.recipeForm.controls);
    window['test'] = this.recipeForm;
  }


}
