import Header from './components/Header'
import Home from './components/Home'
import Battle from './components/Battle'
import PokemonList from './components/PokemonList'
import PokemonInfo from './components/PokemonInfo'
import Rules from './components/Rules'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>

      <Router>
        <Switch>

          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          {/* <Route path='/battle'>
            <Header />
            <Battle />
          </Route> */}

          <Route
            path='/battle'
            render={(props) =>
              <>
                <Header />
                <Battle key={props.location.key} />
              </>
            }
          />

          <Route exact path='/pokemons'>
            <Header />
            <PokemonList />
          </Route>

          <Route exact path='/pokemons/:id'>
            <Header />
            <PokemonInfo />
          </Route>

          <Route exact path='/rules'>
            <Header />
            <Rules />
          </Route>

        </Switch>
      </Router>

    </GlobalProvider>
  );
}

export default App;
