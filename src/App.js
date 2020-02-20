import React from "react";
import { Switch, Route } from "react-router-dom";
import Moment from 'moment';

// Components
import Header from "./components/Header";
import TamagotchiList from "./components/TamagotchiList";
import TamagotchiForm from "./components/TamagotchiForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: []
    };
    this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
    this.updateTamagotchiAge = this.updateTamagotchiAge.bind(this);
    this.decreaseRestfulness = this.decreaseRestfulness.bind(this);
    this.decreaseHunger = this.decreaseHunger.bind(this);
    this.decreaseEntertainment = this.decreaseEntertainment.bind(this);
    this.feedTamagotchi = this.feedTamagotchi.bind(this);
    this.entertainTamagotchi = this.entertainTamagotchi.bind(this);
    this.restTamagotchi = this.restTamagotchi.bind(this);
  }

  handleAddingNewTamagotchi(newTamagotchi) {
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchi.formattedAge = (newTamagotchi.timeOpen).fromNow(true);
    newTamagotchi.formattedHunger = (newTamagotchi.hunger);
    newTamagotchi.formattedEntertainment = (newTamagotchi.entertainmentLevel);
    newTamagotchi.formattedFatigue= (newTamagotchi.fatigue);
    newMasterTamagotchiList.push(newTamagotchi);
    this.setState({
      masterTamagotchiList: [...this.state.masterTamagotchiList, newTamagotchi]
    });
  }

  componentDidMount() {
    this.tamagotchiAgeUpdate = setInterval(
      () => this.updateTamagotchiAge(),
      60000
    );

    this.tamagotchiHungerUpdate = setInterval(
      () => this.decreaseHunger(),
      15000
    );

    this.tamagotchiFatigueUpdate = setInterval(
      () => this.decreaseRestfulness(),
      20000
    );

    this.tamagotchiEntertainmentUpdate = setInterval(
      () => this.decreaseEntertainment(),
      25000
    );
  }

  componentWillUnmount(){
    console.log('unmount log')
    clearInterval(this.tamagotchiAgeUpdate);
    clearInterval(this.tamagotchiHungerUpdate);
    clearInterval(this.tamagotchiFatigueUpdate);
    clearInterval(this.tamagotchiEntertainmentUpdate);
  }

  updateTamagotchiAge() {
    console.log("check age");
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach(
      tamagotchi =>
        (tamagotchi.formattedAge = tamagotchi.timeOpen.fromNow(true))
    );
    this.setState({ masterTamagotchiList: newMasterTamagotchiList });
  }

  decreaseHunger() {
    console.log("check hunger");
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach(function(tamagotchi) {
      if (tamagotchi.hunger > 0) {
        tamagotchi.formattedHunger = tamagotchi.hunger -= 1;
      } else {
        console.log("death by hunger");
      }
    });
    this.setState({ masterTamagotchiList: newMasterTamagotchiList });
  }

  decreaseRestfulness() {
    console.log("check fatigue");
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach(function(tamagotchi) {
      if (tamagotchi.fatigue > 0) {
        tamagotchi.formattedFatigue = tamagotchi.fatigue -= 1;
      } else {
        console.log("death by fatigue");
      }
    });
    this.setState({ masterTamagotchiList: newMasterTamagotchiList });
  }

  decreaseEntertainment() {
    console.log("check entertainment");
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach(function(tamagotchi) {
      if (tamagotchi.entertainmentLevel > 0) {
        tamagotchi.formattedEntertainment = tamagotchi.entertainmentLevel -= 1;
      } else {
        console.log("death by boredom");
      }
    });
    this.setState({ masterTamagotchiList: newMasterTamagotchiList });
  }

  feedTamagotchi() {
    console.log("tamgotchi fed");
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach(tamagotchi =>
      tamagotchi.hunger < 20
        ? (tamagotchi.formattedHunger = tamagotchi.hunger += 1)
        : console.log("hunger limit")
    );
    this.setState({ masterTamagotchiList: newMasterTamagotchiList });
  }

  entertainTamagotchi() {
    console.log("tomagatchi entertained");
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach(tamagotchi =>
      tamagotchi.entertainmentLevel < 20
        ? (tamagotchi.formattedEntertainment = tamagotchi.entertainmentLevel += 2)
        : console.log("filled with fun")
    );
    this.setState({ masterTamagotchiList: newMasterTamagotchiList });
  }

  restTamagotchi() {
    console.log("tomagatchi rested");
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach(tamagotchi =>
      tamagotchi.fatigue < 20
        ? (tamagotchi.formattedFatigue = tamagotchi.fatigue += 3)
        : console.log("fully rested")
    );
    this.setState({ masterTamagotchiList: newMasterTamagotchiList });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TamagotchiList
                updateHunger={this.feedTamagotchi}
                updateEntertainment={this.entertainTamagotchi}
                updateFatigue={this.restTamagotchi}
                tamagotchiList={this.state.masterTamagotchiList}
              />
            )}
          />
          <Route
            exact
            path="/newTamagotchi"
            render={() => (
              <TamagotchiForm
                onNewTamagotchiCreation={this.handleAddingNewTamagotchi}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
