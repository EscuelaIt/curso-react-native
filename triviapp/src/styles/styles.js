import { StyleSheet } from "react-native";

export const COLORS = {
    primary: "#e07a5f",
    secondary: "#ffafcc",
    dark: "#283618",
    error: "#d62828",
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    playGameContainer: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20
    },
    optionsContainer: {
        height: 300,
        rowGap: 10
    },
    questionContainer: {
        height: '30%',
        marginBottom: 10

    },
    option: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    surface: {
        padding: 40,
        borderRadius: 5,
        margin: 10,
        elevation: 4,
        shadowColor: COLORS.error,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
    },
    scoreContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primary,
        marginBottom: 10,
    }
});