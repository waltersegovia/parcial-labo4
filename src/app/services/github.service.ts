// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GithubService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  api: string = 'https://github.com/waltersegovia';

  constructor(private http: HttpClient) {}

  todos(): Observable<any> {
    return this.http.get(this.api);
  }

}