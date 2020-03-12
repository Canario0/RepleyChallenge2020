import * as fs from 'fs';
// Functions
function fileRead(fileRoute: string): string {
    return fs.readFileSync(FILEDIR + 'test.txt', 'utf8');
}

function* fileByLines(filefileRoute: string) {
    const data: string[] = fileRead(FILEDIR + FILE).split('\n').map((a) => a.replace('\r', ''));
    console.log(data);
    for (let i of data) {
        yield i;
    }
    return 'done'
}
// Classes

class Dev{
    order: Number;
    company: string;
    bonus: Number;
    skills = new Set();

    constructor(order:Number,company:string, bonus: Number, skills: string [] ){
        this.order = order
        this.company = company;
        this.bonus = bonus
        skills.forEach((a)=>{this.skills.add(a)});
    }
}

class Manager{
    order: Number;
    company: string;
    bonus: Number;

    constructor(order:Number,company:string, bonus: Number){
        this.order = order
        this.company = company;
        this.bonus = bonus
    }
}

// Code
const FILEDIR: string = './inputs/';
const FILE: string = 'a_solar.txt';

let input = fileByLines(FILEDIR + FILE);
let data = input.next();
while(!data.done){
    console.log(data.value);
    data = input.next()
}
