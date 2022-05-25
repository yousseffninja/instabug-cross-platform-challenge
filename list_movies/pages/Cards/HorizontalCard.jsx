import { 
    View,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    TouchableOpacity
} from "react-native";
import {FontAwesome} from 'react-native-vector-icons';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const webSiteUri = "https://image.tmdb.org/t/p/w500"

export default function HorizontalCard({poster, title, rate}){

    return(
        <TouchableOpacity onPress={()=>{console.log("Hello")}}>
            <View style={styles.PosterStyle}>
                <Image 
                    source={{uri: `${webSiteUri}${poster}`}}
                    style={styles.PosterImageStyle}
                />
            </View>
            <Text style={styles.PosterTitle}>{title}</Text>
            <View style={{flexDirection: "row"}}>
                <FontAwesome name={"star"} color={"yellow"} />
                <Text style={styles.PosterRate}>{rate}/10 IMDb</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    PosterStyle:{
        paddingBottom: 11
    },
    PosterImageStyle:{
        width: width / 3, 
        height: height / 4,
        borderRadius: 5,
        marginHorizontal: 5 ,
    },
    PosterTitle:{
        width: width / 3, 
        fontSize: 14,
        fontWeight: "bold",
        paddingBottom: 11
    },
    PosterRate:{
        fontSize: 12,
        color: "#9C9C9C"
    }
})