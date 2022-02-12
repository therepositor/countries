import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountriesList from '../components/CountriesList';

const Index = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<CountriesList />} path='/' />
        </Routes>
    </BrowserRouter>
)

export default Index