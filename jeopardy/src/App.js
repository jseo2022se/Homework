
import { useEffect, useState } from 'react';
import './App.css';
import TriviaDisplay from './components/TriviaDisplay';

function App() {

  let [question, setQuestion] = useState('')

  const getQuestion = async () => {
    const response = await fetch(`https://jservice.io/api/random`)
    const data = await response.json()

    setQuestion(data)
  }

  return (
    <div className="App">
      <h1>Welcome to Jeopardy</h1>
      <TriviaDisplay question={question}/>
      <br /><br />
      <button className='button-54' onClick={getQuestion}>Random Trivia Question</button>
      <br /><br />
      
      
    </div>
  );
}

export default App;
