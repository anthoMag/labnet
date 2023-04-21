import '../../assets/css/home.css';
import Intro from './Intro';
import Carousel from './Carousel';
import Resume from './Resume';

function Home() {

    return (
      <div className="home">
        <Intro />
        <Carousel />
        <Resume />
      </div>
    );
  }

export default Home;