import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-default',
  templateUrl: './banner-default.component.html',
  styleUrls: ['./banner-default.component.scss']
})
export class BannerDefaultComponent implements OnInit {
  @Input() welcome: string = '¡Hola!'
  @Input() title: string = 'Bienvenido'
  @Input() message: string = '¡Gracias por Visitarnos!'
  @Input() image: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
