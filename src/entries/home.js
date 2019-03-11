import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from '../playlist/components/playlist';
import data from '../api.json'


import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/data';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const initialState = {
    // Importate, aqui se define el modelo de datos de la App
    data: {
        ...data,
    },
    search: [],
}
const store = createStore(
    reducer,
    initialState,
    enhancer
);

console.log(store.getState())
// ReactDOM es quien renderiza los elementos en el navegador
// La sintaxis recibe 2 parametros
// ReactDOM.render(item a renderizar, donde lo renderizara)
const homeContainer =  document.getElementById('home-container');
// const saludo = <h1>Taguebo!</h1>;

// render(<Media title='¿Que es Responsive Design?' 
//               author='Misael Duarte' 
//               img='./images/covers/responsive.jpg'
//               type='video'
//               />, homeContainer
//               );

// El Provider es un HOC Hihg Order Component. Es equivalente a los mixins
// pero dentro de react

render(
    <Provider store = {store}>
        <Home />
        {/* <p> Cosa loca</p> */}
    </Provider>
    , homeContainer
);