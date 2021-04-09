import React from 'react';
import Header from './components/Header.js';
import Deck from './components/Deck.js';
import elephant from './works/elephant.png';
import roseface from './works/roseface.png';
import dafodilface from './works/dafodilface.jpg';
import weird from './works/weird.jpg';
import mothercollection from './works/mother-collection.jpg';
import mother1 from './works/mother-1.jpg';
import mother2 from './works/mother-2.jpg';
import mother3 from './works/mother-3.png';
import mother4 from './works/mother-4.jpg';
import mother5 from './works/mother-5.png';
import mother6 from './works/mother-6.jpg';

const Home = () => {

    const objectFactory = ( image, title, date, description, hasPrint, printPrice, soldPrint, hasSignedPrint, signedPrintPrice, totalSignedPrint, soldSignedPrint, hasOriginal, originalPrice, soldOriginal, isParent, isChild, width, childArray ) => {
        return {
          image: image,
          title: title,
          date: date,
          description: description,
          hasPrint: hasPrint,
          printPrice: printPrice,
          soldPrint: soldPrint,
          hasSignedPrint: hasSignedPrint,
          signedPrintPrice: signedPrintPrice,
          totalSignedPrint: totalSignedPrint,
          soldSignedPrint: soldSignedPrint,
          hasOriginal: hasOriginal,
          originalPrice: originalPrice,
          soldOriginal: soldOriginal,
          isParent: isParent,
          isChild: isChild,
          width: width,
          childArray: childArray
        }
    }
    
    const motherArray = [
    objectFactory(mother1, 'bluebells', '04.02.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 15, false, false, true),
    objectFactory(mother2, 'roses', '04.04.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 15, false, false, true),
    objectFactory(mother3, 'carnation', '04.04.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 15, false, false, true),
    objectFactory(mother4, 'motley', '04.05.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 15, false, false, true),
    objectFactory(mother5, 'lilac', '04.07.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 15, false, false, true),
    objectFactory(mother6, 'blue orchid', '04.07.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 15, false, false, true)
    ]

    const cardsArray = [
    // objectFactory(elephant, 'elephant', '12.18.20', 'blank desc', true, 12, 0, true, 39, 20, 0, true, 99, false),
    objectFactory(roseface, 'roseface', '03.20.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 79, false),
    objectFactory(dafodilface, 'dafodilface', '03.25.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 79, false),
    objectFactory(weird, 'calico', '03.30.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 89, false),
    objectFactory(mothercollection, 'mother\'s day card collection', '04.07.21', 'blank desc', false, 0, 0, false, 0, 0, 0, true, 99, false, true, false, 600, motherArray),
    ]

    return(
        <div className="total">
            <div className="main">
                <Header />
                <Deck arr={cardsArray}/>
            </div>
        </div>
    )
}

export default Home;