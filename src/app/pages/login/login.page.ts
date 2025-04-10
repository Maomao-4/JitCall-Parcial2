import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNote, IonInput } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonNote,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginPage implements OnInit {

  AuthService: AuthService;
  router: Router;  

  constructor() {
    this.AuthService = inject(AuthService);
    this.router = inject(Router);
  }
  
  ngOnInit() {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  onSubmit() {
    if (this.form.valid) {
      this.AuthService.login(this.form.value as User).then(() => {
        this.router.navigate(['/home']);
      }).catch((error) => {
        console.error(error);
      });
    } else {
      console.log('Form is invalid');
    }
  }

  onLoginWithGoogle() {
    this.AuthService.logInGoogle().then(() => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.error('Error con Google login', error);
    });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
