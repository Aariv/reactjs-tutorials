import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
/**
 * This is for calling external apis
 */
import unsplash from '../api/unsplash';

/**
 * We have to use ClassComponent because we have to update teh value 
 */
class App extends React.Component {

    state = { images: [] };

    /**
     * Define a callback function
     * 
     */
    onSearchSubmit = async (term) => {
        //console.log(term);
        const url = '/search/photos';
        /*
            Method 1: with promise
            axios.get(url, {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 18ed021c64b4ef1bbcb3162eb4bdfdbf229f04de0a15ad0fd6ded4f4e4de3b44'
            }
        }).then((response) => {
            console.log(response.data.results);
        }); */

        const response = await unsplash.get(url, {
            params: {
                query: term
            },

        });

        //console.log();
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmitGet={this.onSearchSubmit} />

                <ImageList images={this.state.images} />
            </div >
        );
    }
}

export default App;