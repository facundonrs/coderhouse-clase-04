import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public eventos: any[] = [
        {
            banda: 'BABASONICOS',
            fecha: '4 de Diciembre 2021',
            img: 'babasonicos_web.jpg'
        },
        {
            banda: 'CIRO Y LOS PERSAS',
            fecha: '8 de Diciembre 2021',
            img: 'nuevoshow-ciro.png'
        },
        {
            banda: 'FITO PAEZ',
            fecha: '15 de Diciembre 2022',
            img: 'nuevoshow-fito.png'
        },
        {
            banda: 'LOS PALMERAS Y LA DELIO VALDEZ',
            fecha: '18 de Diciembre 2021',
            img: '8215.jpg'
        },
        {
            banda: 'A-HA',
            fecha: '5 de Enero 2022',
            img: 'a-ha-reprog.jpg'
        },
        {
            banda: 'CUARTETO DE NOS',
            fecha: '8 de Enero 2022',
            img: '8221.jpg'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
