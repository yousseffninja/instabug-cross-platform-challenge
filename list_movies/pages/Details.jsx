import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Dimensions,
    ImageBackground
} from "react-native";
import {Octicons, FontAwesome} from "react-native-vector-icons"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const webSiteUri = "https://image.tmdb.org/t/p/w500"

export default function Details({route, navigation}){
    const {obj} = route.params
    return(
        <SafeAreaView style={{backgroundColor: "#0b0b0e"}}>
            <ImageBackground 
                source={{uri: `${webSiteUri}${obj.backdrop_path}`}} 
                style={{width: width, height: height/3}}
                
            >
                <Octicons 
                    name={"arrow-left"} 
                    onPress={()=>navigation.goBack()}
                    size={20}
                    color={'white'}
                    style={{marginHorizontal:10, marginVertical: 10}}
                />
                <View style={styles.PlayIcon}>
                    <Octicons
                        name={"play"}
                        onPress={()=>null}
                        size={40}
                        color={'white'}
                    />
                </View>
            </ImageBackground>
            <View style={styles.ContentStyle}>
                <View style={{flexDirection: 'row', paddingHorizontal: 25, paddingTop: 25, paddingBottom: 8, justifyContent:'space-between'}}>
                    <Text style={styles.TitleStyle}>{obj.title}</Text>
                    <Octicons 
                        name={"bookmark"}
                        onPress={()=>null}
                        size={20}
                        color={'white'}
                    />
                </View>
                <View style={{flexDirection: "row", paddingHorizontal:25, paddingVertical: 8}}>
                    <FontAwesome name={"star"} color={"yellow"} />
                    <Text style={styles.FilmRate}>{obj.vote_average}/10 IMDb</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: 'space-between', paddingHorizontal:25, paddingVertical: 8}}>
                    <View>
                        <Text style={styles.DetailsStyle}>Language</Text>
                        <Text style={styles.DetailsResultStyle}>{obj.original_language}</Text>
                    </View>
                    <View>
                        <Text style={styles.DetailsStyle}>Popularity</Text>
                        <Text style={styles.DetailsResultStyle}>{obj.popularity}</Text>
                    </View>
                    <View>
                        <Text style={styles.DetailsStyle}>Vote Count</Text>
                        <Text style={styles.DetailsResultStyle}>{obj.vote_count}</Text>
                    </View>
                </View>
                <Text style={styles.OverViewStyle}>Overview</Text>
                <Text style={styles.OverViewDetailsStyle}>{obj.overview}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    PlayIcon:{
        width: width,
        height: height/4.5,
        justifyContent:"center",
        alignItems: 'center',
    },
    ContentStyle:{
        backgroundColor: "#0b0b0e", 
        height: 3.5*height / 4.5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        top: -10
    },
    TitleStyle:{
        width: width / 1.6, 
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    FilmRate:{
        fontSize: 12,
        color: "#9C9C9C"
    },
    DetailsStyle:{
        fontSize: 12,
        color: "#9C9C9C"
    },
    DetailsResultStyle:{
        fontSize: 12,
        fontWeight: 'bold',
        color: "white"
    },
    OverViewStyle:{
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal:25, 
        paddingVertical: 8
    },
    OverViewDetailsStyle:{
        fontSize: 12,
        color: "#9C9C9C",
        paddingHorizontal:25, 
        paddingVertical: 8
    },
})