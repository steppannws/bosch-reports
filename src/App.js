import React, { Component } from 'react';
import { VictoryPie } from 'victory';

import './styles.css';
const users = require('./users.json');
const localities = require('./arg-localities.json');

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

    this.businessTypes = [
      'Casa de Repuestos',
      'Distribuidor',
      'Taller',
      'Centro de Baterías',
      'Talleres Red Bosch',
      'Lubricentro',
      'Otros',
    ];

    this.catalogsPieData = [];
    this.provincePieData = [];
    this.businessPieData = [];
  }
  componentDidMount = () => {
    // TODO: refactor using .reduce()
    // Catalogs data
    let totalSent = 0;
    this.catalogsPieData = this.catalogs
      .map(cat => {
        let amount = 0;
        for (const user in users) {
          if (users.hasOwnProperty(user)) {
            const userCatalogs = users[user].catalogs.split(',').map(catalog => Number(catalog));
            amount = userCatalogs.includes(cat.id) ? amount + 1 : amount;
          }
        }
        totalSent = amount + totalSent;
        return { ...cat, amount };
      })
      .map(c => {
        const percent = Math.round((100 * c.amount) / totalSent);
        return { ...c, x: `${c.id} | ${percent}%`, y: percent };
      });

    // Province data
    let provinceTotalSends = 0;
    this.provincePieData = localities
      .map(loc => {
        const amount = users.filter(user => user.province === loc.province).length;
        provinceTotalSends = amount + provinceTotalSends;
        return { province: loc.province, amount };
      })
      .map(loc => {
        return { ...loc, percent: Math.round((100 * loc.amount) / provinceTotalSends) };
      });

    // Business data
    let businessTotalSends = 0;
    this.businessPieData = this.businessTypes
      .map(business => {
        const amount = users.filter(user => user.business_type === business).length;
        businessTotalSends = amount + businessTotalSends;
        return { business, amount };
      })
      .map(business => {
        return { ...business, percent: Math.round((100 * business.amount) / businessTotalSends) };
      });

    console.log(this.catalogsPieData);
    console.log(this.provincePieData);
    console.log(this.businessPieData);

    this.forceUpdate();
  };

  render() {
    return (
      <div className="container">
        <div>
          <div className="catalogsWrapper">
            <h1>Catalogos</h1>
            <VictoryPie
              colorScale="qualitative"
              padAngle={3}
              innerRadius={100}
              data={this.catalogsPieData}
            />
          </div>
          <div>
            <ul>
              {this.catalogsPieData.map(cat => (
                <li>
                  <span>{`${cat.id}: ${cat.name} | total: ${cat.amount}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="catalogsWrapper">
            <h1>Provincias</h1>
            <VictoryPie
              colorScale="qualitative"
              padAngle={3}
              innerRadius={100}
              data={this.provincePieData}
            />
          </div>
          <div>
            <ul>
              {this.provincePieData.map(prov => (
                <li>
                  <span>{`${prov.province} | enviados: ${prov.amount} | ${prov.percent}%`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
