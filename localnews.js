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
    content:"Two history sheeters were shot dead by a police team near Guduvanchery, a suburb of Chennai, as they reportedly attacked a sub-inspector using a sickle during a vehicle check, in the early hours of Tuesday, August 1, 2023.",
    image:"https://th-i.thgim.com/public/incoming/ocll2l/article67145031.ece/alternates/LANDSCAPE_1200/WhatsApp%20Image%202023-08-01%20at%2010.11.06%20AM.jpeg"
},
{
    content:"With support from the Corporation of Chennai, Nizhal has embarked on a new venture: it is raising a garden of herbs at Kotturpuram Tree Park (KTP). The garden, expected to be ready by the end of the year, will be called ‘Amma Herbal Garden’.",
    image:"https://th-i.thgim.com/public/migration_catalog/article11445464.ece/alternates/LANDSCAPE_1200/12DC_ADYR__MYPR_NIZHAL_HERBAL_GARDEN"
},
{
    content:"Upgradation of the T. Nagar bus terminus, removal of roadside eateries and multi-storey car parking facility were among topics that figured prominently at the public grievance meet organised by the T. Nagar East Exnora Innovators Club – Division, at Raja Street, T. Nagar recently.",
    image:"https://th-i.thgim.com/public/migration_catalog/article11568324.ece/alternates/LANDSCAPE_1200/15DCTNGR-_EXNORA"
},
{
    content: "A group of professionals from Chennai turn to farming during weekends, to help poor farmers find free labour and other support. M.J. Prabu meets the enterprising bunch.",
    image:"https://th-i.thgim.com/public/migration_catalog/article11564077.ece/alternates/LANDSCAPE_1200/08dcmypr_Weekend_Agriculturalist1.JPG"
},
{
  content: "A broken storm water drain on Velachery Main Road has become a garbage pit, carries sewage and puts motorists and residents at risk during the monsoon, reports T. Madhavan",
  image:"https://th-i.thgim.com/public/migration_catalog/article11563752.ece/alternates/LANDSCAPE_1200/08DC_STORMWATER_DRAIN_PROBLEM_-_VELACHERY_ROAD__EAST_TAMBARAM.1"
},
{
  content:"Chennai Metro’s data till July 29 shows that the daily average number of travellers touched 2.68 lakh whereas in June the figure was 2.46 lakh passengers.",
  image:"https://th-i.thgim.com/public/incoming/c5me3b/article67143095.ece/alternates/LANDSCAPE_1200/4871_31_7_2023_18_59_2_1_20230731_175933.JPG"
},
{
  content:"Garbage collected from around one lakh houses is dumped on ground behind Pallikaranai police station every day; the panchayat officials say they are finding it almost impossible to comply with Solid Waste Management Rules with the meagre resoures at their disposal.",
  image:"https://th-i.thgim.com/public/incoming/lcq73m/article67139268.ece/alternates/LANDSCAPE_1200/Medavakkam%20Garbage%20Dumping%20Ground%204.jpg"
}, 
{
  content:"The students will receive scholarships to access projects in STEM (Science, Technology, Engineering and Mathematics) and humanities to nurture skills to solve real-world issues and will be guided in Tamil by professors across the world through the platform",
  image:"https://th-i.thgim.com/public/incoming/dldsw0/article67143316.ece/alternates/FREE_1200/2501_31_7_2023_19_50_21_1_IMG_1238.JPEG"
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
    backgroundColor: 'red',
    paddingTop: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingBottom:10,
  },
  content: {
    padding:20,
    fontSize: 5,
    
  },
  title: {
    padding:30,
    fontSize:15,
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

