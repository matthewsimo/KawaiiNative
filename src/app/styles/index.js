
import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    marginTop: 0,
    padding: 15,
    paddingTop: 25,
    position: 'absolute',
    left: 0,
    top: 0,
    width: width - 20,
    backgroundColor: 'rgba(255,255,255,.75)',
    color: '#484848'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scrollView: {
    paddingTop: 69,
  },
  section: {
    //backgroundColor: 'rgba(255,0,0,.2)',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 20,
    width: (width - 20),
    marginVertical: 20
  },
  item: {
    width: ( width - 60 ) / 2,
    height: 60,
    paddingTop: 20,
    //backgroundColor: 'rgba(0,255,0,.2)',
    margin: 10,
  },
  itemText: {
    textAlign: 'center',
    color: '#484848'
  }
});

export default styles;
