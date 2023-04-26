import React from 'react';
import {
  SafeAreaView, ScrollView,
} from 'react-native';

import FlatCards from './components/FlatCards';
import ElevetedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView >
        <FlatCards />
        <ElevetedCard/>
        <FancyCard/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
