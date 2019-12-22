import * as React from 'react'
import { AppRegistry } from 'react-native'
import { Button, Provider } from 'react-native-paper'

function App() {
  return (
    <Provider>
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
          src: url(${
            require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')
              .default
          }) format('truetype');
        }
        `}</style>
        <MyComponent />
      </>
    </Provider>
  )
}

function MyComponent() {
  return (
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')}>
      Press me
    </Button>
  )
}

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') })
