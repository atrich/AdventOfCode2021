import { readFileSync } from "fs";
import path from "path";

const input = readFileSync(path.join(process.cwd(), "day2", "data.txt")).toString().split("\n");

const pI = parseInt;
var x = input.map(s=>s.split(' ')).map(a=>[a[0][0]=='f'?pI(a[1]):0,a[0][0]=='d'?pI(a[1]):a[0][0]=='u'?-pI(a[1]):0]).reduce((p,c)=>[p[0]+c[0],p[1]+c[1]]);
console.log(x[0]*x[1]);
var y = input.map(s=>s.split(' ')).map(a=>[a[0][0]=='f'?pI(a[1]):0,a[0][0]=='d'?pI(a[1]):a[0][0]=='u'?-pI(a[1]):0]).reduce((p,c)=>[p[0]+c[0],p[1]+c[1],p[2]+c[0]*(p[1]+c[1])],[0,0,0]);
console.log(y[0]*y[2]);

