import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthTokenResponse} from './resources/auth.token.response';
import {Observable} from 'rxjs';
import {UserLoginDto} from './resources/user.login.dto';

@Injectable({
  providedIn: 'root'
})
export class BackendClient {
  private apiServiceUrl = 'http://localhost:8081/api';


  constructor(private http: HttpClient) {
  }

  public getCustomHeaders(): any {
    return new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      responseType: 'application/json',
      Accept: 'application/json',
    });
  }

  public loginNormalUser(user: UserLoginDto): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`${this.apiServiceUrl}/users/login`, user)
  }
}
