import React from 'react'
import {useState} from 'react'
import LoaderSpinnerSmall from './LoaderSpinnerSmall'
import {useLocation} from 'react-router-dom'

const PokemonCard = ({pokemonData}) => {
    let location = useLocation()
    const [loaded, setLoaded] = useState(false);

    return (
        <div className='pokemon-card'>
            <div className='pokemon-outside-outline'>
                <div className='pokemon-inner-outline'>
                    {loaded ? null : (<LoaderSpinnerSmall />)}
                    <img src={`${pokemonData.sprites.other["official-artwork"].front_default}`}
                        style={loaded ? {} : {display: 'none'}} onLoad={() => setLoaded(true)} alt={``} />
                    <p>{pokemonData.name[0].toUpperCase() + pokemonData.name.substr(1)}</p>
                    {location.pathname === '/pokemons' ? null : <div className='shadow'></div>}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
