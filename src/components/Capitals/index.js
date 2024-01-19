import {Component} from 'react'
import './index.css'
import Capital2 from '../Capital2'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].capitalDisplayText}

  onChangeCapital = event => {
    this.setState({capital: event.target.value})
  }

  filteredcountry = () => {
    const {capital} = this.state
    const filteredcountry = countryAndCapitalsList.filter(
      eachcapital => eachcapital.capitalDisplayText === capital,
    )
    return filteredcountry[0].country
  }

  render() {
    const {capital} = this.state
    const filteredcountry = this.filteredcountry()

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="bg2">
            <select onChange={this.onChangeCapital} value={filteredcountry.id}>
              {countryAndCapitalsList.map(eachcapital => (
                <Capital2 capitalDetails={eachcapital} key={eachcapital.id} />
              ))}
            </select>
            <p className="para">is capital of which country</p>
          </div>
          <p>{filteredcountry}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
