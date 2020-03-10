import * as fs from 'fs';
// Functions
function fielRead(fileRoute: string): string {
    return fs.readFileSync(FILEDIR + 'test.txt', 'utf8');
}
// Code
const FILEDIR: string = './inputs/';
const FILE: string = 'test.txts';
let data : string = fielRead(FILEDIR + FILE);
console.log(data.split('\n').map((a)=> a.replace('\r', '')));