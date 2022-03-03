// 2.2.2 Pyramide de Mario

let ans = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
ans = Number(ans);
n = 1;
while(ans >= 1) {
  console.log(" ".repeat(ans - 1) + "#".repeat(n)),
  n += 1,
  ans -= 1
}