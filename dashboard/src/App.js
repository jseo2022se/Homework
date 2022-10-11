import './App.css';
import Sidebar from './components/Sidebar'
import Reviews from './components/Reviews'
import AverageRating from './components/AverageRating'
import SentimentalAnalysis from './components/SentimentAnalysis'
import WebsiteVisitors from './components/WebsiteVisitors'

function App() {
  return (
    <div className='container'>
      <div id='sidebar'> <Sidebar /></div>
      <div id='reviews'> <Reviews /></div>
      <div id='average-rating'> <AverageRating /></div>
      <div id='sentimental-analysis'> <SentimentalAnalysis /></div>
      <div id='website-visitors'> <WebsiteVisitors /></div>
    </div>
  );
}

export default App;
