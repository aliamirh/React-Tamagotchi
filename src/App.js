import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TamagotchiForm from './components/TamagotchiForm';

// Components
import TamagotchiList from './components/TamagotchiList';
import Header from './components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: []
    }
    this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
  }

handleAddingNewTamagotchi(newTamagotchi){
  this.setState({
    masterTamagotchiList: [...this.state.masterTamagotchiList, newTamagotchi]
  });
}

render() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={() => (<TamagotchiList
          tamagotchiList={this.state.masterTamagotchiList}
        /> )} />
        <Route exact path='/newTamagotchi' render={()=> <TamagotchiForm onNewTamagotchiCreation={this.handleAddingNewTamagotchi}/>} />
      </Switch>
    </div>
  )
}
}