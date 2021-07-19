import React from 'react'
import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Link} from 'react-router-dom'

const BattleStats = () => {
    const {globalPokemonPairData, pokemonWinner, winnerWon} = useContext(GlobalContext)
    const [firstPokemonStats, secondPokemonStats] = globalPokemonPairData

    // if (firstPokemonStats.hp > secondPokemonStats.hp) {
    //     console.log('first hp wins')
    // }


    return (
        <>
            <div className='battle-stats-info-group'>
                <div>
                    {
                        firstPokemonStats.name === pokemonWinner.name ?
                            <div className='pokemon-names'>
                                <strong className='winner-strong'>{firstPokemonStats.name[0].toUpperCase() + firstPokemonStats.name.substr(1)}</strong>
                                <span>{secondPokemonStats.name[0].toUpperCase() + secondPokemonStats.name.substr(1)}</span>

                            </div>
                            :
                            <div className='pokemon-names'>
                                <span>{firstPokemonStats.name[0].toUpperCase() + firstPokemonStats.name.substr(1)}</span>
                                <strong className='winner-strong'>{secondPokemonStats.name[0].toUpperCase() + secondPokemonStats.name.substr(1)}</strong>

                            </div>
                    }

                    <div className='stats-group'>
                        {
                            firstPokemonStats.hp > secondPokemonStats.hp ?
                                <div className='stats-row-first'>
                                    <strong className='stats-strong-winner'>{firstPokemonStats.hp}</strong>
                                    <span> Hp&nbsp;</span>
                                    <span>{secondPokemonStats.hp}</span>
                                </div>
                                :
                                <div className='stats-row-second'>
                                    <span>{firstPokemonStats.hp}</span>
                                    <span> Hp&nbsp; </span>
                                    <strong className='stats-strong-winner'>{secondPokemonStats.hp}</strong>
                                </div>
                        }
                        {
                            firstPokemonStats.attack > secondPokemonStats.attack ?
                                <div className='stats-row-first'>
                                    <strong className='stats-strong-winner'>{firstPokemonStats.attack}</strong>
                                    <span> Attack&nbsp;</span>
                                    <span>{secondPokemonStats.attack}</span>
                                </div>
                                :
                                <div className='stats-row-second'>
                                    <span>{firstPokemonStats.attack}</span>
                                    <span> Attack&nbsp; </span>
                                    <strong className='stats-strong-winner'>{secondPokemonStats.attack}</strong>
                                </div>
                        }
                        {
                            firstPokemonStats.defense > secondPokemonStats.defense ?
                                <div className='stats-row-first'>
                                    <strong className='stats-strong-winner'>{firstPokemonStats.defense}</strong>
                                    <span> Defense&nbsp;</span>
                                    <span>{secondPokemonStats.defense}</span>
                                </div>
                                :
                                <div className='stats-row-second'>
                                    <span>{firstPokemonStats.defense}</span>
                                    <span> Defense&nbsp; </span>
                                    <strong className='stats-strong-winner'>{secondPokemonStats.defense}</strong>
                                </div>
                        }
                        {
                            firstPokemonStats.specialAttack > secondPokemonStats.specialAttack ?
                                <div className='stats-row-first'>
                                    <strong className='stats-strong-winner'>{firstPokemonStats.specialAttack}</strong>
                                    <span> Spec Attack&nbsp;</span>
                                    <span>{secondPokemonStats.specialAttack}</span>
                                </div>
                                :
                                <div className='stats-row-second'>
                                    <span>{firstPokemonStats.specialAttack}</span>
                                    <span> Special Attack&nbsp; </span>
                                    <strong className='stats-strong-winner'>{secondPokemonStats.specialAttack}</strong>
                                </div>
                        }
                        {
                            firstPokemonStats.speed > secondPokemonStats.speed ?
                                <div className='stats-row-first'>
                                    <strong className='stats-strong-winner'>{firstPokemonStats.speed}</strong>
                                    <span> Speed&nbsp;</span>
                                    <span>{secondPokemonStats.speed}</span>
                                </div>
                                :
                                <div className='stats-row-second'>
                                    <span>{firstPokemonStats.speed}</span>
                                    <span> Speed&nbsp; </span>
                                    <strong className='stats-strong-winner'>{secondPokemonStats.speed}</strong>
                                </div>
                        }
                        {
                            firstPokemonStats.name === pokemonWinner.name ?
                                <div className='stats-row-first-final'>
                                    <strong className='stats-strong-winner'>{firstPokemonStats.scoreWinPoints}</strong>
                                    <span> Final Score&nbsp;</span>
                                    <span>{secondPokemonStats.scoreWinPoints}</span>
                                </div>
                                :
                                <div className='stats-row-second-final'>
                                    <span>{firstPokemonStats.scoreWinPoints}</span>
                                    <span> Final Score&nbsp;</span>
                                    <strong className='stats-strong-winner'>{secondPokemonStats.scoreWinPoints}</strong>
                                </div>
                        }
                    </div>
                </div>
            </div>

            {winnerWon ?
                <>
                    <div style={{marginTop: '25px', marginBottom: '30px', animation: 'fadeInUp', animationDuration: '1s'}}>
                        <a onClick={() => localStorage.clear()} className='button button-secondary' href='/'>End Game</a>
                    </div>
                </>
                :
                <>
                    <div className='continue-battling' style={{marginTop: '10px', marginBottom: '12px', animation: 'fadeInUp', animationDuration: '1s'}}>
                        <Link to='/battle' className='button button-primary'>Continue battling </Link>
                    </div>
                    <div className='battle-again' style={{margin: '20px 0', animation: 'fadeInUp', animationDuration: '1s'}}>
                        <Link to='/battle' className='button button-primary'>Battle Again </Link>
                    </div>
                    <div style={{marginBottom: '25px', animation: 'fadeInUp', animationDuration: '1s'}}>
                        <a onClick={() => localStorage.clear()} className='button button-secondary' href='/'>End Game</a>
                    </div>
                </>
            }

        </>
    )
}

export default BattleStats
