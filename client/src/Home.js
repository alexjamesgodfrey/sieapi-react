import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Deck from './components/Deck.js';
import mothercollection from './works/mother-collection.jpg';
import mother1 from './works/mother-1.jpg';
import mother2 from './works/mother-2.jpg';
import mother3 from './works/mother-3.png';
import mother4 from './works/mother-4.jpg';
import mother5 from './works/mother-5.png';
import mother6 from './works/mother-6.jpg';

const Home = () => {
    const [fetchArray, setFetchArray] = useState([]);

    const getRegulars = async () => {
      const arr = await fetch('/api/works');
      const arrJson = await arr.json();
      let shuffled = arrJson
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
      setFetchArray(shuffled);
    }

    useEffect(() => {
        getRegulars();
    }, [])

    const objectFactory = ( image, title, date, description, price, isParent, isChild, width, childArray ) => {
        return {
          image: image,
          title: title,
          date: date,
            description: description,
          price: price,
          isParent: isParent,
            isChild: isChild,
          width: width,
          childArray: childArray
        }
    }
    
    const motherArray = [
    objectFactory(mother1, 'bluebells', '04.02.21', 'blank desc', 15, false, true),
    objectFactory(mother2, 'roses', '04.04.21', 'blank desc', 15, false, true),
    objectFactory(mother3, 'carnation', '04.04.21', 'blank desc', 15, false, true),
    objectFactory(mother4, 'motley', '04.05.21', 'blank desc', false, 15, false, true),
    objectFactory(mother5, 'lilac', '04.07.21', 'blank desc', false, 15, false, true),
    objectFactory(mother6, 'blue orchid', '04.07.21', 'blank desc', 15, false, true)
    ]


    return(
        <div className="total">
            <Header />
            <Deck arr={fetchArray}/>
        </div>
    )
}

export default Home;