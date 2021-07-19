import React from 'react'
import logo from '../img/logo.png'
import ResponsiveHeader from './ResponsiveHeader'
import {useParams, useLocation, Link} from 'react-router-dom'

const Header = () => {
    // let history = useHistory()
    // console.log(history)

    let location = useLocation()
    // console.log(location.pathname)

    const {id} = useParams()

    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <div>
                        {localStorage.getItem('pokemonWinner') === null ?
                            <Link to='/'><img src={logo} alt='pokemon-logo' width='150' /></Link>
                            :
                            <a href='/' onClick={() => localStorage.clear()}><img src={logo} alt='pokemon-logo' width='150' /></a>
                        }
                    </div>
                    <div>
                        {location.pathname === '/pokemons' || location.pathname === `/pokemons/${id}` ?
                            <Link to='/pokemons' className='button header-button button-tertiary button-tertiary-active'>Pokemon list</Link>
                            :
                            <Link to='/pokemons' className='button header-button button-tertiary'>Pokemon list</Link>
                        }

                        {location.pathname === '/rules' ?
                            <Link to='/rules' className='button header-button button-tertiary button-tertiary-active'>Rules</Link>
                            :
                            <Link to='/rules' className='button header-button button-tertiary button'>Rules</Link>
                        }

                    </div>
                </div>
                <ResponsiveHeader />
            </div>
        </header>
    )
}

export default Header
