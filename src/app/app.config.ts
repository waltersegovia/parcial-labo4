import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"parcial-labo4-afca7","appId":"1:1027754138525:web:5c0605c8778a164fec2d74","storageBucket":"parcial-labo4-afca7.appspot.com","apiKey":"AIzaSyD4i0pfHyA6RdiVh8LqBk9uNgdwv0BiMCs","authDomain":"parcial-labo4-afca7.firebaseapp.com","messagingSenderId":"1027754138525"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
