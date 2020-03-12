import * as fs from 'fs';
import { off } from 'process';
// Functions
function fileRead(fileRoute: string): string {
    return fs.readFileSync(fileRoute, 'utf8');
}

function getStain(coordX: number, coordY: number, sizeX: number, sizeY: number): number[][] {

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

    return stain;
}

function isWall(office: string[], coordX: number, coordY: number): boolean {
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
let x_limit: Number = Number(aux[0]);
let y_limit: Number = Number(aux[1]);
let office_map = [];
data = input.next()
for (let i = 0; i < y_limit; i++) {
    office_map.push(data.value.split(''));
    data = input.next();
}
let dev_number: Number = Number(data.value);
let devs = new Set();
data = input.next();
for (let i = 0; i < dev_number; i++) {
    let aux = data.value.split(' ');
    devs.add(new Dev(i, aux[0], Number(aux[1]), aux.slice(3)));
    data = input.next();
}

let manager_number: Number = Number(data.value);
let managers = new Set();
data = input.next();
for (let i = 0; i < manager_number; i++) {
    let aux = data.value.split(' ');
    managers.add(new Manager(i, aux[0], Number(aux[1])));
    data = input.next();
}

for (let i = 0; i < x_limit; i++) {
    for (let j = 0; j < y_limit; j++) {

    }
}

console.log(getStain(5, 5, 5, 5))