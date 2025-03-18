import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'A test Recipe description', 'https://realfood.tesco.com/media/images/1400x919-LENTIL-AND-AUBERGINE-HOT-POT-0190-56-9cda05b2-2bb5-4cc3-a749-deb37927ca10-0-1400x919.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {}
}
