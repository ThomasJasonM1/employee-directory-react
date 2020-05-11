import React from 'react';
import './App.css';
import EnhancedTable from './components/EnhancedTable';
import Header from './components/Header';

const useStyles = {
  app: {
      padding: '4em',
  },
};

function App() {
  return (
    <div className="App" style={useStyles.app}>
      <Header />
      <EnhancedTable />
    </div>
  );
}

export default App;
