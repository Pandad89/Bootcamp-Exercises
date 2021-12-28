import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchApp() {
    const [result, setResult] = useState('');
    const controller = new AbortController();


    useEffect(() => {


        const fetch = async () => {
            try {
                const { data } = await axios.get('http://swapi.dev/api/planets/1/', {
                    signal: controller.signal
                })
                setResult(data.name);
            } catch (error) {
            };
        }
        fetch();
        return () => {
            controller.abort();
        }
    }, []);
    
    return (
        <div>
            <div>
                <h1>{result}</h1>
            </div>
        </div>
    );
};

export default FetchApp;