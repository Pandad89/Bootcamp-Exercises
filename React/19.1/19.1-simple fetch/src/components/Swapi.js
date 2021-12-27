import React,  {useState, useEffect} from 'react'
import axios from 'axios'

const Swapi = () => {
    const [results, setResults] = useState('');

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get('https://swapi.dev/api/films/1')

            setResults(data);
        }
        
        fetch();
    }, [])

    
    return(
        <div>
            <div className='body'>
                <div className='information'>
                    <h1>{results.title}</h1>
                    <h1>{results.director}</h1>
                </div>
            </div>
        </div>
    );
};

export default Swapi