/**
 * We are going to learn Class Component. So we have learnt the problem about functional component.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    // We have some more methods which will be useful in the following usecase

    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' }


    // }

    /**
     * We can declare state outside the component. It is not mandatory to declare in the constructor. By default react component initialize the state
     * in the constrctor. you can check the above code snippet in ES5Js babeljs.io. The below code will produce the constructor.
     */
    state = { lat: null, errorMessage: '' }

    /**
     * We have a situation where we need to call a function only once i.e getting the location so we have some special methods for those purpose
     * 
     * The below method calls only once when the component is intialized
     */
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),

            err => this.setState({ errorMessage: err.message })

        );
    }

    /**
     * This method should be available / defined which has to return some jsx.
     */
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <div>Lat: {this.state.lat}</div>;
        }
        return <div>Loading..........</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);