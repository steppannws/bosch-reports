import React, { Component } from 'react';
import './styles.css';
const users = require('./users.json');

class App extends Component {
  constructor(props) {
    super(props);

    const catalogs = [
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
    console.log(users);

    // const catalogs = users.reduce((acc, user) => {

    // }, )
  };

  render() {
    return <div>{/* <h1>My React App!</h1> */}</div>;
  }
}

export default App;
