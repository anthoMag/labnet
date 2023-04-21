import Logo from '../../assets/image/logo.svg';

function Intro() {

    return (
      <div className="intro">

        <div className="container">
            
            <h1>BIENVENUE SUR LABNET</h1>

            <img src={Logo} alt="" />

            <h2>C’est ici que vous retrouverez les résultats des joueurs qui ont participé au jeu ‘Le Labyrinthe’ sur Minecraft, présenté par Izzgun et Keidopamine.</h2>

        </div>
        
      </div>
    );
  }

export default Intro;