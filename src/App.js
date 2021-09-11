import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      creature: "man",
      monsters: [
        // {
        //   name: "Balaur",
        //   id: "ba1"
        // },
        // {
        //   name: "Strigoi",
        //   id: "st1"
        // },
        // {
        //   name: "Pricolici",
        //   id: "pr1"
        // },
        // {
        //   name: "Moroi",
        //   id: "mo1"
        // }
      ],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  //if used with arrow function, no need to set 'bind(this)' inside constructor, because 'this' will be bound to the context where the function was defined
  handleChange = e => this.setState({searchField: e.target.value});

  //used with normal function where 'this.handleChange = this.handleChange.bind(this)' is needed inside the constructor
  /*handleChange (e) {
    this.setState({searchField: e.target.value})
  }*/

  render() {
    /*object destructuring*/
    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.creature}
          </p>
          <button onClick={() => this.state.creature === "man" ? this.setState({creature: "alien"}) : this.setState({creature: "man"})}>Change name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters" 
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

/*Promise example*/
// const myPromise = new Promise((resolve, reject) => {
//   if(true) {
//     setTimeout(() => {
//       resolve('I have succeded');
//     }, 1000);
//   } else {
//     reject('I have failed');
//   }
// });

// myPromise.then(resolvedPromiseResponse => resolvedPromiseResponse + "!!!")
//          .then(resolvedPromiseResponseFromAbove => console.log(resolvedPromiseResponseFromAbove))
//          .catch(errorResponse => console.log(errorResponse));


/*fetch examples*/
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//      .then(response => response.json())
//      .then(jsonResponseFromAbove => console.log(jsonResponseFromAbove));

/*example with faulty URL which will trigger "catch"*/ 
// fetch('https://jsonplaceher.typicodecom/posts/1')
//      .then(response => response.json())
//      .then(jsonResultFromAbove => console.log(jsonResultFromAbove))
//      .catch(errorResponse => console.log('I have errored'));

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     const firstUser = users[0];
//     console.log(firstUser);
//     return fetch(
//       'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
//     );
//   })
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

/*async - await example*/
// const myAsyncFunction = async () => {
//   try {
//     const usersReponse = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await usersReponse.json();
//     const secondUser = users[1];

//     console.log(secondUser);

//     const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id);
//     const posts = await postsResponse.json();

//     console.log(posts);
//   } catch(err) {
//     console.log('there was an error');
//   }
// }

// myAsyncFunction();
