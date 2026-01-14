import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,              // 🔹 IMPORTANTE
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],   // 🔹 plural
})
export class Header {}
