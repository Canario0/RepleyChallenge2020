import * as fs from 'fs';
import { off } from 'process';
// Functions
function fileRead(fileRoute: string): string {
    return fs.readFileSync(fileRoute, 'utf8');
}

function getStain(office_map: string[][],coordX: number, coordY: number, sizeX: number, sizeY: number): number[][] {

    let stain: number[][] = [];

    if (!(coordX == 0)) {
        stain.push([coordX - 1, coordY]);
    }

    if (!(coordY == 0)) {
        stain.push([coordX, coordY - 1]);

    }

    if (!(coordX == sizeX)) {
        stain.push([coordX + 1, coordY]);

    }

    if (!(coordY == sizeY)) {
        stain.push([coordX, coordY + 1]);

    }

    stain = stain.filter((x)=>{!isWall (office_map, x[0], x[1])});
    return stain;
}

function isWall(office: string[][], coordX: number, coordY: number): boolean {
    return office[coordY][coordX] == "#"
}

function* fileByLines(fileRoute: string) {
    const data: string[] = fileRead(fileRoute).split('\n').map((a) => a.replace('\r', ''));
    for (let i of data) {
        yield i;
    }
    return 'done'
}
// Classes

class Dev {
    order: Number;
    company: string;
    bonus: Number;
    skills = new Set();
    used: boolean = false;

    constructor(order: Number, company: string, bonus: Number, skills: string[]) {
        this.order = order
        this.company = company;
        this.bonus = bonus
        skills.forEach((a) => { this.skills.add(a) });
    }
}

class Manager {
    order: Number;
    company: string;
    bonus: Number;

    constructor(order: Number, company: string, bonus: Number) {
        this.order = order
        this.company = company;
        this.bonus = bonus
    }
}

// Code
const FILEDIR: string = './inputs/';
const FILE: string = 'test.txt';

let input = fileByLines(FILEDIR + FILE);

let data = input.next();
let aux = data.value.split(' ');
let x_limit: number = Number(aux[0]);
let y_limit: number = Number(aux[1]);
let office_map = [];
data = input.next()
for (let i = 0; i < y_limit; i++) {
    office_map.push(data.value.split(''));
    data = input.next();
}
let dev_number: number = Number(data.value);
let devs = new Set();
let bonus_mean: number = 0;
data = input.next();
for (let i = 0; i < dev_number; i++) {
    let aux = data.value.split(' ');
    devs.add(new Dev(i, aux[0], Number(aux[1]), aux.slice(3)));
    bonus_mean = bonus_mean + Number(aux[1]);
    console.log(bonus_mean)
    data = input.next();
}
bonus_mean /= dev_number
console.log(bonus_mean);

console.log([...devs].filter((d, bonus_mean) => { return d.bonus < bonus_mean }).length)
console.log([...devs].filter((d, bonus_mean) => { return d.bonus >= bonus_mean }).length)



let manager_number: number = Number(data.value);
let managers = new Set();
data = input.next();
for (let i = 0; i < manager_number; i++) {
    let aux = data.value.split(' ');
    managers.add(new Manager(i, aux[0], Number(aux[1])));
    data = input.next();
}

// for (let i = 0; i < x_limit; i++) {
//     for (let j = 0; j < y_limit; j++) {
//         if (isWall(office_map, i, j)) {

//         }
//     }
// }
console.log(office_map)
console.log(getStain(office_map,1, 1, 5, 3))
console.log(getStain(office_map,0, 0, 5, 3))