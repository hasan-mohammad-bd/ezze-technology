
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './page/Home';
import About from './page/About';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Career from './components/career/Career';
import Press from './components/press/Press';

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
          element: <Press/>

        },
        {
          path: '*',
          element: <PageNotFound/>

        },
        {
          path: 'career',
          element: <Career/>

        },
        {
          path: 'contact',
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
