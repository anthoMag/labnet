import GameplayImg from '../../assets/image/gameplay';

function Gameplay() {

    return (
      <div className="gameplay">

        <div className="container">

          <h3>PRÉSENTATION</h3>

          <p>Le Labyrinthe est un jeu Minecraft présenté par Izzgun et Keidopamine tiré de la saga “The Maze Runner” réalisée par Wes Ball. Le jeu présente quelques améliorations afin de proposer une qualité de jeu unique pour les joueurs. Le Labyrinthe évolura sur plusieurs saisons et proposera des règles de jeu propre à chacune.</p>

          <h3>DÉROULEMENT DU JEU</h3>

          <p>Plusieurs règles et formats seront mis en place pour chaque saison. Le format classique sera 2 équipes de 5 à 10 joueurs. Les joueurs doivent réaliser des épreuves en équipe dans le labyrinthe afin de découvrir les indices nécessaires pour trouver la sortie. La première équipe à sortir du labyrinthe gagne la partie. L’équipe doit sortir du labyrinthe, au complet, pour valider sa victoire.</p>

          <h3>UNE EXPÉRIENCE DE JEU UNIQUE</h3>

          <p>Le labyrinthe a été construit pour accueillir les joueurs et partager une expérience de jeu immersive.</p>

          <h3>LE LABYRINTHE</h3>
          <div className="img-area">
            <img src={GameplayImg.Img1} alt="" />
          </div>
          <p>Le labyrinthe est un lieu hostile où vous rencontrerez les joueurs de l’autre équipe, et affronterez les griffeurs pendant la nuit. Des colis remplis de ressources et d’équipements apparaîteront dans le labyrinthe de manière aléatoire.</p>
          
          <h3>LE BLOC</h3>
          <div className="img-area">
            <img src={GameplayImg.Img2} alt="" />
          </div>
          <p>Le bloc, placé à l’intérieur du labyrinthe est un lieu paisible où sera installer une équipe pour y développer son agriculture, ses ressources, et ses équipements. 4 portes situées sur chaque mur du bloc se fermeront au couché du soleil et s’ouvriront au levé du jour pour pénétrer dans le labyrinthe.</p>

          <h3>LES SECTIONS</h3>
          <div className="img-responsive">
            <div>
              <div className="img-area">
                <img src={GameplayImg.Img3} alt="" />
              </div>
              <div className="img-area">
                <img src={GameplayImg.Img4} alt="" />
              </div>
            </div>
            <div>
              <div className="img-area">
                <img src={GameplayImg.Img5} alt="" />
              </div>
              <div className="img-area">
                <img src={GameplayImg.Img6} alt="" />
              </div>
            </div>
          </div>
          <p>Le labyrinthe est composé de 8 sections placées l’une après l’autre qui entoure le labyrinthe. Les sections présenteront des épreuves que les équipes devront réaliser afin de sortir du labyrinthe.</p>
        
          <h3>SAISON BONUS</h3>
          <p>Le Labyrinthe se jouera sur 1 chapitre par an. Chaque chapitre est composé de 5 saisons. 4 saisons classiques et 1 saison spéciale pour clotûrer le chapitre (SAISON FINAL ENDGAME). Les 10 meilleurs joueurs du classement des 4 saisons classiques du chapitre seront qualifiés pour y participer. Cette édition se jouera chacun pour soi. Les 3 premiers joueurs à sortir du labyrinthe seront sacrés : ‘Légende du Labyrinthe’.</p>
        </div>
      </div>
    );
  }

export default Gameplay;