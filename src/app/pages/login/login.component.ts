import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  senha = '';

  entrar() {
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);

    // futuramente: autenticação real
    alert('Login realizado (simulação)');
  }
}
