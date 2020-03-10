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
const FILE: string = 'test.txts';

let input = fileByLines(FILEDIR + FILE);
let data = input.next();
while(!data.done){
    console.log(data.value);
    data = input.next()
}
