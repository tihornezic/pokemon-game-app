import React from 'react'

const Rules = () => {
    return (
        <div className='background'>
            <div className='container'>
                <div className='rules'>
                    <h1>Pokemon Battle-Game rules</h1>
                    <ul>
                        <li>With each press on the button 'Start Pokemon Battle', 2 random Pokemons are starting a battle.</li>
                        <li>The Pokemon that wins the battle is declared as 'Winner' Pokemon.</li>
                        <li>Now there is an option to 'Continue battling' which will make the Winner Pokemon to proceed to next battle
                            with another random Pokemon.
                        </li>
                        <li>If new (random) Pokemon wins the battle, he will now become the 'Winner' Pokemon and the process will be repeated; but if the Pokemon which previously won in his previous battle wins again, then he is declared as the 'Ultimate Winner' and the game is over.</li>
                        <li>So the main objective is to get the strongest Pokemon possible right away, so that way the Pokemon is able to win 2 battles in a row which makes him the 'Ultimate Winner'.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Rules
