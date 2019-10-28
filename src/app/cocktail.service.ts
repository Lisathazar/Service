import { Cocktails } from './cocktail';
import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";


@Injectable({providedIn:  'root'})

export  class  CocktailService {

    private  service:  HttpClient;

    constructor(param_service:  HttpClient) {
        this.service  =  param_service;
    }

    public  getCocktails():  Observable<any> {
        return  this.service.get("assets/cocktails.json");

    }
}
