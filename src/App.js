import React, { Component } from 'react';
// import { Pie } from 'react-chartjs';
// var Pie = require('react-chartjs').Pie;
import { VictoryPie } from 'victory';

import './styles.css';
const users = require('./users.json');

const data = [
  { quarter: 1, earnings: 13000, label: 'asdf' },
  { quarter: 2, earnings: 16500, label: 'asdf' },
  { quarter: 3, earnings: 14250, label: 'asdf' },
  { quarter: 4, earnings: 19000, label: 'asdf' },
];

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

    this.catalogsPieData = [];
  }
  componentDidMount = () => {
    // console.log(users);
    let totalSent = 0;
    this.catalogsPieData = this.catalogs.map(cat => {
      let amount = 0;
      for (const user in users) {
        if (users.hasOwnProperty(user)) {
          const userCatalogs = users[user].catalogs.split(',').map(catalog => Number(catalog));
          totalSent = userCatalogs.length + totalSent;
          amount = userCatalogs.includes(cat.id) ? amount + 1 : amount;
        }
      }
      return { ...cat, amount };
    });

    this.catalogsPieData = this.catalogsPieData.map(c => {
      return { x: c.id, y: totalSent / (c.amount * 100) };
    });
    console.log(this.catalogsPieData);
    console.log(totalSent);
  };

  render() {
    return (
      <div className="container">
        <div className="catalogsWrapper">
          <VictoryPie
            colorScale="qualitative"
            padAngle={3}
            innerRadius={100}
            data={[{ x: 'asdf', y: 100 }]}
          />
        </div>
      </div>
    );
  }
}

export default App;
