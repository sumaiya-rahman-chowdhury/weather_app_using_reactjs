
import '../src/index.css'
import Search from './component/search/search';

function App() {
  const handleOnSearchChange = () =>
  {
    
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
    </div>
  );
}

export default App;
