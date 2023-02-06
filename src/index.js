import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';

// Anywhere you see 'e' remember that it's a shortcut for React.createElement function
// const e = React.createElement;

// function App() {
//   return(
//     // React.createElement('h1', {id: 'title'}, 'Oli React')
//     <h1 id="tittle">
//       Oriol Palacios
//     </h1>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <App saludo="Buenas"/>
	<App />		
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
