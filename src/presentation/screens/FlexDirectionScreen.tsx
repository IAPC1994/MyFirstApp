import React from 'react';
import { StyleSheet, View } from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={[ styles.box1, styles.box ]}/>
        <View style={[ styles.box2, styles.box ]}/>
        <View style={[ styles.box3, styles.box ]}/>
        <View style={[ styles.box4, styles.box ]}/>
        <View style={[ styles.box1, styles.box ]}/>
        <View style={[ styles.box2, styles.box ]}/>
        <View style={[ styles.box3, styles.box ]}/>
        <View style={[ styles.box4, styles.box ]}/>
        <View style={[ styles.box1, styles.box ]}/>
        <View style={[ styles.box2, styles.box ]}/>
        <View style={[ styles.box3, styles.box ]}/>
        <View style={[ styles.box4, styles.box ]}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1D1D1',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    box:{
        // flex: 1,
        width: 100,
        height: 100,
    },
    box1: {
        backgroundColor: '#5856D6',
        // top: -100,
    },
    box2: {
        backgroundColor: '#4240A2',
        // alignSelf: 'flex-end',
    },
    box3: {
        backgroundColor: '#2E2D71',
        // alignSelf: 'center',
        // top: -100,
    },
    box4: {
        backgroundColor: '#222155',
        // alignSelf: 'center',
        // top: -100,
    },
});
