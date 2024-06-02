// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BanderasService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BanderasService {
  api: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  
  getRegion(region: string): Observable<any> {
      return this.http.get(this.api + 'region/' + region);
    }
  todos(): Observable<any> {
    return this.http.get(this.api + 'all');
  }

  pais(nombrePais: string): Observable<any> {
    return this.http.get(this.api + 'name/' + nombrePais);
  }
}