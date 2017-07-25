import { Recipe } from './recipe.model';
export class RecipeService {
    // Setting new recipes
    private recipes: Recipe[] = [
        new Recipe('Test Recipe',
            'testing',
            'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
        new Recipe('Test Recipe2',
            'testing',
            'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
    ];
    getRecipes(){
        return this.recipes.slice();
    }
}
