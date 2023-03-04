import { Component } from 'react';

const date1 = new Date(2023, 3, 4, 20, 15);
const date2 = new Date(2023, 3, 4, 22, 22);

const initialDate = [  // ...................................................1
  {
    title: 'Задача №1',
    desc: 'Срочно',
    image: '',
    done: true,  //   .......................................................2
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

export default class App extends Component {  // ............................3
  constructor(props) {  // ..................................................4
    super(props);  //  ......................................................5
    this.data = initialDate;  // ............................................6
  }

  render() {  // ............................................................7
    return (  // ............................................................8
        <div>  {/*..........................................................10 */}
          <nav className="navbar is-light">  {/* ...........................11 */}
            <div className="navbar-brand">   {/* ...........................12 */}
              <span className="navbar-item is-upercase">  {/* ..............13 */}
                Todos
              </span>
            </div>
          </nav>
          <main className="context px-6 mt-6">  {/* ...........................14 */}
            <h1>Todos</h1>
          </main>
        </div>
    );  // .....................................................................9
  }
}