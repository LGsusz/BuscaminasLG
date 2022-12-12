import { Component } from '@angular/core';
import { Cells } from './jugar/cells';
import { Matriz } from './jugar/matriz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buscaminas LG';
  matriz: Matriz | any;

  constructor() {
    this.new();
  }

  checkCell(cell: Cells) {
    const result = this.matriz.check(cell);
    if (result === 'gameover') {
      alert('You lose');
    } else if (result === 'win') {
      alert('you win');
    }
  }
  flag(cell: Cells) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }
  new() {
    this.matriz = new Matriz(10, 15);
  }

}

