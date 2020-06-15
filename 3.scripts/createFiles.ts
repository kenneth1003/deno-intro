const fileName = Deno.args[0]
const content = Deno.args[1]

const contentEncoded = new TextEncoder().encode(content)

console.log('creating file...');

Deno.writeFile(`./${fileName}`, contentEncoded)
