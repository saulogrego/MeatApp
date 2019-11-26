import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
      this.restaurantService.findAll()
        .subscribe(restaurantes => {
          this.restaurants = restaurantes;
          console.log(this.restaurants);
        });
      
  }

}
