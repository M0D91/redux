function data(state, action) {
    switch(action.type) {
        case 'SEARCH_VIDEO': {
            let results = [];
            const query=  action.payload.query.toLowerCase();
            // console.log('elements: ', state.data.categories);

                if(query) {
                    // const list = state.data.categories[2].playlist;

                    state.data.categories.map( (category) => {
                        return category.playlist.filter( (item) => {
                            if(item.author.toLowerCase().includes(query) ||
                               item.title.toLowerCase().includes(query) ) {
                                results.push(item)
                            }
                        })
                    })
                    // console.log('filtré: ', results);

                    // action.payload.query contiene el texto a buscar que se envia
                    // desde search.js
                    // results = list.filter((item)=>{
                        // El metodo filter devolverá una nueva lista con los datos
                        // que le enviemos.
                        // return item.author.toLowerCase().includes(query);
                        // En este caso solo devolverá una lista con los elementos
                        // que coincidan con el texto que hemos metido en el cuadro
                        // de busqueda.
                    // })
                    // console.log('results es: ',results);
            }
                
            return {
                ...state,
                search: results,
            };
        }
        default: 
            return state;
    }
}

export default data;