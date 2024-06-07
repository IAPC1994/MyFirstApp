import { StyleSheet, Platform } from 'react-native';



export const globalStyles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: '300',
        color: 'black',
    },
    fab: {
        position: 'absolute',
        bottom: Platform.OS === 'android' ? 15 : 0,
        right: Platform.OS === 'android' ? 15 : 0,
        margin: 16,
    },
});
