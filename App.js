import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/icons/Activity.png')}
          style={styles.icon}
        />
        <View style={styles.flexSpace}></View>
        <Image
          source={require('./assets/icons/search.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>breadcrumb</Text>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={styles.smallRectangle}>
          <Text style={styles.smallRectangleText}>List</Text>
        </View>
        <View style={styles.smallRectangle}>
          <Text style={styles.smallRectangleText}>Attributes</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text></Text>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
        <Image
          source={require('./assets/icons/add.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#D8F1EB',
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center',
    paddingHorizontal: 20, // Add some padding
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  flexSpace: {
    flex: 1, // Take up remaining space to push the search icon to the right
  },
  icon: {
    width: 24,
    height: 24,
  },
  rectangle: {
    height: 35,
    width: '95%', // This is approximately '100% - 20px' considering some padding
    backgroundColor: '#D8F1EB',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center', // Center the rectangle horizontally
    marginVertical: 10, // Add some vertical margin for spacing
    borderRadius: 5, // Add border radius here
    paddingLeft: 10, // Add left padding for spacing
  },
  rectangleText: {
    fontSize: 14,
  },
  rectangleContainer: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space the rectangles evenly
    width: '95%',
    alignSelf: 'center',
    marginVertical: 5, // Add some vertical margin for spacing
  },
  smallRectangle: {
    height: 50,
    width: '48%', // This is approximately half of the upper rectangle's width
    backgroundColor: '#D8F1EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  smallRectangleText: {
    fontSize: 14,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 30,
  },
  circle: {
    height: 70,
    width: 70,
    backgroundColor: '#D8F1EB',
    borderRadius: 50,
  },

  icon: {
    width: 24,
    height: 24,
  },
  
  footer: {
    height: 60,
    width: '100%',
    backgroundColor: '#D8F1EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 16,
  },
});

export default App;







