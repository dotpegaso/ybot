import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = () => {

    const content = {}
    const prefix = ["Who is", "What is", "The history of"]

    function handleSearchTerm(e){
        return content.searchTerm = e.target.value
    }

    function handlePrefix(e){
        return content.prefix = e.target.value
    }

    return(
        <div>
            <label htmlFor="searchTerm">Search Term:</label>
            <input id="searchTerm" type="text" onChange={handleSearchTerm}/>

            <br/>

            <label htmlFor="prefix">Select one prefix</label>
            <select id="prefixes" onChange={handlePrefix}>
                { prefix.map( (vl, k) => <option value={vl} key={k}>{vl}</option>) }
            </select>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
