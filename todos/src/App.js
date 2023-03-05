import { Component } from 'react';

const date1 = new Date(2023, 3, 4, 20, 15);
const date2 = new Date(2023, 3, 4, 22, 22);

const initialDate = [
  {
    title: 'Задача №1',
    desc: 'Срочно',
    image: '',
    done: true,
    createAt: date1.toLocaleString(),
    key: date1.getTime()
  },
  {
    title: 'Задача №2',
    desc: 'По пути',
    image: '',
    done: false,
    createAt: date2.toLocaleString(),
    key: date2.getTime()
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.data = initialDate;
  }

  render() {
    return (
        <div>
          <nav className="navbar is-light">
            <div className="navbar-brand">
              <span className="navbar-item is-upercase">
                Todos
              </span>
            </div>
          </nav>
          <main className="context px-6 mt-6">
            <h1>Todos</h1>
          </main>
        </div>
    );
  }
}