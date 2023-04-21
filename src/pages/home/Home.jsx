import '../../assets/css/scss/home.scss';
import Intro from './Intro';
import Carousel from './Carousel';
import Resume from './Resume';
import Saison from './Saison';

function Home() {

    return (
      <div className="home">
        <Intro />
        <Carousel />
        <Resume />
        <Saison />
      </div>
    );
  }

export default Home;