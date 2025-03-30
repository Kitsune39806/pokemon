let myPokemon;
const starterOptions = document.querySelectorAll('#choose-starter button');
const chooseStarter = document.getElementById('choose-starter');
const gameContainer = document.getElementById('game-container');

starterOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedPokemonId = parseInt(option.getAttribute('data-pokemon'));
        // Aqui você poderia carregar o Pokémon real
        myPokemon = { id: selectedPokemonId, name: option.textContent };

        chooseStarter.style.display = 'none';
        gameContainer.style.display = 'block';

        startGame();
    });
});

function startGame() {
    console.log(`${myPokemon.name} foi escolhido!`);
    // Mais lógica para iniciar o jogo, por exemplo, mover o personagem, batalhas, etc.
}
