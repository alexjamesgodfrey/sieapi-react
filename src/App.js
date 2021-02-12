import react from 'react';
import Card from './components/Card.js'
import './styles/App.scss';
import elephant from './works/elephant.png';

function App() {
  const cardsArray = [
    {
      image: elephant,
      color: '#8ee6ce',
      title: 'about me',
      date: '12.25.20',
      description: 'lorem ipsum si dip amet'
    }
  ]


  return (
    <div className="main">
      {
        cardsArray.map((card, key) => {
          return <Card
            id={key}
            image={card.image}
            color={card.color}
            title={card.title}
            date={card.date}
            description={card.description}
            />
          }
        )
      }
    </div>
  );
}

export default App;
