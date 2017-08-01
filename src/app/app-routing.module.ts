import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeDefaultComponent } from './recipe/recipe-default/recipe-default.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {path: 'recipes', component: RecipeComponent, children: [
        { path: '', component: RecipeDefaultComponent},
        { path: ':id', component: RecipeDetailComponent}
    ] },
    {path: 'shoppinglist', component: ShoppingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
