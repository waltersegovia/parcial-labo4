// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
//import { Observable } from 'rxjs';
import { FirestoreService } from './firestore.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private user = {
    email: '',
    acceptedTerms: false,
  };

  getUser() {
    return this.user;
  }

  setUser(email: string, acceptedTerms: boolean) {
    this.user.email = email;
    this.user.acceptedTerms = acceptedTerms;
  } 
  
  constructor(private auth: Auth, private fire: FirestoreService) { 

  }
  loginUser(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  isAuthenticated() {
    return this.auth.currentUser;
  }
  registerUser(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  rolUser(){
    const user = this.isAuthenticated()
    let rol = null;
    if(user?.email){
      rol = this.fire.getRol(user.email)
    }
    return rol;
  }
  
}