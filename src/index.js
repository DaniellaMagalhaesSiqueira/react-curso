//imports de css são referenciados sem um alias, pois não queremos acessar nada lá dentro, queremos apenas que sejam lidos
import './index.css' 
import ReactDOM from 'react-dom/client'

import App from './App'

//sintxe JSX
//render => ponto de partida da aplicação, geração do documento index
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
/*
Esse código é convertido dinamicamente para javascript usando a sintaxe jsx através da biblioteca react
Na versão atual do node está importado implicitamente nos pacotes de projetos (node 18)
*/ 
