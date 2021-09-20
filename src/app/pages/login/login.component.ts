import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BackendClient} from '../../backend.client';
import {UserLoginDto} from '../../resources/user.login.dto';
import {AuthTokenResponse} from '../../resources/auth.token.response';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiClient: BackendClient, private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  public loginUser(formData: NgForm): void {
    this.apiClient.loginNormalUser(new UserLoginDto(formData.controls.email.value,
      formData.controls.password.value)).subscribe(
      (response: any) => {
        this.router.navigate(['/maps']);
        console.log(response)
        this.authService.login(new AuthTokenResponse(response.data.refresh_token, response.data.access_token));
      },
      (error: HttpErrorResponse) => {
        alert('Invalid login credentials.');
      }
    );
  }
}
