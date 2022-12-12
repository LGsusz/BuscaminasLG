export class Cells
{
    status: 'open' | 'clear' | 'flag' = 'open';
    mines = 0;
    mineStatus= false;
    constructor(public row: number, public column: number) {}
}