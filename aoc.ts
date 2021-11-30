import { existsSync, readFileSync, writeFileSync } from "fs";
import axios from "axios";
import path from "path";

async function main() {
  const args = process.argv;
  if (args.length != 3) {
    console.log(`Wrong number of args: ${args.length}!`);
  }
  
  const day = args[2];
  console.log(`Running day ${day}...`);
  
  const root = path.dirname(args[1]);
  const daydir = path.join(root, `day${day}`);
  const datapath = path.join(daydir, `data.txt`);
  const codepath = path.join(daydir, `index.ts`);

  // check if we need to download the input data
  if (!existsSync(datapath)) {
    const sessionToken = readFileSync(path.join(root, '.cookie')).toString();
    const result = await axios.get(`https://adventofcode.com/2021/day/${day}/input`, { headers: { cookie: `session=${sessionToken}` } });
    writeFileSync(datapath, result.data);
  }
  
  // run the day
  require(codepath);
}

main();