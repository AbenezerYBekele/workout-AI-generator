import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20 ,
    },
    
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 18,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    TextInput: {height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        width: '100%', 
        marginBottom: 10, 
        paddingLeft: 10 },
    Submit: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 30,
    },
    SubmitText: {
        color: "white",
        fontSize: 30,
        fontWeight: '700',
    },
    Dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '100%',
    },
    formText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom:3,
    }
});

export default styles;