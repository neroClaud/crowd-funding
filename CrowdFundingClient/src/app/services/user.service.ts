import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  getUser(username: string): Observable<Boolean> {

    let params = new HttpParams();
     params = params.append('username', username);

    return this.http.get<Boolean>('api/users', { params })
          .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  errorHandler(error: any): void {
    console.log(error)
  }
}
