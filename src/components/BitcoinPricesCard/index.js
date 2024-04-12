import {useState, useEffect} from 'react'
import './index.css'
import {IoMdInformationCircleOutline} from 'react-icons/io'

const BitcoinPricesCard = () => {
  const [bitcoinData, setBitcoinData] = useState({USD: {}, GBP: {}, EUR: {}})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.coindesk.com/v1/bpi/currentprice.json',
      )
      const data = await response.json()
      console.log(data.bpi.USD)
      setBitcoinData({USD: data.bpi.USD, GBP: data.bpi.GBP, EUR: data.bpi.EUR})
    }

    fetchData()
  }, [])

  return (
    <div className="bitcoin-prices-cards-container">
      <h1 className="crypto-title">Cryptocurrency Prices</h1>
      <div className="cards-container">
        <div className="bitcoin-card">
          <div className="logo-container">
            <img
              src="https://www.freepngimg.com/thumb/dollar/64058-united-dollar-sign-states-design-icon.png"
              alt="usd"
              className="logo"
            />
            <h2 className="bitcoin-price-title">USD</h2>
          </div>

          <p className="description">{bitcoinData.USD.description}</p>
          <div className="bitcoin-symbol-container">
            <p className="rate">{bitcoinData.USD.rate}</p>
            <p className="symbol">{bitcoinData.USD.symbol}</p>
          </div>
          <p className="code">Code: {bitcoinData.USD.code}</p>
          <div className="info-trade-container">
            <IoMdInformationCircleOutline className="info" />
            <button type="button" className="trade-button">
              Trade
            </button>
          </div>
        </div>
        <div className="bitcoin-card">
          <div className="logo-container">
            <img
              src="https://cdn1.iconfinder.com/data/icons/flat-world-currency-1/432/Flat_Currency_Pound-1024.png"
              alt="usd"
              className="logo"
            />
            <h2 className="bitcoin-price-title">GBP</h2>
          </div>
          <p className="description">{bitcoinData.GBP.description}</p>
          <div className="bitcoin-symbol-container">
            <p className="rate">{bitcoinData.GBP.rate}</p>
            <p className="symbol">{bitcoinData.GBP.symbol}</p>
          </div>
          <p className="code">Code: {bitcoinData.GBP.code}</p>
          <div className="info-trade-container">
            <IoMdInformationCircleOutline className="info-2" />
            <button type="button" className="trade-button">
              Trade
            </button>
          </div>
        </div>

        <div className="bitcoin-card">
          <div className="logo-container">
            <img
              src="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Euro-EUR-icon.png"
              alt="img-eur"
              className="logo"
            />
            <h2 className="bitcoin-price-title">EUR</h2>
          </div>

          <p className="description">{bitcoinData.EUR.description}</p>
          <div className="bitcoin-symbol-container">
            <p className="rate">{bitcoinData.EUR.rate}</p>
            <p className="symbol">{bitcoinData.EUR.symbol}</p>
          </div>
          <p className="code">Code: {bitcoinData.EUR.code}</p>
          <div className="info-trade-container">
            <IoMdInformationCircleOutline className="info-3" />
            <button type="button" className="trade-button">
              Trade
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BitcoinPricesCard