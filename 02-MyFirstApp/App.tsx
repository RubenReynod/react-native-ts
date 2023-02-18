import React from 'react';
import { SafeAreaView } from 'react-native';
//import { Flex } from './src/screens/Flex.screen';
//import Counter from './src/screens/Counter.screen';
// import { BoxObjectModel } from './src/screens/BoxObjectModel.screen';
// import HelloWord from './src/screens/HelloWord.screen';
// import { Dimensions } from './src/screens/Dimensions.screens';
// import { Position } from './src/screens/Position.screen';
import { Task } from './src/screens/Task.screen';

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
      { /* <HelloWord />*/ }
      { /*<Counter />*/ }
      { /*<BoxObjectModel />*/ }
      { /* <Dimensions /> */ }
      { /*<Position />*/ }
      { /*<Flex />*/ }
      <Task />
    </SafeAreaView>
  );
};

export default App;
