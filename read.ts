import { join } from "https://deno.land/std/path/mod.ts";

const readFile = async () => {
  // use correst OS specific path format
  const path = join("hell.txt");
  const data = await Deno.readTextFile(path);
  // const data = await Deno.readTextFile("hell.txt");
  console.log(data);
};

readFile();
