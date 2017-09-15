import {Injectable} from '@angular/core';
import {Car} from './car';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CarService{
 
constructor(private _http: Http){}
private _url: string = "api/cars";
private headers = new Headers({'Content-Type': 'application/json'});
cars: Car[];

ViewCars() : Promise<Car[]> {
  
    return this._http.get(this._url)
    .toPromise()
    .then(response => response.json().data as Car[])
    .catch(this.handleError);

}

addCar(carToAdd: Car) : Promise<Car>{
    
      
        return this._http
        .post(this._url, JSON.stringify(carToAdd), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Car)
        .catch(this.handleError);

    }
  
    update(car: Car): Promise<Car> {
        const url = `${this._url}/${car.id}`;
        return this._http
          .put(url, JSON.stringify(car), {headers: this.headers})
          .toPromise()
          .then(() => car)
          .catch(this.handleError);
      }


    deleteCar(id:string) : Promise<void> {
        const url = `${this._url}/${id}`;
         return this._http.delete(url, {headers: this.headers})
         .toPromise()
         .then(() => null)
         .catch(this.handleError);

    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
      }

}