import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Car} from './car';
import {ViewCarComponent} from './view-car.component';
import {CarService} from './app.service';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl : './add-car.component.html'
})

export class AddCarComponent implements OnInit{
cars: Car[];
    constructor(private _service: CarService, private _router: Router){


    }

    ViewCars() {
        this._service.ViewCars().then(data=> this.cars = data);
      }
  
      ngOnInit(): void{
        this.ViewCars();
          }
    carToAdd = new Car();


    addCar(name: string): void {
        this._service.addCar(this.carToAdd)
          .then(car => {
            this.cars.push(car);
            this._router.navigate(['/cars']);
          });
      }
}

