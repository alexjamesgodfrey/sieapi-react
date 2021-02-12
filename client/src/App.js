import react from 'react';
import Deck from './components/Deck.js';
import './styles/App.scss';
import elephant from './works/elephant.png';
import piggy from './works/piggy.png';
import bricks from './works/bricks.png';

function App() {

  const objectFactory = ( image, title, date, description, hasPrint, printPrice, soldPrint, hasSignedPrint, signedPrintPrice, totalSignedPrint, soldSignedPrint, hasOriginal, originalPrice, soldOriginal ) => {
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
      soldOriginal: soldOriginal
    }
  }

  const cardsArray = [
    objectFactory(elephant, 'elephant', '12.18.20', 'blank desc', true, 12, 0, true, 39, 20, 0, true, 99, false),
    objectFactory(piggy, 'piggy', '08.30.20', 'blank desc', true, 12, 0, true, 39, 20, 0, false, 0, false),
    objectFactory(bricks, 'brickwaves', '06.30.18', 'blank desc', true, 8, 0, false, 0, 0, 0, false, 0, false)
  ]

  return (
    <div className="main">
      <Deck arr={cardsArray}/>
    </div>
  );

}

export default App;
