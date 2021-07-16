import ComponentePai from './components/ComponentePai';
import './App.css';

function App(props) {
  return (
    <div>
        <h1>Olá {props.name}</h1>
        <strong>{props.primeira}</strong>
        <ComponentePai 
        terceira={"Essa props será renderizada no componente pai"}
        quarta={props.segunda}
        />
    </div>
  );
}

export default App;
