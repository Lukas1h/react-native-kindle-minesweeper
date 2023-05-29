//THANK YOU LORD. YOU HELPED ME.
import React from 'react';
import {
  Text,
  NativeModules,
  AppRegistry,
  requireNativeComponent,
  View
} from 'react-native';
import App from './App';
import { Header, Navigation, Button } from 'react-native-kindle';
const KPPWindow = requireNativeComponent('KPPWindow');

const WinMgrDrawMode = {
  NORMAL: 0,
  FASTEST: 1,
  KB: 2,
  PAN_ZOOM: 3,
  HIGHLIGHT: 4,
  ANIMATION_BURST: 5,
};

const WinMgrSensitiveLevel = {
  FLASH_NEXT_UPDATE: 0,
  NONE: 1,
  DEFAULT_VALUE: 2,
  READER: 3,
  MID_GRAYS: 4,
  MODE_FLASHPAGES: 5,
  MODE_DIALOG: 6,
  MODE_FLASHFASTPAGES: 7,
  MODE_READER_IMAGE_HEAVY: 8,
};

function Home(props){
  return (
    <View 
    style={{
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Text style={{textAlign:"center",fontSize:30,fontWeight:"900",padding:40}}>Chess</Text>
      <Button
      title='New Game'
      onPress={()=>{props.pushView({ title: 'Chess', view: <App /> });}}
      ></Button>
    </View>
  )

}

function ReactNativeFrontEnd() {
  const initalStack = [{ title: 'Home', view: <Home /> }];

  return (
    <KPPWindow
      key="mainWindow"
      title="com.lab126.testWindow"
      windowType="full_screen"
      style={{
        width: '100%',
        height: '100%',
      }}
      winMgr={{
        // drawMode: WinMgrDrawMode.NORMAL,        //TODO: Figure out good refresh settings. Untill then, defaults work good.
        // sensitiveLevel: WinMgrSensitiveLevel.NONE,
        A: 'mainWindow',
      }}
      testID="demoApp"
      accessibilityLabel="Sample Application"
      accessibilityHint="Sample Application shows component features that K Plus Plus foundation provides."
      defaultFocus="demoNextWidgetButton"
    >
      <Navigation initalStack={initalStack} />
    </KPPWindow>
  );
}

AppRegistry.registerComponent('ReactNativeFrontEnd', () => ReactNativeFrontEnd);
