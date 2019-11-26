import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class RestaurantsService{

    private url = `${API_CONFIG.urlApi}/restaurants`;

    constructor(private http: HttpClient){

    }

    findAll() : Observable<Restaurant[]>{
        return this.http.get<Restaurant[]>(this.url);
    }

    findById(id: number) : Observable<Restaurant>{
        return this.http.get<Restaurant>(`${this.url}/id/${id}`);
    }    

}