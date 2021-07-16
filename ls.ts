const curDir = Deno.readDirSync(".");

for (const dirEntry of curDir) {
  console.log(dirEntry.name);
}
