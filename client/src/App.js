import React from "react";
import Calendar from "./Components/Calendar";
import "./index.css";
import "./Components/Calendar.css"

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Calendar />
            </div>
        );
    }
}

export default App;