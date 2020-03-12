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
// Code
const FILEDIR: string = './inputs/';
const FILE: string = 'a_solar.txt';

let input = fileByLines(FILEDIR + FILE);
let data = input.next();

let x_limit: Number = Number(data.value[0]);
let y_limit: Number = Number(data.value[1]);

// while(!data.done){
//     console.log(data.value);
//     data = input.next()
// }
