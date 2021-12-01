import { readFileSync } from "fs";
import path from "path";

const input = readFileSync(path.join(process.cwd(), "day1", "data.txt")).toString().split("\n");
console.log(input.map(s=>parseInt(s)).reduce((p,c,i,a)=>i>0&&c>a[i-1]?p+1:p,0));
console.log(input.map(s=>parseInt(s)).map((v,i,a)=>i>2?v+a[i-1]+a[i-2]:0).reduce((p,c,i,a)=>i>0&&c>a[i-1]?p+1:p,0));
