import { Routes, Route } from 'react-router'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import GameCatalog from './components/GameCatalog/GameCatalog'
import GameCreate from './components/GameCreate/GameCreate'

import './App.css'

function App() {
    
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/games" element={<GameCatalog />}/>
                    <Route path="/games/create" element={<GameCreate />}/>
                </Routes>
                
            </main>
        </div>
    )
}

export default App
