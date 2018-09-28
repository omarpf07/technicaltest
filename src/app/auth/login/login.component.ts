import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserService, UtilService } from './../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hasEntered: boolean;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private userService: UserService,
    private utilService: UtilService) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.hasEntered = true;
  }

  onSubmit(form: FormGroup) {
    this.loginForm.disable();
    const values = form.value;
    this.userService.getData().subscribe((res: any) => {
      const result = res.data.filter(el => el.username === values.username)[0];
      if (result && result.password === values.password) {
        this.auth.verificationLogin.next(true);
        this.auth.currentUser.next(result);
        this.router.navigate(['home']);
      } else {
        this.utilService.openSnackBar('Credenciales inválidas. Intenta nuevamente.');
        setTimeout(() => {
          this.loginForm.enable();
        }, 2000);
      }
    });


  }

}
