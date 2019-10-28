import { Component, OnInit } from '@angular/core';
import {CocktailService} from '../cocktail.service';
import { Cocktails } from '../cocktail';



@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktails[] = [];

  constructor( private param_service:CocktailService ) {
   }

  ngOnInit() {
    this.param_service.getCocktails().subscribe(response => {this.cocktails = response});
  }

}
