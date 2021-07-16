const readFile = async () => {
  const data = await Deno.readTextFile("hell.txt")
  console.log(data)
}

readFile()
