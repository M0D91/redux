import {createStore} from 'redux';
// import { loadavg } from 'os';

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // FormData es una clase predefinida de Javascript que contiene varias
    // funcionalidades interesantes. En este caso recibe como parámetro
    // un elemento del DOM y con su funcion .get() podemos extraer facilmente
    // el contenido de un elemento hijo de este formulario.
    // El metodo .get() del FormData recibe como parametro una string con el 
    // atributo name que tiene el elemento hijo en el DOM.
    const data = new FormData(form);
    const title = data.get('title');

    // Llamado a una acción.
    store.dispatch({
        type : 'ADD_SONG',
        payload : {
            title: title
        }
    })
    // console.log(title);
}


const initialState = [
    {
        'title' : 'titulo 1',
    },
    {
        'title' : 'titulo 2',
    },
    {
        'title' : 'titulo 3'
    }
]
const reducer = (state, action) =>{
    switch(action.type) {
        case 'ADD_SONG':
            return [...state, action.payload];
        default:
            return state;
    }
}

// El estore puede recibir 3 parametros
const store = createStore(
    // 1. Reducer: Función que hará cosas para actualizar el estado
    reducer,
    // 2. InitialState: Estado inicial de la aplicación. Puede ser un objeto, 
    // un array, un mapa, etc. Puede ser opcional
    initialState,
    // 3. Enhancer: aplicación externa que ayuda con el desarrollo. Es opcional.
    // En este caso se usa el plugin para Chrome: redux dev tools. 
    // Es una característica solo de desarrollo. Se linkea de la siguiente forma:
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


/****  getState() ****/
// Es un método del store que devuelve los datos que contiene el estado actual 
// console.log(store.getState());


// Mostrado de los datos del store en pantalla. Equivale a render de React.
function render () {
    const container = document.getElementById('playlist');
    const playlist = store.getState();

    // Borrado del contenido del elemento container para los proximos renderizados
    container.innerHTML=('');
    // Iterado del objeto de datos y mostrado en pantalla.
    playlist.forEach( (item)=>{
        const template = document.createElement('p');
        template.textContent = item.title;

        container.appendChild(template);
    })
}
render();

function handleChange() {
    render();
}


/**** subscribe() ****/
// Es un método del store que recibe como parámetro una funcíon.
// En este caso recibe la función handleChange que volverá a mostrar en pantalla
// el estado que ya ha sido modificado. Renderizando de nuevo la interfaz
// sin necesidad de recargar la página.

store.subscribe(handleChange);

/**** Las acciones ****/
// Son la única fuente de información que debe tener el store acerca de la
// aplicación. Deben ser objetos planos de JavaScript con un par key:value 
// type:'CONSTANT'. 
// Ej. {type:'ADD_SONG'} obligatoriamente.
// El resto del objeto puede contener cualquier otro key:value

// Las acciones se envían usando el método .dispatch() del store.
// Ej:
    // store.dispatch({
    //     type: 'ADD_SONG',
    //     payload: 'titulo' 
    // })

// El segundo par de key:value tambien puede recibir como valor un objeto para
// enviar más información de forma sencilla.
// Ej:
    // store.dispatch({
    //     type: 'ADD_SONG',
    //     payload: {
    //         title, author
    //     } 
    // })


/**** Los reducers ****/
// Son FUNCIONES PURAS llamadas por las acciones que devuelven el siguiente estado
// que tendrá la aplicación.
// Pueden haber varios reducers en una misma aplicación pero siempre debe haber
// un único store.
// Reciben como parámetros el estado actual de la aplicacion y una accion


    /**** Las funciones puras ****/
    // Son funciones que, dados unos parámetros de entrada deben retornar el mismo 
    // resultado sin importar el numero de veces que se llame a la función.
    // Ej. Si tengo una funcion suma() que recibe por parametros (2,2) siempre 
    // debería retornar 4 si recibe esos parametros.
    // No deben tener efectos secundarios.

// Ej:
// const reducer = (state, action)=>{
//     switch(action.type) {
//         case 'ADD_SONG':
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// }

// En el caso de recibir el parametro 'ADD_SONG' en el type devolverá un array que
// contiene el estado actual [...state] y añadirá otro objeto que contiene el 
// valor que recibe de action.payload. En este caso action.payload es un objeto
// en sí mismo que ya tiene la propiedad title, con lo que queda igual que los 
// anteriores que ya componían nuestro estado.


/***** Resumen de Ciclo de vida de Redux *****/
// 1.- Partimos de un State inicial almacenado en el Store.
// 2.- El State inicial define la Interfaz.
// 3.- La interfaz lanza Actions.
// 4.- Las Actions generan objetos con la información nueva proveniente de la 
// Interfaz y los envía a los Reducers.
// 5.- Los Reducers reciben el State actual y una Action por parámetros y 
// devuelven un nuevo State que se envía a la Store.
// 6.- La Store almacena los nuevos datos en el State
// 7.- El State al ser modificado vuelve a redibujar la Interfaz.