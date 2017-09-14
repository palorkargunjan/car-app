import { Component, OnInit } from '@angular/core';
import {Car} from './car';
import {CarService} from './app.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './view-car.component.html',
  styleUrls: ['./app.component.css']
})

export class ViewCarComponent implements OnInit {
  
    cars : Car[];
  constructor(private _service: CarService)
  {
    
  }
  
  ViewCars() {
      this._service.ViewCars().then(data=> this.cars = data);
    }

    ngOnInit(): void{
      this.ViewCars();
        }
  

        delete(car: Car): void {
          this._service
              .deleteCar(car.id)
              .then(() => {
                this.cars = this.cars.filter(c => c !== car);
              });
        }
}
  
// export class ViewCarComponent implements OnInit{

//   cars : Car[];
// constructor(private _service : CarService)
// {
// }

// getCars(): void{
//   this._service.getCars().then(cars => this.cars = cars);
// }
// ngOnInit(): void{
//   this.getCars();
// }

// deleteCar(): void {
   

// }
  
// }
