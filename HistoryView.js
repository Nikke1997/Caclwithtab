import { FlatList } from "react-native";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function HistoryView({ route }) {
const { data } = route.params;
return(
<View style={styles.container}>
<View style={styles.listContainer}>
<FlatList
      data={data}
      renderItem={({item}) =><Text>{item.key}</Text>} 
        keyExtractor={(item, index) => index.toString()}>
        </FlatList>
</View>

</View>
);
};


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center'
},
listContainer: {
    height: '50%',
},
listHeader: {
    fontSize: 18
}
});