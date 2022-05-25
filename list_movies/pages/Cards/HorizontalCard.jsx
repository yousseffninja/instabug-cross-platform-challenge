import { 
    View,
    StyleSheet,
    Image,
    Dimensions,
    Text
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const webSiteUri = "https://image.tmdb.org/t/p/w500"

export default function HorizontalCard({poster, title, rate}){

    return(
        <View >
            <View style={styles.PosterStyle}>
            <Image 
                source={{uri: `${webSiteUri}${poster}`}}
                style={styles.PosterImageStyle}
            />
            </View>
            <Text style={styles.PosterTitle}>{title}</Text>
            <Text style={styles.PosterRate}>{rate}/10 IMDb</Text>
        </View>
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