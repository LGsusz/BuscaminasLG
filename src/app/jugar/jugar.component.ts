import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {

  constructor() { }

  filas = 10
  columnas = 10

  ngOnInit(): void {
    this.GenerarTabla();

  }
  GenerarTabla() {
    let celdas = [];
    const filas = 10;
    const columnas = 10;
    const minas = 10;
    const tabla = document.createElement("table");
    const datos = document.createElement("datos");
    for (let y = 0; y < filas; y++) {
      const row = document.createElement("tr");
      for (let x = 0; x < columnas; x++) {
        const td = document.createElement("td");

        let button = document.createElement('button');
        button.setAttribute('id', y + '-' + x);
        button.addEventListener('click', function (e) {
          console.log("hizo click el mamahuevo en la celda")
          console.log((e.target as Element).id)
          console.log(celdas)
        })
        button.innerHTML = "0";
        td.appendChild(button);
        row.appendChild(td);
      }
      datos.appendChild(row);
    }
    tabla.appendChild(datos);
    document.body.appendChild(tabla);
    tabla.setAttribute("border", "1");
    tabla.style.margin = 'auto';
    tabla.style.verticalAlign = 'middle';

    for (var i = 0; i < filas; i++) {
      celdas[i] = [];
      for (var j = 0; j < columnas; j++) {
        celdas[i][j] = {
          bomba: false,
          valor: 0,
          abierta: false
        };
      }
    }
  }

}
