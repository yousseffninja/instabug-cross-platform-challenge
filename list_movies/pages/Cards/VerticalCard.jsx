import { 
    View ,
    StyleSheet,
    Dimensions,
    Image,
    Text
} from "react-native";
import {FontAwesome} from 'react-native-vector-icons';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const webSiteUri = "https://image.tmdb.org/t/p/w500"

export default function VerticalCard({poster, title, rate}){
    return(
        <View style={styles.PosterStyle}>
            <Image 
                source={{uri: `${webSiteUri}${poster}`}}
                style={styles.posterImage}
            />
            <View style={{marginHorizontal: 15}}>
                <Text style={styles.PosterTitle}>{title}</Text>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome name={"star"} color={"yellow"} />
                    <Text style={styles.PosterRate}>{rate}/10 IMDb</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    PosterStyle:{
        flexDirection: 'row',
        paddingVertical: 5,
    },
    posterImage:{
        width: width / 3.5, 
        height: height / 4.5,
        borderRadius: 5,
    },
    posterDetails:{
        flexDirection:'column'
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