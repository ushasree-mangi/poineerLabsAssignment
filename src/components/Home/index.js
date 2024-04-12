import './index.css'
import GraphPopulation from '../GraphPopulation'


import BitcoinPricesCard from '../BitcoinPricesCard'

const Home = () => (
  <div id="home" className="home-container">
    
    <div className="population-container">
      <div className="profile-container">
        <h1 className="home">Hello, Usha sree </h1>
        <img
          src="http://www.emoji.co.uk/files/phantom-open-emojis/smileys-people-phantom/12298-waving-hand-sign.png"
          alt="wave"
          className="hello-image"
        />
      </div>
      <div className='start-trading-text-btn-container'>
        <p className="para">
            Welcome to <span className="trade">Spot trading!</span>
        </p>
        <button type="button" className='start-trading-btn'>Start Trading</button>
        </div>  
      
      <GraphPopulation />
      <BitcoinPricesCard />
    </div>
  </div>
)
export default Home