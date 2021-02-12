import react from 'react';
import Card from './components/Card.js'
import './styles/App.scss';

function App() {
  const cardsArray = [
    {
      id: 0,
      title: 'about me',
      date: '12.25.20',
      description: 'lorem ipsum si dip amet',
      color: '#8ee6ce'
    }
  ]


  return (
    <div className="main">
      {
        cardsArray.map((card) => {
          return <Card
            id={card.id}
            title={card.title}
            date={card.date}
            description={card.description}
            color={card.color}
            />
          }
        )
      }
    </div>
  );
}

export default App;
