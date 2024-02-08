const boton = document.getElementById('click');
let grafico;

boton.addEventListener('click', () => {
  const valorPokemon = document.getElementById('valorPokemon').value;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${valorPokemon}`)
    .then(({ data }) => {
      console.log(data);

      if (grafico) {
        grafico.destroy();
      }

      const etiquetas = data.stats.map(stat => stat.stat.name);
      const datos = data.stats.map(stat => stat.base_stat);
      const imagenPokermon = document.getElementById('pokemonImage');
      const nombrePokemon = document.getElementById('pokemonName');
      imagenPokermon.src = data.sprites.front_default;
      nombrePokemon.textContent = data.name;

      const contexto = document.getElementById('pokemonChart').getContext('2d');

      grafico = new Chart(contexto, {
        type: 'bar',
        data: {
          labels: etiquetas,
          datasets: [{
            label: 'Estadísticas',
            data: datos
          }]
        }
      });
    })
    .catch(error => {
      alert("El Pokémon no existe");
    });
});

const botonAleatorio = document.getElementById('aleatorio');
botonAleatorio.addEventListener('click', () => {
  const numeroAleatorio = Math.floor(Math.random() * 898) + 1;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`)
    .then(({ data }) => {
      console.log(data);

      if (grafico) {
        grafico.destroy();
      }

      const etiquetas = data.stats.map(stat => stat.stat.name);
      const datos = data.stats.map(stat => stat.base_stat);
      const imagenPokermon = document.getElementById('pokemonImage');
      const nombrePokemon = document.getElementById('pokemonName');
      imagenPokermon.src = data.sprites.front_default;
      nombrePokemon.textContent = data.name;

      const contexto = document.getElementById('pokemonChart').getContext('2d');

      grafico = new Chart(contexto, {
        type: 'bar',
        data: {
          labels: etiquetas,
          datasets: [{
            label: 'Estadísticas',
            data: datos
            
          }]
        }
      });
    })
    .catch(error => {
      alert("El Pokémon no existe");
    });
});
