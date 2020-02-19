import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
    this.updateTamagotchiAge = this.updateTamagotchiAge.bind(this);
    this.updateTamagotchiFatigue = this.updateTamagotchiFatigue.bind(this);
    this.updateTamagotchiHunger = this.updateTamagotchiHunger.bind(this);
    this.updateTamagotchiEntertainment = this.updateTamagotchiEntertainment.bind(this);
    this.feedTamagotchi = this.feedTamagotchi.bind(this);
    this.entertainTamagotchi = this.entertainTamagotchi.bind(this);
    this.restTamagotchi = this.restTamagotchi.bind(this);
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

this.tamagotchiHungerUpdate = setInterval(() =>
this.updateTamagotchiHunger(),
15000
);

this.tamagotchiFatigueUpdate = setInterval(() =>
this.updateTamagotchiFatigue(),
20000
);

this.tamagotchiEntertainmentUpdate = setInterval(() =>
this.updateTamagotchiEntertainment(),
25000
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

updateTamagotchiHunger(){
  console.log('check hunger');
  let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
  newMasterTamagotchiList.forEach((tamagotchi) =>
  tamagotchi.formattedHunger = (tamagotchi.hunger-=1)
  )
  this.setState({masterTamagotchiList: newMasterTamagotchiList})
}

updateTamagotchiFatigue(){
  console.log('check fatigue');
  let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
  newMasterTamagotchiList.forEach((tamagotchi) =>
  tamagotchi.formattedFatigue = (tamagotchi.fatigue-=1)
  )
  this.setState({masterTamagotchiList: newMasterTamagotchiList})
}

updateTamagotchiEntertainment(){
  console.log('check entertainment');
  let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
  newMasterTamagotchiList.forEach((tamagotchi) =>
  tamagotchi.formattedEntertainment = (tamagotchi.entertainmentLevel-=1)
  )
  this.setState({masterTamagotchiList: newMasterTamagotchiList})
}

feedTamagotchi(){
  console.log('tamgotchi fed');
  let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
  newMasterTamagotchiList.forEach((tamagotchi) =>
  tamagotchi.formattedHunger = (tamagotchi.hunger+=1)
  )
}

entertainTamagotchi(){
  console.log('tomagatchi entertained');
  let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
  newMasterTamagotchiList.forEach((tamagotchi) =>
  tamagotchi.entertainmentLevel = (tamagotchi.entertainmentLevel+=2)
  )
}

restTamagotchi(){
  console.log('tomagatchi rested');
  let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
  newMasterTamagotchiList.forEach((tamagotchi) =>
  tamagotchi.fatigue = (tamagotchi.fatigue+=3)
  )
}

render() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={() => (<TamagotchiList
          updateHunger={this.feedTamagotchi}
          updateEntertainment={this.entertainTamagotchi}
          updateFatigue={this.restTamagotchi}
          tamagotchiList={this.state.masterTamagotchiList}
        /> )} />
        <Route exact path='/newTamagotchi' render={()=> <TamagotchiForm onNewTamagotchiCreation={this.handleAddingNewTamagotchi}/>} />
      </Switch>
    </div>
  )
}
}