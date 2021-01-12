import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={isOpen ? styles.open : styles.closed}>
        <View
          style={isOpen ? styles.screenHeaderOpen : styles.screenHeaderClosed}>
          <TouchableOpacity
            style={styles.hamburgerContainer}
            onPress={() => setIsOpen(!isOpen)}>
            <View style={styles.hamburger}></View>
            <View style={styles.hamburger}></View>
            <View style={styles.hamburger}></View>
          </TouchableOpacity>
          <Text style={styles.startScreenHeader} numberOfLines={1}>
            START
          </Text>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Viktor</Text>
        </View>
        <View style={styles.navContainer}>
          <TouchableOpacity
            style={styles.highlight}
            onPress={() => setIsOpen(!isOpen)}>
            <Text style={styles.highlightText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Your Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Your Orders</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.signoutContainer}>
          <Text style={styles.text}>Sign Out</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1F1B33',
    borderTopLeftRadius: 48,
  },
  leftContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: height * 0.8,
    width: width * 0.45,
    transform: [{translateY: -0.88 * height}],
    paddingLeft: width * 0.1,
  },
  nameContainer: {
    width: width * 0.45,
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  navContainer: {
    display: 'flex',
    height: 300,
    width: width * 0.45,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  signoutContainer: {
    display: 'flex',
    width: width * 0.45,
    alignItems: 'flex-start',
  },
  name: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'flex-start',
    fontFamily: 'Metropolis-Black',
    fontWeight: 'bold',
  },
  text: {
    color: '#E8E5E5',
    fontSize: 20,
    alignItems: 'flex-start',
    fontFamily: 'Metropolis-Medium',
    paddingLeft: 30,
  },
  highlight: {
    backgroundColor: '#fc8074',
    borderRadius: 15.5,
    width: width * 0.38,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    opacity: 0.2,
  },

  highlightText: {
    color: '#fc8074',
    fontSize: 20,
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  open: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: height,
    zIndex: 2,
  },
  closed: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
    minHeight: height,
    transform: [
      {rotate: '170deg'},
      {translateX: -0.55 * width},
      {translateY: -55},
    ],
    position: 'relative',
  },
  screenHeaderClosed: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 175,
    height: 150,
    transform: [{rotate: '180deg'}],
    display: 'flex',
    flexDirection: 'row',
  },
  screenHeaderOpen: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 175,
    height: 150,
    display: 'flex',
    flexDirection: 'row',
  },
  hamburgerContainer: {
    width: 50,
    height: 50,
    padding: 20,
  },
  hamburger: {
    borderBottomWidth: 3,
    borderBottomColor: '#E8E5E5',
    paddingTop: 8,
    width: 30,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#84818E',
    width: width * 0.45,
  },
  startScreenHeader: {
    color: '#9F9FA0',
    fontSize: 30,
    padding: 20,
    paddingLeft: 30,
    letterSpacing: 4,
    overflow: 'hidden',
  },
});

export default App;
