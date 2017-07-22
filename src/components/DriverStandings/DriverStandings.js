import React, { Component } from 'react'
import './DriverStandings.css'

class DriverStandings extends Component {

  getStandings() {
    let url = 'http://ergast.com/api/f1/current/driverStandings.json';

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let result = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

      return result.map(function(driver) {
        const drivers                 = document.querySelector('.driver-standings__list-body');
        const driverItem              = document.createElement('tr');
        const driverName              = document.createElement('td');
        const driverCode              = document.createElement('td');
        const driverConstructor       = document.createElement('td');
        const driverPosition          = document.createElement('td');
        const driverPoints            = document.createElement('td');
        const driverWins              = document.createElement('td');

        driverName.innerHTML          = driver.Driver.familyName;
        driverCode.innerHTML          = driver.Driver.code;
        driverConstructor.innerHTML   = driver.Constructors[0].name;
        driverPosition.innerHTML      = driver.position;
        driverPoints.innerHTML        = driver.points;
        driverWins.innerHTML          = driver.wins;

        driverItem.appendChild(driverName);
        driverItem.appendChild(driverCode);
        driverItem.appendChild(driverConstructor);
        driverItem.appendChild(driverPosition);
        driverItem.appendChild(driverPoints);
        driverItem.appendChild(driverWins);

        drivers.appendChild(driverItem);
      })
    })

    .catch(function(error) {
      console.log('Something went wrong...' + error);
    });   
  }

  componentDidMount() {
    this.getStandings();
  }

  render() {
    return (
      <table className="driver-standings__list">
        <thead>
          <tr>
            <td>Name</td>
            <td>Code</td>
            <td>Constructor</td>
            <td>Position</td>
            <td>Points</td>
            <td>Wins</td>
          </tr>
        </thead>
        <tbody className="driver-standings__list-body"></tbody>
      </table>
    )
  }
}

export default DriverStandings