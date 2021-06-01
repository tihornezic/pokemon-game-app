import {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    globalPokemonPairData: [],
    pokemonWinner: localStorage.getItem('pokemonWinner') ? JSON.parse(localStorage.getItem('pokemonWinner')) : {},
    winnerWon: false
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('pokemonWinner', JSON.stringify(state.pokemonWinner))
    }, [state])

    // actions
    const setGlobalPairsStatsAndWinner = (pokemonPairData) => {
        dispatch({type: 'SET_GLOBAL_PAIRS_STATS_AND_WINNER', payload: pokemonPairData})
    }

    return (
        <GlobalContext.Provider value={{
            globalPokemonPairData: state.globalPokemonPairData,
            pokemonWinner: state.pokemonWinner,
            winnerWon: state.winnerWon,
            setGlobalPairsStatsAndWinner,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}