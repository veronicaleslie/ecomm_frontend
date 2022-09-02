
import { createContext } from 'react';
import Welcome from './components/welcome';

export const userContext = createContext();
function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
    </div>
  );
}

export default App;
