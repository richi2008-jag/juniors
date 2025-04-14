// src/SuperheroCard.jsx
import React from 'react';
function SuperheroCard({ name, description, powers, quote }) {
  return (
    <div className="superhero-card">
      <header>
        <h2>{name}</h2>
      </header>
      <section>
        <h3>About</h3>
        <p>{description}</p>
      </section>
      <section>
        <h3>Powers</h3>
        {powers.length > 0 ? (
          <ul>
            {powers.map((power, index) => (
              <li key={index}>{power}</li>
            ))}
          </ul>
        ) : (
          <p>No powers listed.</p>
        )}
      </section>
      <footer>
        <blockquote>"{quote}"</blockquote>
      </footer>
    </div>
  );
}  export default SuperheroCard;
// src/App.jsx
import React from 'react'; 
import SuperheroCard from './SuperheroCard';
import './app.css';


function App() {
  // Define your superhero information here (modify with your favorite superhero details)
  const superhero = {
    name: 'Spider-Man',
    description: 'A friendly neighborhood superhero with agile reflexes and spider-like abilities.',
    powers: ['Wall-crawling', 'Spider-sense', 'Super strength', 'Agility'],
    quote: 'With great power comes great responsibility.'
  };


  return (
    <div className="App">
      <h1>My Favorite Superhero</h1>
      <SuperheroCard
        name={superhero.name}
        description={superhero.description}
        powers={superhero.powers}
        quote={superhero.quote}
      />
    </div>
  );
}
export default App;
// src/App.css
