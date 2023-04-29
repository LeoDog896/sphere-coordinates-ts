import { generatePoints } from "./index.ts";

const amount = parseInt(Deno.args[0]);

console.log(JSON.stringify(generatePoints(amount)));