import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RecipeRoutingModule } from './recipes/recipe-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/recipes',
                pathMatch: 'full'
            },
            {
                path: 'recipes',
                component: RecipesComponent,
                // Later extrac thes to separate file
                children: [
                    { path: '', component: RecipeStartComponent }, // for default recipe route
                    { path: 'new', component: RecipeEditComponent }, 
                    { path: ':id', component: RecipeDetailComponent },
                    { path: ':id/edit', component: RecipeEditComponent }
                ]
            },
            {
                path: 'shopping-list',
                component: ShoppingListComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
    // providers can also be specified here which can be imported on top
})

export class AppRoutingModule {}