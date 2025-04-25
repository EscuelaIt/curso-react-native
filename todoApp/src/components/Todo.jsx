import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Todo = ({ id, description, isCompleted, createdAt }) => {


    const showDetails = () => { };
    const toggleCompleted = () => { };
    const deleteTodo = (id) => {
        Alert.alert(
            'Eliminar tarea',
            `¿Estás seguro de que deseas eliminar ${id}?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Eliminar',
                    onPress: () => Alert.alert('Tarea eliminada')
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={[styles.todoContainer]}>
                <TouchableOpacity
                    onPress={showDetails}
                    onLongPress={toggleCompleted}
                >

                    < Text style={isCompleted && styles.completed} variant='bodyLarge'>
                        {description.length > 35 ? description.slice(0, 35) + '...' : description}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="trash-can-outline" size={24} color="black"
                        onPress={() => deleteTodo(id)} />
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default Todo;

const styles = StyleSheet.create({
    container: {
        position: 'relative', // Posición relativa para permitir que las capas de color se superpongan correctamente al contenedor principal del todo.
    },
    todoContainer: {
        flexDirection: 'row', // Alinea el texto y los íconos en una fila horizontal.
        justifyContent: 'space-between', // Distribuye el espacio entre el texto y el ícono de eliminación.
        alignItems: 'center', // Alinea verticalmente el contenido en el centro.
        paddingVertical: 8, // Espaciado vertical interno del todo.
        marginTop: 20, // Margen superior entre cada todo.
        backgroundColor: "rgb(237, 221, 245)", // Color de fondo del todo.
        borderRadius: 12, // Bordes redondeados para un diseño más amigable.
        paddingLeft: 20, // Espaciado a la izquierda del texto.
        paddingRight: 20, // Espaciado a la derecha del texto.
    },
    completed: {
        textDecorationLine: 'line-through', // Aplica una línea a través del texto para indicar que el todo está completado.
        color: '#512da8', // Cambia el color del texto para indicar su estado de completado.
    },

});