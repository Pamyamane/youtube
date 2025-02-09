import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Heder';  // Fixed typo
import Store from './Utils/Stroe';        // Fixed typo


function App() {  
 
  
  return (
    <Provider store={Store}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
