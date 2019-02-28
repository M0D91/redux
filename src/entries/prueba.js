import {createStore} from 'redux';

// Definicion del estado inicial.
const initialState = [
    {
        title : 'titulo 1',
        content : 'contenido 1'
    },
    {
        title : 'titulo 2',
        content: 'contenido 2'
    }
]

// Definicion del reducer
const reducer = (state, action)=> {
    switch(action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        default:
            return state;
    }
}

// Definicion del enhancer
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Definicion del store
const store = createStore(
    reducer,
    initialState,
    enhancer
)

// Manejo de la vista.
function render() {
    const container = document.getElementById('container');
    const postList = store.getState();
    
    container.innerHTML = '';

    postList.forEach( (post)=>{
        const templateTitle = document.createElement('h2');
        templateTitle.textContent = post.title;
        const templateContent = document.createElement('p');
        templateContent.textContent = post.content;

        container.appendChild(templateTitle)
        container.appendChild(templateContent)
         
    })
}
render();

// Manejo de los eventos del formulario
const form = document.getElementById('form');
form.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();

    const data = new FormData(form);
    const title = data.get('title');
    const content = data.get('content');

    // Creación de la acción
    store.dispatch(
        {
            type:'ADD_POST',
            payload: {
                title,
                content
            }
        }
    )
}

const handleChange = ()=>{
    render();
}

// Definición del subscribe.
store.subscribe( handleChange);
