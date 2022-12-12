import { Cells } from "./cells";
const points = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
export class Matriz{
    cell: Cells [][] = [];
    private remainingCells = 0;
    private mineCount = 0;
    
    constructor(size: number, mines: number) {
        for (let y = 0; y < size; y++) {
          this.cell[y] = [];
          for (let x = 0; x < size; x++) {
            this.cell[y][x] = new Cells(y, x);
          }
        }
        //Agrega minas de forma aleatoria en las celdas dentro de un recorrido.
        for (let i = 0; i < mines; i++) {
          this.random().mineStatus = true;
        }
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            let adjacentMines = 0;
            for (const point of points) {
              if ( this.cell[y + point[0]] && this.cell[y + point[0]][x + point[1]] &&
                this.cell[y + point[0]][x + point[1]].mineStatus)
              {
                adjacentMines++;
              }
            }
            this.cell[y][x].mines = adjacentMines;
            if (this.cell[y][x].mineStatus) {
              this.mineCount++;
            }
          }
        }
        this.remainingCells = size * size - this.mineCount;
      }

      random(): Cells {
        const y = Math.floor(Math.random() * this.cell.length);
        const x = Math.floor(Math.random() * this.cell[y].length);
        return this.cell[y][x];
      }

      check(cell: Cells): 'gameover' | 'win' | null {
        if (cell.status !== 'open') {
          return null;
        } else if (cell.mineStatus) {
          this.revealAll();
          return 'gameover';
        } else {
          cell.status = 'clear';
    
          // Empty cell, let's clear the whole block.
          if(cell.mines === 0) {
            for(const point of points) {
              if (
                this.cell[cell.row + point[0]] &&
                this.cell[cell.row + point[0]][cell.column + point[1]]
              ) {
                this.check(this.cell[cell.row + point[0]][cell.column + point[1]]);
              }
            }
          }
    
    
          if (this.remainingCells-- <= 1) {
            return 'win';
          }
          return null;
        }
      }

      revealAll() {
        for (const row of this.cell) {
          for (const cell of row) {
            if (cell.status === 'open') {
              cell.status = 'clear';
            }
          }
        }
      }

}