import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Algolia() {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState('');
    
    

    return (
        <div>
            <h1>Algolia</h1>
        </div>
    );
};

export default Algolia;