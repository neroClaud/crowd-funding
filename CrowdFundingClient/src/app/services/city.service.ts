import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) { }


  getCities(): Observable<City[]> {
    return this.http.get<City[]>('api/cities');
  }
}
