import React, { Component } from 'react';
// import { Pie } from 'react-chartjs';
var Pie = require('react-chartjs').Pie;

import './styles.css';
const users = require('./users.json');

class App extends Component {
  constructor(props) {
    super(props);

    this.catalogs = [
      {
        id: 0,
        name: 'Bosch: Catálogo Rotating Machines',
      },
      {
        id: 1,
        name: 'Bosch: Catálogo Centro de Capacitación',
      },
      {
        id: 2,
        name: 'Bosch: Catálogo Superprofesionales',
      },
      {
        id: 3,
        name: 'Bosch: Catálogo Pastillas de freno',
      },
      {
        id: 4,
        name: 'Bosch: Catálogos Muscletools',
      },
      {
        id: 5,
        name: 'Bosch: Catálogo Repuestos de Motos',
      },
      {
        id: 6,
        name: 'Bosch: Catálogo Lámparas',
      },
      {
        id: 7,
        name: 'Bosch: Catálogo Kits de distribución',
      },
      {
        id: 8,
        name: 'Bosch: Catálogo Filtros',
      },
      {
        id: 9,
        name: 'Bosch: Catálogo Escobillas',
      },
      {
        id: 10,
        name: 'Bosch: Catálogo Discos de freno',
      },
      {
        id: 11,
        name: 'Bosch: Diagnostics',
      },
      {
        id: 12,
        name: 'Bosch: Catálogo Bujías de Incandescencia',
      },
      {
        id: 13,
        name: 'Bosch: Catálogo Bujías',
      },
      {
        id: 14,
        name: 'Bosch: Catálogo Bombas de combustible',
      },
      {
        id: 15,
        name: 'Bosch: Catálogo Bobinas de encendido',
      },
      {
        id: 16,
        name: 'Bosch: Catálogo Baterías',
      },
    ];
  }
  componentDidMount = () => {
    // console.log(users);
    this.cats = this.catalogs.map(cat => {
      let amount = 0;
      for (const user in users) {
        if (users.hasOwnProperty(user)) {
          const userCatalogs = users[user].catalogs.split(',').map(catalog => Number(catalog));
          amount = userCatalogs.includes(cat.id) ? amount + 1 : amount;
        }
      }
      return { ...cat, amount };
    });
    console.log(this.cats);
  };

  render() {
    const chartOptions = {
      // Boolean - If we should show the scale at all

      showScale: true,
      // Boolean - Whether to show a dot for each point
      pointDot: true,
      showLines: false,
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
      legend: {
        display: true,
        labels: {
          boxWidth: 50,
          fontSize: 10,
          fontColor: '#bbb',
          padding: 5,
        },
      },
    };
    const chartData = {
      labels: ['1', '2', '3', '4'],
      datasets: [
        {
          label: 'Current lag',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          data: [50, 35, 60, 67],
        },
      ],
    };

    return (
      <div>
        <Pie data={chartData || []} options={chartOptions} />

        {/* <h1>My React App!</h1> */}
      </div>
    );
  }
}

export default App;
