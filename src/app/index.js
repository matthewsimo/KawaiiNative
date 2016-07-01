import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import { sections } from '../data';
import styles from './styles';

import Section from './components/section';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastCopied: null
    }
  }

  onCopy(text) {
    console.log("onCopy:", text);
    this.setState({
      lastCopied: text
    });
  }

  getLastCopied() {
    return this.state && this.state.lastCopied ? this.state.lastCopied : 'ʕ·ᴥ·ʔ';
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} >
          { sections.map( ( section, i ) => {
            console.log("section:", section);
            return <Section key={i} title={ section.title } data={ section.component } onCopy={ (t) => this.onCopy(t) } />
          }) }
        </ScrollView>

        <Text style={styles.header}>{ this.getLastCopied() } Kawaii Faces { this.getLastCopied() }</Text>
      </View>
    );
  }
}

export default App;
