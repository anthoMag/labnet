function Carousel() {

  return (
      <div className="carousel">
        <div className="slider" width={window.innerWidth}>
          <div className="slide-track">
            
            <div className="slide info">
              <p>Chapitre 2</p>
              <p>La naissance d'un héros</p>
            </div>

            <div className="slide player">
              <div className="head"></div>
              <div>
                <p className="name">Croutard</p>
                <div className="rank">
                  <p>#1</p>
                  <p>| 134,7</p>
                </div>
              </div>
            </div>

            <div className="slide player">
              <div className="head"></div>
              <div>
                <p className="name">Iserion</p>
                <div className="rank">
                  <p>#2</p>
                  <p>| 128,3</p>
                </div>
              </div>
            </div>

            <div className="slide info">
              <p>Édition FINAL ENDGAME</p>
              <p>‹ Qualifiés | Non-qualifiés ›</p>
            </div>

            <div className="slide player">
              <div className="head"></div>
              <div>
                <p className="name">Posuu_</p>
                <div className="rank">
                  <p>#3</p>
                  <p>| 103,3</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

export default Carousel;