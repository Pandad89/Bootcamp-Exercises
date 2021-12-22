import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hat from './items/Hat';
import Jacket from './items/Jacket';
import Jeans from './items/Jeans';
import Tie from './items/Tie';

const Products = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/products/hat" exact component={Hat} />
                <Route path="/products/jacket" exact component={Jacket} />
                <Route path="/products/jeans" exact component={Jeans} />
                <Route path="/products/tie" exact component={Tie} />
            </BrowserRouter>
        </div>
    )
}

export default Products;