import { logging } from 'protractor';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private afAuth: AngularFireAuth) {}
  email = '';
  password = '';
  title = 'initsoft_angular_day_2';

  loggingGoogle(): void {
    this.afAuth
      .signInWithPopup(new auth.auth.GoogleAuthProvider())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  login(): void {
    console.log(this.email, this.password);
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
