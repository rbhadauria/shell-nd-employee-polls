import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Page404 from './components/Page404';
import Login from './components/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/*" exact element={<App />} />

        <Route element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
