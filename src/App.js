import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Heder';  // Fixed typo
import Store from './Utils/Store';         // Fixed typo
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={Store}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <RouterProvider router={AppRouter} /> {/* Fixed incorrect prop */}
      </div>
    </Provider>
  );
}

export default App;
