import { Routes, Route } from 'react-router'

import Header from './components/Header/Header'
import Home from './components/Home/Home'

import './App.css'

function App() {
    
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route index element={<Home />}/>
                </Routes>
                
            </main>
        </div>
    )
}

export default App
