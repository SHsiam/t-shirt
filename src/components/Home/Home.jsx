import React from 'react';
import Header from '../Hearder/Header';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts=useLoaderData();
    return (
        <div>

            <h2>this is home: {tshirts.length}</h2>
        </div>
    );
};

export default Home;