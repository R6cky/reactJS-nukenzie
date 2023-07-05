import './index.css'

export const Home = ({setCurrentPage}) => {



  return (
    <div className="Container-home">
      <div className="Home-data">
        <div className="Data-left">
          <div className="Data-left__logo">
            <h1>
              Nu<span>Kenzie</span>
            </h1>
          </div>
          <div className="Data-left__title">
            <h2>Centralize o controle das suas finanças</h2>
          </div>
          <div className="Data-left__description">
            <p>de forma rápida e segura</p>
          </div>
          <div className="Start-button">
            <button onClick={() => setCurrentPage(false)}>Iniciar</button>
          </div>
        </div>

        <div className="Data-right">
           
        </div>
      </div>
    </div>
  );
};
