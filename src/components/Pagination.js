import React from 'react'

const Pagination = ({pokemonsPerPage, totalPokemons, paginate, currentPage}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className='pagination'>
                <div onClick={() => currentPage === 1 ? null : paginate(currentPage - 1)} className='navigation-box'><i onClick={window.scrollTo({top: 0, behavior: 'smooth'})} class="fas fa-chevron-left"></i></div>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        {number === currentPage ?
                            <p onClick={() => {paginate(number); window.scrollTo({top: 0, behavior: 'smooth'});}} href="#" className='page-link selected '>
                                {number}
                            </p>
                            :
                            <p onClick={() => {paginate(number); window.scrollTo({top: 0, behavior: 'smooth'});}} href="#" className='page-link'>
                                {number}
                            </p>
                        }
                    </li>
                ))}
                <div className='current-page'>{currentPage}</div>
                <div onClick={() => currentPage === 9 ? null : paginate(currentPage + 1)} className='navigation-box'><i onClick={window.scrollTo({top: 0, behavior: 'smooth'})} class="fas fa-chevron-right"></i></div>
            </ul>
        </nav>
    )
}

export default Pagination
