import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(

      );
      const json = await response.json();
      setList(json);
    }

  }, []);

  return (
    <div className="App">
      
    </div>
  )
}

export default App
