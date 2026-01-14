import { Injectable } from '@angular/core';
import { Gibi } from './gibi.model';

@Injectable({
  providedIn: 'root'
})
export class AcervoService {

  private gibis: Gibi[] = [
    {
      id: 1,
      titulo: 'Specktro - Especial dos Vampiros',
      editora: 'Vecchi',
      numero: 5,
      capa: 'assets/capas/specktro5.jpg'
    },
    {
      id: 2,
      titulo: 'Classic Tex 1 - O Totem Misterioso',
      editora: 'Sergio Bonelli',
      numero: 1,
      capa: 'assets/capas/TexClassic01.jpg'
    },
    {
      id: 3,
      titulo: 'Classic Tex 2 - A Mão Fantasma',
      editora: 'Sergio Bonelli',
      numero: 2,
      capa: 'assets/capas/TexClassic02.jpg'
    },
    {
      id: 4,
      titulo: 'Hotel do Terror',
      editora: 'Elipse',
      numero: 1,
      capa: 'assets/capas/HotelNicanor.jpg'
    }
  ];

  listar(): Gibi[] {
    return this.gibis;
  }
}
