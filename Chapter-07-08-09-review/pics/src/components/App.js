/**
 * App.js is most important file where the core of the app will reside here.
 */

import React from 'react';
import SearchBar from './SearchBar';

// This is initialy functional component
// This may change to Class Component if we ought to use State/props etc..
const App = () => {

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar />
        </div>
    );
}

export default App;