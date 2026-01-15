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
  /*
  lerAgora(gibi: Gibi): void {
    console.log('📖 Ler agora clicado:', gibi);
  } */
  /* Faz download da capa do gibi */
  baixarCapa(gibi: Gibi) {
    const link = document.createElement('a');
    link.href = gibi.capa;
    link.download = `${gibi.titulo}.jpg`;
    link.click();
  }

}
