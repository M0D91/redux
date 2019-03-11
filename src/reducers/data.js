function data(state, action) {
    switch(action.type) {
        case 'SEARCH_VIDEO': {
            let results = [];
            const query=  action.payload.query.toLowerCase();
            // console.log('soy minusculo', query);
            if(query) {
                const list = state.data.categories[2].playlist;
                // action.payload.query contiene el texto a buscar que se envia
                // desde search.js
                results = list.filter((item)=>{
                    // El metodo filter devolverá una nueva lista con los datos
                    // que le enviemos.
                    
                    return item.author.toLowerCase().includes(query);
                    // En este caso solo devolverá una lista con los elementos
                    // que coincidan con el texto que hemos metido en el cuadro
                    // de busqueda.
                })
            }
                
            return {
                ...state,
                search: results
            };
        }
        default: 
            return state;
    }
}

export default data;