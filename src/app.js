//Declarar los arreglos
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net"];

//Uso de loop para generar los nombres de dominios y concatenarlos
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extension[l]);
      }
    }
  }
}
//Ya soy una programadora B)
