import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + './Newlogo.png'} />;
    </div>
  );
}

export default App;
