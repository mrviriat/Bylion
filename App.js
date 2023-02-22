import React, { useCallback, useEffect, useState, } from 'react';
import { Text, View, StyleSheet, Switch, useWindowDimensions, SafeAreaView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScaledSheet } from 'react-native-size-matters';
import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from 'react-native-normalize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

EStyleSheet.build({
  $fontColor: 'green',
  $bgColor: '#e6e6e6',
  $rem: 16,
});

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 390;
const baseHeight = 844;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
export const scaledSize =
  (size) => Math.ceil((size * scale));

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
Text.defaultProps = Text.defaultProps || {}; //Disable dynamic type in IOS
Text.defaultProps.allowFontScaling = false;


export default function App() {
  const { fontScale } = useWindowDimensions();
  const [appIsReady, setAppIsReady] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  var Mytext = "просто невероятно большая куча текста для того, чтобы проверить, как работает адаптивный размер под разные устройста с учётом переноса слов на новую строку просто невероятно большая куча текста для того, чтобы проверить, как работает адаптивный размер под разные устройста с учётом переноса слов на новую строку просто невероятно большая куча текста для того, чтобы проверить, как работает адаптивный размер под разные устройста с учётом переноса слов на новую строку"
  var SSize = 8
  return (
    // <View style={{ flex: 1}} onLayout={onLayoutRootView}>
    //   {/* <Text style={{fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(10),  marginRight: responsiveWidth(10)}}>
    //     {
    //       "Loren Ipsum is simply dummy text of the printing and typesetting indystry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkniwn printer took a galley of type and scrambled it to make a type specimen book."
    //     } </Text> */}
    //   {/* <Text style={styleses.container}>
    //     {
    //       "Loren Ipsum is simply dummy text of the printing and typesetting indystry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkniwn printer took a galley of type and scrambled it to make a type specimen book."
    //     } </Text> */}
    //   {/* <View style={stylesq.column}>
    //     <Text style={stylesq.header}>Welcome to Extended StyleSheet!</Text>
    //   </View> */}
    //   <SafeAreaView style={{    backgroundColor: 'red'} }>

    //     {/* <Text style={width == 390 ? {fontSize: SSize} : {fontSize: SSize*1.0551948*( width/390)}}>{Mytext}</Text> */}
    //     <Text style={ {fontSize: responsiveFontSize(2)}}>{Mytext}</Text>

    //     <Text style={width == 390 ? {fontSize: SSize} : {fontSize: SSize*1.0551948*( width/390)}}>{width == 390 ?  SSize :  SSize*1.0551948*( width/390)} {width}</Text>

    //   </SafeAreaView>
    // </View>
    <View
      // style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      style={styles.container}
      onLayout={onLayoutRootView}>
      <View style={{
        backgroundColor: 'white', shadowColor: 'black',
        shadowOpacity: 0.45,
        shadowOffset: { width: 0, height: '25%' },
        shadowRadius: '30%',
        borderRadius: '5%',
      }}>
        <View style={{
          backgroundColor: '#151718', height: responsiveHeight(3.1), width: responsiveWidth(77),
          flexDirection: "row",
          alignItems: 'center',
          borderTopStartRadius: '5%',
          borderTopEndRadius: '5%',
        }}>
          <View style={styles.circlered}></View>
          <View style={styles.circley}></View>
          <View style={styles.circleg}></View>
        </View>
        <View style={{
          backgroundColor: 'white', flexDirection: "row", height: responsiveHeight(53), width: responsiveWidth(77),
          borderBottomEndRadius: '5%',
          borderBottomStartRadius: '5%',
        }}>
          <View style={styles.byl}>
            <Text style={styles.text}>Буль</Text>
          </View>
          <View style={styles.on}>
            {isEnabled ? <Text style={styles.textON}>on</Text> : <Text style={styles.textOFF}>off</Text>}
          </View>
          <View style={styles.sw}>
            <Switch
              style={styles.verticalSwitch}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

      </View>

      {/* <View>
        <Text style={{ fontSize: RFValue(8, 844) }}>просто невероятно большая куча текста для того, чтобы проверить, как работает адаптивный размер под разные устройста с учётом переноса слов на новую строку</Text>
        <Text adjustsFontSizeToFit style={styles.text12}>просто невероятно большая куча текста для того, чтобы проверить, как работает адаптивный размер под разные устройста с учётом переноса слов на новую строку</Text>

        <Text style={{ fontSize: RFPercentage(1.5) }}> невероятно большая куча текста для того, чтобы проверить, как работает адаптивный размер под разные устройста с учётом переноса слов на новую строку</Text>
      </View> */}
      <View style={{ width: 400 }}>
        <Text style={{ alignSelf: "flex-end" }}>текст1</Text>
        <Text style={{ alignSelf: "flex-start" }}>текст2</Text>
      </View>
    </View>
    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <View>
    //     <Text style={styles.text}>Loren Ipsum is simply dummy text of the printing and typesetting indystry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkniwn printer took a galley of type and scrambled it to make a type specimen book.</Text>
    //   </View>
    //   {/* <View style={styles.box}>
    //     <Text style={styles.text}>React {width} Native Normalize</Text>
    //   </View>
    //   <View>
    //     <Text style={styles.text}>eeeeeeeeeeeee</Text>
    //   </View>
    //   <View style={styles.box}>
    //     <Text style={styles.text2}>React Native Normalize</Text>
    //   </View> */}
    // </View>
  );
}

