import { useEffect, useState } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity, 
    FlatList,
    Dimensions,
    ActivityIndicator
} from "react-native";
import axios from "axios";
import HorizontalCard from "./Cards/HorizontalCard";
import VerticalCard from "./Cards/VerticalCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function StartScreen({navigation}) {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const getApi = () =>{
        setIsLoading(true)
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=${currentPage}`)
            .then(res => {
                console.log(res.data)
                setData([...data, ...res.data.results])
                console.log(data)
                setIsLoading(false)
            })
            .catch(err => console.error(err));
    }

    const renderLoader = () =>{
        return(
            isLoading ?
            <View style={styles.loaderStyle}>
                <ActivityIndicator size="large" color="#aaa" />
            </View> 
            : null
        )
    }

    const loadMoreIteam =() =>{
        setCurrentPage(currentPage + 1)
    }

    useEffect(()=> {
        getApi()
    },[currentPage])


    return(
        <SafeAreaView style={{backgroundColor: "#0b0b0e", height: height}}>
            <View style={styles.Header}>
                <Text style={styles.HeaderTextStyle}>Popular</Text>
                <TouchableOpacity style={styles.HeaderButton} onPress={null}>
                    <Text style={styles.HeaderButtonTextStyle}>see more</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item, index) => item.id}
                    // onEndReached={}
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
            </View>
            <View style={styles.Header}>
                <Text style={styles.HeaderTextStyle}>Now Showing</Text>
                <TouchableOpacity style={styles.HeaderButton} onPress={null}>
                    <Text style={styles.HeaderButtonTextStyle}>see more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.PopularStyle}>
                <FlatList 
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}
                    renderItem={
                        itemData =>
                        <VerticalCard 
                            poster={itemData.item.poster_path}
                            title={itemData.item.title}
                            rate={itemData.item.vote_average}
                            overview={itemData.item.overview}
                        />
                    }
                    ListFooterComponent={()=>renderLoader()}
                    onEndReached={()=>loadMoreIteam()}
                    onEndReachedThreshold={0}
                />
            </View>
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
        fontWeight: "bold",
        color: "white"
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
    },
    PopularStyle:{
        height: height / 1.8, 
        // paddingBottom: 65,
        paddingHorizontal: 10,
    },
    loaderStyle:{
        marginVertical: 16,
        alignItems: "center"
    }
})