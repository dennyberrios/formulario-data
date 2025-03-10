import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Header from '../components/Header';
import Register from '../screens/Register';
import Update from '../screens/Update';

const RoutesApp = () => {
    return ( 
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Register/>} />
                <Route path='/edit/:id' element={<Update/>} />
            </Routes>
        </Router>
     );
}
 
export default RoutesApp;