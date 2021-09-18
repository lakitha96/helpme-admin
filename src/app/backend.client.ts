import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthTokenResponse} from './resources/auth.token.response';
import {Observable} from 'rxjs';
import {UserLoginDto} from './resources/user.login.dto';
import {ApiCommonResponse} from './resources/api.common.response';

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

  public getPendingOrganizations(): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/admin/organization/pending`, {headers});
  }

  public approveOrganization(uuid: any): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.post<ApiCommonResponse>(`${this.apiServiceUrl}/admin/organization/approve/` + uuid, null, {headers});
  }

  public temporaryBlockOrganization(uuid: any): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.post<ApiCommonResponse>(`${this.apiServiceUrl}/admin/organization/block/` + uuid, null, {headers});
  }

  getAllOrganizations() {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/admin/organization/all`, {headers});
  }

  getAllUsers() {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/admin/users/all`, {headers});
  }

  getAllHelpRequest() {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/admin/help-requests/all`, {headers});
  }

  getAllFundRequest() {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/admin/fund-requests/all`, {headers});
  }

  viewAllDonationDetails(fundRequestUuid: any) {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/admin/donations/all/` + fundRequestUuid, {headers});
  }

  public getAllOngoingHelpRequestsMapLocations(): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/helps/affected/location/`, {headers});
  }
}
