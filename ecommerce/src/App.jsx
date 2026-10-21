import { Routes,Route } from 'react-router';
import { HomePage } from './Pages/HomePage';
import { CheckOutpage } from './Pages/CheckPage';
import { OrderPage } from './Pages/ordersPage';
import { TrackingPage } from './Pages/TrackingPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='checkout' element={<CheckOutpage/>} />
      <Route path='orders' element={<OrderPage/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
   </Routes>
  )
}

export default App
