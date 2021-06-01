import React from 'react'
import {useEffect, useState} from 'react'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'
import LoaderSpinnerMain from './LoaderSpinnerMain'
import {Link} from 'react-router-dom'

const PokemonList = () => {
    const [pokemons, setPokemons] = useState(({}))
    const [filter, setFilter] = useState('')

    // pagination constants
    const [currentPage, setCurretPage] = useState(1)
    const [pokemonsPerPage] = useState(12)

    useEffect(() => {
        // get all Pokemons data
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    const newPokemonData = {}
                    const results = data.results
                    console.log(results)
                    results.forEach((pokemon, index) => (
                        newPokemonData[index + 1] = {
                            id: index + 1,
                            name: pokemon.name,
                            sprites: {
                                other: {
                                    ["official-artwork"]: {
                                        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
                                    }
                                }
                            }
                        }
                    ))
                    console.log(newPokemonData)
                    setPokemons(newPokemonData)
                } else {
                    setPokemons([])
                }
            })
            .catch(error => console.log(error))
    }, [])

    // 
    const getPokemonCards = (currentPokemon) => {
        return (
            <div>
                {/* <a style={{display: 'inline-block'}} href={`/pokemons/${currentPokemon.id}`}><PokemonCard pokemonData={currentPokemon} /></a> */}
                <Link to={`/pokemons/${currentPokemon.id}`} style={{display: 'inline-block'}}><PokemonCard pokemonData={currentPokemon} /></Link>
            </div>
        )
    }

    // 
    const handleSearchChange = (e) => {
        setFilter(e.target.value)
    }

    // pagination
    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage

    // converting object to array
    const pokemonsArray = Object.values(pokemons)
    console.log(pokemonsArray)

    const currentPokemons = pokemonsArray.slice(indexOfFirstPokemon, indexOfLastPokemon)
    console.log(currentPokemons)

    // change page
    const paginate = (pageNumber) => setCurretPage(pageNumber)

    return (
        <div className='background'>
            <div className='container'>
                <div className='pokemon-list'>
                    <div className='search'>
                        <input type="text" placeholder='Search Pokemons...' onChange={handleSearchChange} />
                    </div>
                    <div className='pokemon-list-grid'>
                        {filter ? pokemonsArray.map((currentPokemon, index) => (
                            pokemonsArray[index].name.includes(filter) && getPokemonCards(currentPokemon)
                        )) :
                            pokemons ? currentPokemons.map(currentPokemon => (
                                getPokemonCards(currentPokemon)
                            )) : (<LoaderSpinnerMain />)
                        }

                        {/* {Object.keys(pokemons).map((id, index) => (
                            <div>
                                <a style={{display: 'inline-block'}} href={`/pokemons/${index + 1}`}><PokemonCard pokemonData={pokemons[id]} /></a>
                            </div>
                        ))} */}
                    </div>
                    <Pagination pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemonsArray.length} paginate={paginate} currentPage={currentPage} />
                </div>
            </div>
        </div>
    )
}

export default PokemonList
