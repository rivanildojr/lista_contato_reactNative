import React from "react";
import { Text, View } from "react-native";
import axios from "axios";

import Header from "../components/Header";
import PeopleList from "../components/PeopleList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?nat=br&results=5").then(response => {
      const { results } = response.data;
      this.setState({
        peoples: results
      });
    });
  }

  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        <PeopleList peoples={this.state.peoples} />
      </View>
    );
  }
}
