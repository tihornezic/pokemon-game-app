import loaderSpinner from '../img/loading.gif'

const LoaderSpinner = () => {
    return (
        <div className='loader-spinner'>
            <img src={loaderSpinner} style={{width: '170px', margin:'auto', display: 'block', textAlign: 'center' }} alt="loading"/>
        </div>
    )
}

export default LoaderSpinner
