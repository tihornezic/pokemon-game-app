import React from 'react'
import {useEffect, useState} from 'react'
import {useParams, useHistory, useLocation, Link} from 'react-router-dom'
import PokemonCard from './PokemonCard'

const PokemonInfo = () => {
    let {id} = useParams()
    const [pokemon, setPokemon] = useState(undefined)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    const results = data
                    console.log(results)
                    setPokemon(results)
                } else {
                    setPokemon([])
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const generatePokemonJSX = () => {
        // const name = pokemon.name
        const {name, species, types, abilities, stats} = pokemon

        console.log(types)
        console.log(species)

        return (
            <div className='background'>
                <div className='container'>
                    <div className='pokemon-info'>
                        {/* <a href='/pokemons'><div className='back-button'><i className="fas fa-chevron-left"></i> Back</div></a> */}
                        <Link to='/pokemons'><div className='back-button'><i className="fas fa-chevron-left"></i> Back</div></Link>
                        <div className='pokemon-info-grid'>
                            <div>
                                <h1>{name[0].toUpperCase() + name.substr(1)}</h1>
                                {types.map((type, index) => (
                                    <p className='species'>{(index ? ', ' : '') + type.type.name[0].toUpperCase() + type.type.name.substr(1)}</p>
                                ))}
                                <p className='label-name'>Abilities</p>
                                <div className='abilities'>
                                    {abilities.map((ability, index) => (
                                        <span>{(index ? ', ' : '') + ability.ability.name[0].toUpperCase() + ability.ability.name.substr(1)}</span>
                                    ))}
                                </div>
                                <p className='label-name'>Stats</p>
                                <div className='stats-grid'>
                                    {stats.map((stat) => (
                                        <div className='stats-grid-item'>
                                            <p className='stat-name'>{stat.stat.name[0].toUpperCase() + stat.stat.name.substr(1)}</p>
                                            <p className='stat-base'>{stat.base_stat}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <PokemonCard pokemonData={pokemon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div>
            {pokemon !== undefined && pokemon && generatePokemonJSX()}
        </div>
    )
}

export default PokemonInfo
