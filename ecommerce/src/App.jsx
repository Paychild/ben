import { Routes,Route } from 'react-router';
import { HomePage } from './Pages/HomePage';
import { CheckOutpage } from './Pages/CheckPage';
import { OrderPage } from './Pages/ordersPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='checkout' element={<CheckOutpage/>} />
      <Route path='orders' element={<OrderPage/>}/>
   </Routes>
  )
}

export default App
