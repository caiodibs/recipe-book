import { AppRoutingModule } from './app-routing.module';
import { ShoppingService } from './shopping/shopping.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingListFormComponent } from './shopping/shopping-list-form/shopping-list-form.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { DropdownDirective } from './shared/dropdow.directive';
import { RecipeDefaultComponent } from './recipe/recipe-default/recipe-default.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        ShoppingListFormComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeComponent,
        ShoppingComponent,
        DropdownDirective,
        RecipeDefaultComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ShoppingService],
    bootstrap: [AppComponent]
})
export class AppModule { }
