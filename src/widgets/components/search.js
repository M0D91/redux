import React from 'react';
import './search.css';

// function Search(props) {
//     return(
//         <div>
//             Algo
//         </div>
//     )
// }

// Lo de arriba tambien puede hacerse de modo pijo:
const Search = (props) => (
    <form 
        className='Search'
        onSubmit={props.handleSubmit}
        // action=''
        >
        <input
            ref={props.setRef} 
            type='text'
            className='Search-input'
            placeholder='Buscar video chachi'
            name='search'
            onChange={props.handleChange}
            value={props.value}
            />
    </form>
)

export default Search;