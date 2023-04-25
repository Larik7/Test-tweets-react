import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/SharedLayout/SharedLayout';
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const Tweets = lazy(() => import('./pages/Tweets'))

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/Tweets"
          element={<Tweets />} />
      </Route>
    </Routes>
  )
}

export default App
