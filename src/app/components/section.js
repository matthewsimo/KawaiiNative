import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Clipboard,
} from 'react-native';

import styles from '../styles';


class Section extends Component {

  handlePress(text) {
    console.log(`${text} pressed!`)
    const { onCopy } = this.props;
    Clipboard.setString(text);
    onCopy(text);
  }

  render() {

    const { title, data } = this.props;
    return (
      <View style={styles.section}>

        <Text style={styles.sectionTitle}>{ title }</Text>

        { data.slice(0,40).map( ( item, i ) => {
          return (
            <TouchableOpacity style={styles.item} key={i} onPress={ () => this.handlePress(item) }>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          );
        }) }
      </View>
    );
  }
}

export default Section;
