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
export default App;
// src/App.jsx
import React from 'react'; 
import SuperheroCard from './SuperheroCard';
import './App.css';


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
.App {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
} 
.superhero-card {
    border: 2px solid #444;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    background-color: #f9f9f9;
  }
 
  .superhero-card header h2 {
    margin: 0;
    font-size: 2em;
  }
 
  .superhero-card section {
    margin-top: 15px;
}

.superhero-card ul {
  list-style-type: disc;
  margin-left: 20px;
}

.superhero-card footer blockquote {
  font-style: italic;
  margin-top: 20px;
}
