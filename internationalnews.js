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
    content:"African leaders leave Russia summit without grain deal or a path to end the war in Ukraine.",
    image:"https://th-i.thgim.com/public/incoming/zec1kh/article67138856.ece/alternates/LANDSCAPE_1200/AFP_33QC2ZT.jpg"
},
{
    content:"Pakistan PM Shehbaz Sharif says 'neutral' person to be picked interim premier; elder brother to be PM again if party wins elections.",
    image:"https://th-i.thgim.com/public/news/international/v4qshp/article65497093.ece/alternates/LANDSCAPE_1200/IMG_FL06_PAK_PM_2_1_OL9NDKI6.jpg"
},
{
    content:"Russian missiles strike an apartment building, killing at least 4 in Ukrainian leader's hometown.",
    image:"https://th-i.thgim.com/public/incoming/op3tp3/article67141903.ece/alternates/LANDSCAPE_1200/2023-07-31T100750Z_1977125098_RC2AE2AP13I8_RTRMADP_3_UKRAINE-CRISIS-ATTACK-KRYVYIRIH.JPG"  
},
{
    content: "Morning digest | Stress-relief sessions on for 10,000 children in 350 Manipur relief camps; ‘designed’ disruptions lower the dignity of the House, says Lok Sabha Speaker Om Birla, and more.",
    image:"https://th-i.thgim.com/public/incoming/eixcov/article67139399.ece/alternates/FREE_1200/IMG_5774.jpeg"
},
{
  content: "Adani power project in northern Sri Lanka to be completed by January 2025, says Minister.",
  image:"https://th-i.thgim.com/public/news/international/bty8mb/article67115621.ece/alternates/LANDSCAPE_1200/Adani_Ranil_Special%20Arrangement.jpg"
},
{
  content:"Thousands of civilians have been killed and injured as the junta battles a clutch of new and established rebel groups opposed to military rule in myanmar.",
  image:"https://th-i.thgim.com/public/incoming/6lnyqp/article67143610.ece/alternates/LANDSCAPE_1200/Myanmar_State_of_Emergency_74132.jpg"
},    
{
  content:"On July 30, French President Emmanuel Macron vowed immediate and uncompromising action if French citizens or interests were attacked.",
   image:"https://th-i.thgim.com/public/incoming/dvb7wt/article67143163.ece/alternates/LANDSCAPE_1200/2023-07-31T083544Z_11561036_RC2PD2APOFC2_RTRMADP_3_NIGER-SECURITY.JPG"
}, 
{
  content:"U.K. PM Sunak announces more North Sea oil and gas exploration and carbon capture plans.",
  image:"https://th-i.thgim.com/public/incoming/nwohqe/article67142116.ece/alternates/LANDSCAPE_1200/2023-07-27T112502Z_699454237_RC2NB2AJ55NM_RTRMADP_3_BRITAIN-POLITICS.JPG"
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


