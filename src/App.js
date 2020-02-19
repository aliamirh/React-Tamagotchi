import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

// Components
import Header from './components/Header';
import TamagotchiList from './components/TamagotchiList';
import TamagotchiForm from './components/TamagotchiForm';

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

componentDidMount() {
  this.tamagotchiAgeUpdate = setInterval(() =>
  this.updateTamagotchiAge(),
  60000
);
}

updateTamagotchiAge(){
  console.log('check age');
  let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
  newMasterTamagotchiList.forEach((tamagotchi) => 
  tamagotchi.formattedAge = (tamagotchi.timeOpen).fromNow(true)
  );
  this.setState({masterTamagotchiList: newMasterTamagotchiList})
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