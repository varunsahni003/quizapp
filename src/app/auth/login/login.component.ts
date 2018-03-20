import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

    signIn(credentials) {
      this.authService.login(credentials)
        .subscribe(result => { 
          if (result) {
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            this.router.navigate([returnUrl || '/user']);
          }
          else  
            this.invalidLogin = true; 
        });
    }

  ngOnInit() {
  }

}
