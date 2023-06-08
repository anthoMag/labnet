import Header from './components/Header';
import Fog from './components/Fog';
import Home from './pages/home/Home';
import Card from './components/ui/molecules/card/Card';
import './assets/css/scss/normalize.scss';
import './assets/css/scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Fog></Fog>
    </div>
  );
}

export default App;