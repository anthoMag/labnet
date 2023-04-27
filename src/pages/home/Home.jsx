import '../../assets/css/scss/home.scss';
import Intro from './Intro';
import Carousel from './Carousel';
import Resume from './Resume';
import Saison from './Saison';
import Gameplay from './Gameplay';

function Home() {

    return (
      <div className="home">
        <Intro />
        <Carousel />
        <Resume />
        <Saison />
        <Gameplay />
      </div>
    );
  }

export default Home;