import { Injectable } from '@angular/core';
import { Auth } from './auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private auth: Auth) {}

  // login(email: string, password: string) {
  //   return signInWithEmailAndPassword(this.auth, email, password);
  // }

  // logout() {
  //   return signOut(this.auth);
  // }
}
