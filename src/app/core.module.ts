import { importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp } from "firebase/app";
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbqK77Ml1pczlRc9q7XrMojoAyydkaR1c",
  authDomain: "jitcall-b4b0e.firebaseapp.com",
  projectId: "jitcall-b4b0e",
  storageBucket: "jitcall-b4b0e.firebasestorage.app",
  messagingSenderId: "192585614037",
  appId: "1:192585614037:web:4fd556d5294aa8c534585c"
};

initializeApp(firebaseConfig);

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    importProvidersFrom(
      HttpClientModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule
    )
  ],
})
export class CoreModule { }
