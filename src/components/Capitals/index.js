import {Component} from 'react'
import './index.css'

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

// Write your code here
class Capitals extends Component {
  state = {active: countryAndCapitalsList[0].id}

  onChangeButton = event => {
    this.setState({active: event.target.value})
  }

  getCountry = () => {
    const {active} = this.state
    const countyName = countryAndCapitalsList.find(each => each.id === active)
    return countyName.country
  }

  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Countries and capitals</h1>
          <div className="selection-container">
            <select className="selection" onChange={this.onChangeButton}>
              {countryAndCapitalsList.map(each => (
                <option className="option" key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is which capital of country</p>
          </div>
          <p>{this.getCountry()}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