const stylesq = EStyleSheet.create({
  header: {
    fontSize: '19rem',
    color: 'green',
    // textAlign: 'center',
  },
  column: {
    width: '80%',
    height: '60%',
    marginHorizontal: '10%',
    marginTop: '20%',
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
  }
});


const styleses = ScaledSheet.create({
  container: {
    fontSize: '5@vs', // = scale(100)
    // height: '200@vs', // = verticalScale(200)
    // padding: '2@msr', // = Math.round(moderateScale(2))
    // margin: 5
  },
})

const styles = StyleSheet.create({
  text12: {
    fontSize: 9,
    color: 'blak',
  },
  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  byl: {
    justifyContent: 'center',
    marginLeft: responsiveWidth(12.5),
  },
  on: {
    justifyContent: 'center',
  },
  sw: {
    marginRight: responsiveWidth(12.5),
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  verticalSwitch: {

    transform: [{ rotate: '-90deg' }, { scaleX: responsiveWidth(0.4) }, { scaleY: responsiveWidth(0.4) }]
  },
  text: {
    fontSize: responsiveFontSize(5.7),
    color: 'blak',
  },
  textON: {
    fontSize: responsiveFontSize(5.7),
    color: 'green',
  },
  textOFF: {
    fontSize: responsiveFontSize(5.7),
    color: 'red',
  },
  // textOFF: {
  //   fontSize: responsiveFontSize(5.7),
  //   color: 'red',
  // },
  circlered: {
    backgroundColor: '#ff5f56',
    width: responsiveWidth(3.7),
    height: responsiveWidth(3.7),
    borderRadius: responsiveWidth(3.7) / 2,
    marginLeft: responsiveWidth(3.2)
  },
  circley: {
    backgroundColor: '#ffbd2e',
    width: responsiveWidth(3.7),
    height: responsiveWidth(3.7),
    borderRadius: responsiveWidth(3.7) / 2,
    marginLeft: responsiveWidth(1.4)
  },
  circleg: {
    backgroundColor: '#27c93f',
    width: responsiveWidth(3.7),
    height: responsiveWidth(3.7),
    borderRadius: responsiveWidth(3.7) / 2,
    marginLeft: responsiveWidth(1.4)
  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: normalize(173, 'height'),
//     left: normalize(40),
//     width: normalize(300),
//     height: normalize(300),
//     borderRadius: normalize(150),
//     backgroundColor: '#009fcd',
//   },
//   text: {
//     fontSize: responsiveFontSize(2),
//     color: 'black',
//   },
//   text2: {
//     fontSize: 55,
//     color: 'white',
//   },
// });


