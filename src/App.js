import Header from './components/Header';
import Home from './pages/home/Home';
import './assets/css/scss/normalize.scss';
import './assets/css/scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;