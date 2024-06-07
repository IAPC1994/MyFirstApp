import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {
    const [counter, setCounter] = useState(10);
    return (
        <View style={ globalStyles.centerContainer }>
            <Text style={ globalStyles.title }>{ counter }</Text>
            {/* <Icon name="accessibility-outline" size={ 35 } /> */}
            <FAB
                // label="+1"
                onPress={ () => setCounter( counter + 1)}
                onLongPress={ () => setCounter(0) }
                style={ globalStyles.fab }
                icon="add-outline"
            />
        </View>
    );
};
