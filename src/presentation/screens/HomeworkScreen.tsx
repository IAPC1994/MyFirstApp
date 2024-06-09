import React from 'react';
import { View, StyleSheet } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={[ styles.box, styles.purpleBox ]}/>
        <View style={[ styles.box, styles.orangeBox ]}/>
        <View style={[ styles.box, styles.blueBox ]}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column', Task 1 to 4
        backgroundColor: '#28425B',
        // justifyContent: 'center', Task 3
        // alignItems: 'center', Task 3
        // justifyContent: 'space-between', Task 4
        // flexDirection: 'row', Task 5
        // justifyContent: 'space-between', Task 5
        // alignItems: 'stretch', Task 5
        // flexDirection: 'column', Task 6
        // justifyContent: 'center', Task 7
        // alignItems: 'center', Task 7
        // justifyContent: 'center', Task 8
        // alignItems: 'center', Task 8
        // flexDirection: 'row', Task 9
        // justifyContent: 'flex-end', Task 9
        // alignItems: 'center', Task 9
        // justifyContent: 'center', Task 10
        // alignItems: 'center', Task 10
        // flexDirection: 'row', Task 10
    },
    box: {
        // width: 100, Task 6
        width: 100,
        height: 100,
        // height: 100, Task 5 (Height commented)
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        // alignSelf: 'flex-end', Task 3
        // alignSelf: 'flex-end', Task 4
        // flex: 1, Task 6
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        // alignSelf: 'flex-start', Task 3
        // flex: 1, Task 1
        // alignSelf: 'center', Task 4
        // flex: 1, Task 6
        // left: 100, Task 8
        // top: 50, Task 10
    },
    blueBox: {
        backgroundColor: '#28C4D9',
        // width: 'auto', Task 2
        // alignSelf: 'center', Task 3
        // flex: 2, Task 6
        // top: 100, Task 9
        // left: -200, Task 9
    },
});
