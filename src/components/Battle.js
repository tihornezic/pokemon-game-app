import React from 'react'
import {useEffect, useState} from 'react'
import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import PokemonCardBattle from './PokemonCardBattle'
import PokemonCardWinner from './PokemonCardWinner'
import BattleStats from './BattleStats'

const Battle = () => {
    const {setGlobalPairsStatsAndWinner, pokemonWinner, winnerWon} = useContext(GlobalContext)

    // where the final 2 random fetched Pokemons are being stored
    // and used to get all the necessary data for the battle, etc. from the api
    const [pokemonPairData, setPokemonPairData] = useState([])
    const [battleInProgress, setBattleInProgress] = useState(true)

    useEffect(() => {
        // get all Pokemons data
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    const results = data.results
                    console.log(results)
                    shuffleAndGetPokemonPairs(results)
                } else {
                    shuffleAndGetPokemonPairs([])
                }
            })
            .catch(error => console.log(error))
    }, [])

    const shuffleAndGetPokemonPairs = (results) => {
        // shuffle between fetched pokemons
        const shuffled = results.sort(() => 0.5 - Math.random())
        // only get 2 pokemons
        let selected = shuffled.slice(0, 2)

        // the if part that runs on the very start of the game
        // by clicking 'Start Pokemon Battle' for the first time;
        // in other words, if localStorage variable pokemonWinner is empty object
        if (JSON.stringify(pokemonWinner) === '{}') {
            for (let i = 0; i < selected.length; i++) {
                if (i === 0) {
                    fetch(selected[0].url)
                        .then(res => res.json())
                        .then(data => {
                            if (!data.errors) {
                                const firstPokemonData = data
                                setPokemonPairData(currentData => [...currentData, firstPokemonData])
                            }
                        })
                        .catch(error => console.log(error))
                }

                if (i === 1) {
                    fetch(selected[1].url)
                        .then(res => res.json())
                        .then(data => {
                            if (!data.errors) {
                                const secondPokemonData = data
                                setPokemonPairData(currentData => [...currentData, secondPokemonData])
                            }
                        })
                        .catch(error => console.log(error))
                }
            }
            // to set the winnerPokemon as first new pokemon to battle with a new random one;
            // when the first battle finishes, get the winnerPokemon from the first battle and put it in the
            // pokemonPairData as first battle competitor
        } else {
            fetch(selected[1].url)
                .then(res => res.json())
                .then(data => {
                    if (!data.errors) {
                        const secondPokemonData = data
                        setPokemonPairData([pokemonWinner, secondPokemonData])
                    }
                })
        }
    }

    // handling battle function call
    useEffect(() => {
        // call the setGlobalPairsStatsAndWinner only if there are 2 Pokemons inside 
        // the pokemonPairData variable, else will
        // not work because Pokemons are not being stored until are fetched
        if (pokemonPairData.length === 2) {
            setTimeout(() => {
                setGlobalPairsStatsAndWinner(pokemonPairData)
                setBattleInProgress(false)
                // timeout set to exact duration of the battle animation
            }, 2500)
        }
    }, [pokemonPairData])

    return (
        <>
            { battleInProgress ? (
                <div className='background'>
                    <div className='battle'>
                        <div className='results'>
                            {pokemonPairData.map(pokemonPairData => (
                                <>
                                    <PokemonCardBattle key={pokemonPairData.id} pokemonPairData={pokemonPairData} />
                                    <span className='vs'>vs</span>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='background'>
                        <div className='winner-screen'>
                            {winnerWon ?
                                <h1>Ultimate Winner!</h1> :
                                <h1>Winner!</h1>
                            }
                            <PokemonCardWinner key={pokemonWinner.id} pokemonData={pokemonWinner} />
                            <BattleStats />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Battle
