import React from 'react'
import {Animated} from 'react-animated-css'
import PokemonCard from './PokemonCard'

const PokemonCardBattle = ({pokemonPairData}) => {
    return (
        <div>
            <Animated animationIn="wobble" animationOut="wobble" animationInDuration={2500} animationOutDuration={2500} isVisible={true}>
                <PokemonCard pokemonData={pokemonPairData} />
            </Animated>
        </div>
    )
}

export default PokemonCardBattle
