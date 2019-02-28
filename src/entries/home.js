import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from '../playlist/components/playlist';
import data from '../api.json'

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

render(<Home data={data}/>, homeContainer);