import { useEffect, useState } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity, 
    FlatList,
    Dimensions
} from "react-native";
import HorizontalCard from "./Cards/HorizontalCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function StartScreen({navigation}) {

    const [data, setData] = useState([]);

    const getApi = async() =>{
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=1")
        const json = await response.json();
        console.log(json)
        setData(json.results)
    }

    useEffect(()=> {
        getApi()
    },[])


    return(
        <SafeAreaView style={{backgroundColor: "white", height: height}}>
            <View style={styles.Header}>
                <Text style={styles.HeaderTextStyle}>Now Showing</Text>
                <TouchableOpacity style={styles.HeaderButton} onPress={null}>
                    <Text style={styles.HeaderButtonTextStyle}>see more</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                horizontal={true}
                data={data}
                keyExtractor={(item, index) => item.id}
                renderItem={
                    itemData => 
                    <HorizontalCard 
                    poster={itemData.item.poster_path}
                    title={itemData.item.title}
                    rate={itemData.item.vote_average}
                    />
                }
                style={{marginHorizontal: 5}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Header:{
        marginHorizontal: 10,
        paddingVertical: 10,
        flexDirection:"row",
        justifyContent: "space-between"
    },
    HeaderTextStyle:{
        fontSize: 16,
        fontWeight: "bold"
    },
    HeaderButton: {
        borderWidth: 1,
        borderColor: "#E5E4EA",
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    HeaderButtonTextStyle:{
        fontSize: 10,
        color: "#AAA9B1",
    }
})