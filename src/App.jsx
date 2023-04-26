import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import './App.css'

const HomePage = lazy(() => import('./pages/Home'))
const Tweets = lazy(() => import('./pages/Tweets'))

function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/Tweets"
          element={<Tweets />} />
      </Route>
    </Routes>
  )
}

export default App
