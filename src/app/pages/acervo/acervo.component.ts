import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcervoService } from '../../_service/acervo.service';
import { Gibi } from '../../_service/gibi.model';

@Component({
  selector: 'app-acervo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acervo.component.html',
  styleUrls: ['./acervo.component.css']
})
export class AcervoComponent {

  gibis: Gibi[] = [];

  constructor(private acervoService: AcervoService) {
    this.gibis = this.acervoService.listar();
  }
}
