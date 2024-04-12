import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import ChartItem from '../ChartItem'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class GraphPopulation extends Component {
  state = {
    apiStatus: apiConstants.initial,
    populationData: [],
  }

  componentDidMount() {
    this.getPopulationDetails()
  }

  getPopulationDetails = async () => {
    this.setState({
      apiStatus: apiConstants.inProgress,
    })
    const response = await fetch(
      'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
    )

    const dataResponse = await response.json()
    console.log(dataResponse)
    if (response.ok === true) {
      const formattedData = dataResponse.data.map(item => ({
        name: item.Nation,
        year: item.Year,
        population: item.Population,
      }))
      console.log(formattedData)
      console.log(formattedData.reverse())
      this.setState({
        apiStatus: apiConstants.success,
        populationData: formattedData,
      })
    }
  }

  renderInProgressView = () => (
    <div>
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSuccessView = () => {
    const {populationData} = this.state
    return (
      <div className="graph-population-container">
        <h1 className="population-title"> Graph Population </h1>
        <p className="population-text">Population</p>
        <ChartItem details={populationData} />
      </div>
    )
  }

  apiReports = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.inProgress:
        return this.renderInProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <div>{this.apiReports()}</div>
      </div>
    )
  }
}

export default GraphPopulation