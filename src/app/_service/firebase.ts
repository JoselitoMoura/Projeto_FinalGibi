// Importe outros serviços conforme necessário

import { Injectable } from '@angular/core';
import { key } from '../key';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  constructor() {
    const firebaseConfig = {
      apiKey: key.apiKey,

      authDomain: 'projeto-finalgibi-5e344.firebaseapp.com',

      projectId: 'projeto-finalgibi-5e344',

      storageBucket: 'projeto-finalgibi-5e344.firebasestorage.app',

      messagingSenderId: '137970659943',

      appId: '1:137970659943:web:945717f869e215ccb8dac2',
    };
    const app = initializeApp(firebaseConfig);
  }
}
