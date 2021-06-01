import React from 'react'
import loaderSpinner from '../img/loading.gif'

const LoaderSpinnerSmall = () => {
    return (
        <div className='loader-spinner'>
            <img src={loaderSpinner} style={{width: '170px', margin: 'auto', display: 'block', textAlign: 'center', marginTop: '40px'}} alt="loading" />
        </div>
    )
}

export default LoaderSpinnerSmall
