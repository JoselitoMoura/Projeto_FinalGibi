import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, Footer, Header]
})
export class AppComponent {}
