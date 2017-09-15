import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Car} from './car';

export class CarApiService implements InMemoryDbService{
    createDb(){
       let cars= [ { id: 1, make: 'First Make', model: 'First Model', year: 2000, value: 1000, mileage: 20, transmission: 'Manual', color: 'White' },
        { id: 2, make: 'Second Make', model: 'Second Model', year: 2005, value: 2000, mileage: 20, transmission: 'Automatic', color: 'Red' },
        { id: 3, make: 'Third Make', model: 'Third Model', year: 2010, value: 3000, mileage: 20, transmission: 'Manual', color: 'Black' },
        { id: 4, make: 'Fourth Make', model: 'Fourth Model', year: 2015, value: 4000, mileage: 20, transmission: 'Automatic', color: 'Green' }
    ];
    return {cars};
}
}

export const Makes: string[] = ['First Make', 'Second Make', 'Third Make', 'Fourth Make'];

export const Models: string[] = ['First Model', 'Second Model', 'Third Model', 'Fourth Model'];
export const Transmission: string[] = ['Manual', 'Automatic']; 