import React from 'react';
import ReactDOM from 'react-dom';
/**
     * Rules of state
     * 
     * 1. We can use state only with Class based components
     * 2. Confuce with props and state
     * 3. 'State' is a javascript object contains data relevent to singular component
     * 4. 
     * 5. state must be initialized on the component creation
     * 6. setState is the only method used to update the state
*/
class App extends React.Component {

    // method for javascript 
    constructor(props) {
        super(props); // referense to parent methods i.e React.Component
        // We can initialize like this for the first time.
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // We must use setUpdate function be it whatever the change required 
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );
    }

    render() {
        /**
         * Should not call these kind of methods in the render method. We can use any other specilized methods or constructor
         * 
         * Reason: Whenever we update any state the render function will be invoked. So the whole UI is recreated. Wehn we put the below funtion gets called
         * whenever it invoked. to avoid that we don't prefer to write this function inside render method.
         */
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => console.log(position),
        //     (err) => console.log(err)
        // );

        // If errorMessage and no Latititude
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Lat: {this.state.lat}</div>
        }

        return <div>Loading..........</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);