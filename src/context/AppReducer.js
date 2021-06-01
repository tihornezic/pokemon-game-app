export default (state, action) => {

    switch (action.type) {
        case 'SET_GLOBAL_PAIRS_STATS_AND_WINNER':
            // Pokemon's battle stats
            const firstPokemonStats = {
                name: '',
                hp: 0,
                attack: 0,
                defense: 0,
                specialAttack: 0,
                speed: 0,
                scoreWinPoints: 0
            }

            const secondPokemonStats = {
                name: '',
                hp: 0,
                attack: 0,
                defense: 0,
                specialAttack: 0,
                speed: 0,
                scoreWinPoints: 0
            }

            // deciding which Pokemon is a winner based on who has
            // greater amount of win points
            // (used 5 of 6 battle stats so that there is never a tie because of even number)
            let scoreWinPointsFirstPokemon = 0
            let scoreWinPointsSecondPokemon = 0


            // setting firstPokemonStats
            firstPokemonStats.name = action.payload[0].name
            firstPokemonStats.hp = action.payload[0].stats[0].base_stat
            firstPokemonStats.attack = action.payload[0].stats[1].base_stat
            firstPokemonStats.defense = action.payload[0].stats[2].base_stat
            firstPokemonStats.specialAttack = action.payload[0].stats[3].base_stat
            firstPokemonStats.speed = action.payload[0].stats[5].base_stat

            // setting firstPokemonStats
            secondPokemonStats.name = action.payload[1].name
            secondPokemonStats.hp = action.payload[1].stats[0].base_stat
            secondPokemonStats.attack = action.payload[1].stats[1].base_stat
            secondPokemonStats.defense = action.payload[1].stats[2].base_stat
            secondPokemonStats.specialAttack = action.payload[1].stats[3].base_stat
            secondPokemonStats.speed = action.payload[1].stats[5].base_stat

            // *Pokemons battle logic*
            // stats handling
            // hp handle
            if (firstPokemonStats.hp > secondPokemonStats.hp) {
                scoreWinPointsFirstPokemon++
            } else {
                scoreWinPointsSecondPokemon++
            }

            // attack handle
            if (firstPokemonStats.attack > secondPokemonStats.attack) {
                scoreWinPointsFirstPokemon++
            } else {
                scoreWinPointsSecondPokemon++
            }

            // defense handle
            if (firstPokemonStats.defense > secondPokemonStats.defense) {
                scoreWinPointsFirstPokemon++
            } else {
                scoreWinPointsSecondPokemon++
            }

            // special-attack handle
            if (firstPokemonStats.specialAttack > secondPokemonStats.specialAttack) {
                scoreWinPointsFirstPokemon++
            } else {
                scoreWinPointsSecondPokemon++
            }

            // speed handle
            if (firstPokemonStats.speed > secondPokemonStats.speed) {
                scoreWinPointsFirstPokemon++
            } else {
                scoreWinPointsSecondPokemon++
            }

            firstPokemonStats.scoreWinPoints = scoreWinPointsFirstPokemon
            secondPokemonStats.scoreWinPoints = scoreWinPointsSecondPokemon


            // final comparing Pokemons' scoreWinPoints

            // if first pokemon wins
            if (scoreWinPointsFirstPokemon > scoreWinPointsSecondPokemon) {
                console.log(`${scoreWinPointsFirstPokemon} > ${scoreWinPointsSecondPokemon} First Pokemon wins!`)
                console.log(action.payload[0])

                // if the pokemonWinner has won again
                if (state.pokemonWinner === action.payload[0]) {
                    console.log('winner won')
                    
                    return {
                        ...state,
                        // setting the pokemonPairData available globally inside the globalPokemonPairData variable
                        globalPokemonPairData: [firstPokemonStats, secondPokemonStats],
                        // setting pokemonWinner to first pokemon
                        pokemonWinner: action.payload[0],
                        winnerWon: true

                    }
                } else {
                    return {
                        ...state,
                        globalPokemonPairData: [firstPokemonStats, secondPokemonStats],
                        pokemonWinner: action.payload[0],
                    }
                }

            // if second pokemon wins
            } else {
                console.log(`${scoreWinPointsSecondPokemon} > ${scoreWinPointsFirstPokemon} Second Pokemon wins!`)
                console.log(action.payload[1])

                // if the pokemonWinner has won again
                if (state.pokemonWinner === action.payload[1]) {
                    console.log('winner won')

                    return {
                        ...state,
                        globalPokemonPairData: [firstPokemonStats, secondPokemonStats],
                        pokemonWinner: action.payload[1],
                        winnerWon: true
                    }

                } else {
                    return {
                        ...state,
                        globalPokemonPairData: [firstPokemonStats, secondPokemonStats],
                        pokemonWinner: action.payload[1]
                    }
                }
            }
    }
}