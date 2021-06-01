import React from 'react'
import {Animated} from 'react-animated-css'
import PokemonCard from './PokemonCard'

const PokemonCardWinner = ({pokemonData}) => {
    return (
        <div>
            <Animated animationIn="bounceIn" animationInDuration={900} isVisible={true}>
                <PokemonCard pokemonData={pokemonData} />
            </Animated>
        </div>
    )
}

export default PokemonCardWinner
