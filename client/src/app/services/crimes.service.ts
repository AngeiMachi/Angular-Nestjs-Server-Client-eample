import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Crime } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CrimesService {

  host = 'http://localhost:3000';
 
  constructor(private http: HttpClient) {}
  getCrimes():Observable<Crime[]> {
    return this.http.get<Crime[]>(`${this.host}/crimes/getCrimes`).pipe(map((res) => res));
  }
  createCrime(crime: Crime) {
    return this.http.post(`${this.host}/crimes/createCrime`, crime);
  }
  deleteCrimes(id: number) {
    return this.http.delete(`${this.host}/crimes/${id}`);
  }
}
