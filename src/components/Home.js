import React from 'react'
import logo1 from '../img/logo1.png'
import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <div className='home'>
            <div className='home-img'>
                <img src={logo1} alt="pokemon-logo" />
            </div>
            {/* <a className='button button-primary' href="/battle">Start Pokemon Battle</a> */}
            <Link to='/battle' className='button button-primary'>Start Pokemon Battle</Link>
            {/* <a className='button button-primary' href="/battle">Start Battle</a> */}
            <Link to='/battle' className='button button-primary'>Start Battle</Link>
        </div>

    )
}

export default Home
