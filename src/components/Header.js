import React from 'react'
import logo from '../img/logo.png'
import ResponsiveHeader from './ResponsiveHeader'
import {useParams, useLocation, Link} from 'react-router-dom'

const Header = () => {
    // let history = useHistory()
    // console.log(history)

    let location = useLocation()
    console.log(location.pathname)

    const {id} = useParams()
    // console.log(id)

    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <div>
                        {/* <a href="/"><img src={logo} alt="pokemon-logo" width="150" /></a> */}
                        <Link to='/'><img src={logo} alt="pokemon-logo" width="150" /></Link>
                    </div>
                    <div>
                        {location.pathname === '/pokemons' || location.pathname === `/pokemons/${id}` ?
                            // <a className="button header-button button-tertiary button-tertiary-active" href="/pokemons">Pokemon list</a>
                            <Link to='/pokemons' className='button header-button button-tertiary button-tertiary-active'>Pokemon list</Link>
                            :
                            // <a className="button header-button button-tertiary" href="/pokemons">Pokemon list</a>
                            <Link to='/pokemons' className='button header-button button-tertiary'>Pokemon list</Link>
                        }

                        {location.pathname === '/rules' ?
                            // <a className="button header-button button-tertiary button-tertiary-active" href="/rules">Rules</a>
                            <Link to='/rules' className='button header-button button-tertiary button-tertiary-active'>Rules</Link>
                            :
                            // <a className="button header-button button-tertiary button" href="/rules">Rules</a>
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
