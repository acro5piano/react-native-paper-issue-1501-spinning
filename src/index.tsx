import * as React from 'react'
import { AppRegistry } from 'react-native'
import { Button, Provider } from 'react-native-paper'

function App() {
  return (
    <>
      <style type="text/css">{`
        html, body, #root {
          height: 100%;
        }
        #root {
          display: flex;
          flex-direction: column;
        }
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
        @font-face {
          font-family: 'AxisBasicProN-R';
          font-style: normal;
          font-weight: 400;
          src: url('/AxisBasicProN-R.otf');
        }
        @font-face {
          font-family: 'AxisBasicProN-M';
          font-style: normal;
          font-weight: 400;
          src: url('/AxisBasicProN-M.otf');
        }
    `}</style>
      <Provider>
        <MyComponent />
      </Provider>
    </>
  )
}

function MyComponent() {
  return (
    <Button
      icon="camera"
      mode="contained"
      onPress={() => console.log('Pressed')}
    >
      Press me
    </Button>
  )
}

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') })
