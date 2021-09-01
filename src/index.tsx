import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css'
import './services/firebase';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// O ReactDom.render recebe um html, por isso podemos subtituir pelo elemento sozinho.
// HTML dentro de javascript = JSX oou typescript TSX;

// COMPONENTES: Pequenos pedaços isolados de código que formam um uma aplicação. No react, um componente 
//é uma função que retorna o HTML.

//PROPRIEDADES: São informações que podemos passar aos componentes para que estes possam se comportar de
//maneira diferente. Em outras palavras, são os atributos do HTML (target, href, required).

//Existe uma propriedade especial: Children. TODOS OS COMPONENTES possuem essa propriedade.

/* function App() {
  return (
    <div className="App">
     <h1> Hello Word</h1>
     <Button text='Botão 1'/>
    </div>
  );
}

*/
/* ReactDOM.render(
  <React.StrictMode>
    <h1> Hello Wordddd </h1>
  </React.StrictMode>,
  document.getElementById('root')
); */