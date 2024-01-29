import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[]=[
    new Recipe('Fried Chicken', "tasty fried chicken", 'https://www.melissassouthernstylekitchen.com/wp-content/uploads/2019/02/SouthernFriedChicken002-680x867.jpg'),
    new Recipe('cheeseburger','juicy cheeseburger',"https://divascancook.com/wp-content/uploads/2019/01/IMG_4859-728x546.jpg")
  ]



}
