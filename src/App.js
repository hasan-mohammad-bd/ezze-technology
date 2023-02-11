
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './page/Home';
import About from './page/About';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Career from './components/career/Career';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'about',
          element: <About/>

        },
        {
          path: 'press',
          element: <About/>

        },
        {
          path: '*',
          element: <PageNotFound/>

        },
        {
          path: 'career',
          element: <Career/>

        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
