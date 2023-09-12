import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,TouchableOpacity,
  StatusBar,
} from 'react-native';


const file = [
  {
    content:"Mr. Modi is in Pune to receive the Lokmanya Tilak National Award; during the day, the Prime Minister will flag off metro trains marking the inauguration of completed sections of Pune Metro phase I.",
    image:"https://th-i.thgim.com/public/incoming/1jvpjo/article67145304.ece/alternates/LANDSCAPE_1200/PTI08_01_2023_000066B.jpg"
},
{
    content:"The incident took place at around 1 a.m. at Khutadi Sarlambe village in Shahapur tehsil, said officials; three persons were injured and rushed to a nearby hospital for immediate medical assistance.",
    image:"https://th-i.thgim.com/public/incoming/6cleox/article67144927.ece/alternates/LANDSCAPE_1200/grinder%20acc.jpeg"
},
{
    content:"The decision was taken at the Lok Sabha's business advisory committee meeting which was boycotted by the Opposition bloc INDIA and the Bharat Rashtra Samithi.",
    image:"https://th-i.thgim.com/public/incoming/wux8ls/article67145322.ece/alternates/LANDSCAPE_1200/20230731223L.jpg"
},
{
    content: "Neyveli Lignite Corporation tells Justice S.M. Subramaniam that it is willing to pay compensation for the crops that had to be cleared using earthmovers for diversion of Upper Paravanar canal.",
    image:"https://th-i.thgim.com/public/incoming/7svw0r/article67142993.ece/alternates/LANDSCAPE_1200/IMG_High_Court_Building_2_1_F9BGEGBR.jpg"
},
{
  content: "One of the deceased was RPF Assistant Sub-Inspector Tika Ram Meena; incident happened on board the Jaipur-Mumbai Central Express near Palghar railway station in Maharashtra.",
  image:"https://th-i.thgim.com/public/incoming/ctgja5/article67140949.ece/alternates/LANDSCAPE_1200/PTI07_31_2023_000001B.jpg"
},
{
  content:"Tense moments in Thiruvananthapuram airport as an Air India Express flight landed in emergency, another aborted take off  .",
  image:"https://th-i.thgim.com/public/news/national/kerala/akrffg/article67141284.ece/alternates/FREE_1200/aie.png"
},
{
  content:"During his 20 months tenure at the helm of the ENC, the Command witnesses a high operational tempo with ships, submarines and aircraft deployed from Eastern Pacific to the East Coast of Africa.",
  image:"https://th-i.thgim.com/public/incoming/vd2d88/article67143202.ece/alternates/LANDSCAPE_1200/Farewel.jpg"
}, 
{
  content:"BBC said it was running an experimental server on Mastodon to report on the experience and build its presence in the fediverse.",
  image:"https://th-i.thgim.com/public/incoming/78a57u/article27770132.ece/alternates/LANDSCAPE_1200/BBC-Logojpg"
},

];


const Item = ({image,content}) => (
  <View style={styles.container}>
    <View style={styles.row}>
    <TouchableOpacity>
      <Image style={styles.image} source={{uri: image, }}/>
    </TouchableOpacity>
  </View>
  
  <View style={styles.row}>
      <Text style={styles.title}>{content}</Text>
    </View>
    </View>
);

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={file}
        renderItem={({ item }) => <Item content={item.content}
        image={item.image}/>
      }

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "grey",
    paddingTop: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingBottom:10,
  },
  content: {
    padding:30,
    fontSize: 28,
    paddingTop:30,
  },

  title: {
    padding:30,
    fontSize: 15,
  },
 
    image: {
      width: 150,
      height: 150,
      marginHorizontal: 10,
      marginVertical: 6,
  
      
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 100,
        padding : 50,
        
        // borderWidth: 1,
        // borderColor: 'blue',
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
       
      },
   
    
});

export default Map;


