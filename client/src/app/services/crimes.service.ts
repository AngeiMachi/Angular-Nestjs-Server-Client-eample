import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Crimes } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CrimesService {

  host = 'http://localhost:3000/api';
 
  constructor(private http: HttpClient) {}
  getCrimes():Observable<Crimes[]> {
    return this.http.get<Crimes[]>(`${this.host}/crimes`).pipe(map((res) => res));
  }
  addCrimes(todo: string) {
    return this.http.post(`${this.host}/crimes`, {
      name: todo,
      completed: false,
    });
  }
  deleteCrimes(id: number) {
    return this.http.delete(`${this.host}/crimes/${id}`);
  }
}
