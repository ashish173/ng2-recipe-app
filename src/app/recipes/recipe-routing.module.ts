// TODO not being used right now
// Change this behaviour to pick the 
// recipe routes from this file

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: RecipeStartComponent 
            },
            {
                path: 'new',
                component: RecipeEditComponent 
            },
            {
                path: ':id',
                component: RecipeDetailComponent
            },
            {
                path: ':id/edit',
                component: RecipeEditComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule {}