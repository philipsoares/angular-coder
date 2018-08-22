import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {Restaurant} from './restaurant/restaurant.model'
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'
import {MEAT_API} from '../app.api'

@Injectable()
export class RestaurantsService{

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
    }

}