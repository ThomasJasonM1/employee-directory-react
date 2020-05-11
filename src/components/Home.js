import React from 'react';
import EnhancedTable from './EnhancedTable';
import Header from './Header';
import '../App.css';

const useStyles = {
    app: {
        padding: '4em',
    },
};

const Home = () => {
    return (
        <div className="App" style={useStyles.app}>
            <Header />
            <EnhancedTable />
        </div>
    )
};

export default Home;
