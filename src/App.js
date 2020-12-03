import React from 'react'
import './App.css';
import Greet from './components/Greets'
import AboutMe from './components/AboutMe'
import Curriculum from './components/Curriculum'
import Projects from './components/Projects'

import { Link, Route, Switch, Redirect } from 'react-router-dom'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      counter: 0,
      showGreet: true,
      dataFromAPI: '',
      dataCardsYesNo: '',
      admin: true
    }

    // console.log('Constructor');
  }

  //Component Did Mount: Metodo que se activa solo una vez tras el primer renderizado y nunca mas
  // componentDidMount(){
    // console.log('Component Did Mount')

    // fetch('https://yesno.wtf/api')
    // .then((result)=>{
    //   return result.json()
    // })
    // .then((data)=>{
    //   this.setState({dataCardsYesNo: data})
    // })

    // fetch('https://api.magicthegathering.io/v1/cards')
    // .then((result)=>{
    //   return result.json()
    // })
    // .then((data)=>{
    //   this.setState({dataFromAPI: data})
    // })
  // }


  //Component Did Update:  Metodo que se activa solo cada vez que se detecta un cambio en mi pagina(aka cuando sobreescribe el state)
  // componentDidUpdate(prevProps, prevState){
  //   console.log('Component Did Update');
  //   console.log(prevState);
  // }


  render(){
    console.log('Render');
    return (
      <div className="App">
        {/* <h1>{this.state.counter}</h1>
        <button onClick={()=>this.setState({counter: this.state.counter + 1})}  >Add 1 to counter</button>
        {this.state.showGreet && <Greet counter={this.state.counter}/>}
        <button onClick={()=>this.setState({showGreet: !this.state.showGreet})}>Show / Hide Greet</button> */}
        {/* {this.state.dataFromAPI ? 'API CARGADA' : 'Loading'} */}


        <Link to="/aboutMe">About Me</Link>
        <br />
        <Link to="/curriculum">Curriculum</Link>
        <br />
        <Link to="/projects">Projects</Link>

        <Switch>

          <Route path="/aboutMe" >
            <AboutMe />
          </Route>

          <Route path="/curriculum" render={()=>{
            return !this.state.admin
            ? <Redirect to="/aboutMe" />
            : <Curriculum />
          }}>
            
          </Route>
          <Route path="/projects/:id" component={Projects} />
        </Switch>


        <h1>App</h1>
        {/* <AboutMe />
        <Curriculum />
        <Projects /> */}
      </div>
    );
  }
}

export default App;

// <Router> <App /> </Router>   ----> Conecta la interfaz de usuario con la URL.
//<Link> ----> Equivalente al "a" de HTML. Sirve para poner enlaces.
//<Route> ----> Renderizar una interfaz dependiendo de la URL.
//<Switch> ----> Envoltorio de las rutas (routes) 


//TRES FORMAS DE CREAR RUTAS
//1. Envolviendo el componente entre el componente Route. Este es util cuando quieres hacer un redirect con condicional

    // <Route path="/curriculum">
    // {this.state.admin ? <Curriculum /> : <Redirect to="/aboutMe"/>}
    // </Route>

//2. Utilizando la propiedad de component. Este es necesario para pasar params por el URL.
    // <Route path="/projects/:id" component={Projects} />

//3. Utilizando la propiedad de render. Este es util 