import * as fs from 'fs';
// Functions
function fileRead(fileRoute: string): string {
    return fs.readFileSync(fileRoute, 'utf8');
}

function* fileByLines(fileRoute: string) {
    const data: string[] = fileRead(fileRoute).split('\n').map((a) => a.replace('\r', ''));
    console.log(data);
    for (let i of data) {
        yield i;
    }
    return 'done'
}
// Classes

// Code
const FILEDIR: string = './inputs/';
const FILE: string = 'a_solar.txt';

let input = fileByLines(FILEDIR + FILE);
let data = input.next();
while (!data.done) {
    console.log(data.value);
    data = input.next()
}
