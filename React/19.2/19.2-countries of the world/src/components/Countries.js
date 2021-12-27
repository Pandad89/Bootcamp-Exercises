import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://restcountries.com/v2/all')

            setResult(data)
        }

        search();
    }, [term])

    const filteredItems = result.filter(item => {
        return item.name.toLowerCase().startsWith(term.toLowerCase());
    });
    const renderedResults = filteredItems.map((result) => {
        return (
            <div key={result.numericCode}>
                <ul>
                    <li>{result.name}</li>
                </ul>
            </div>
        )
    });

    return (
        <div>
            <div>
                <label>Search</label>
                <input value={term} onChange={(event) => setTerm(event.target.value)}></input>
            </div>
            <div>
                {renderedResults}
            </div>
        </div>

    );
};

export default Countries;