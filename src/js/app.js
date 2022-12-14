
window.addEventListener("DOMContentLoaded", () => {
  const pokemonCount = 10;
  const ul = document.querySelector('ul');
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonCount}`) 
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.results.forEach((pokemon) => {
        let li = document.createElement('li');
        li.innerText = pokemon.name
        ul.appendChild(li)
      });
    });
  
});


