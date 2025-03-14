import { Routes, Route } from 'react-router'
import { useState } from 'react'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import GameCatalog from './components/GameCatalog/GameCatalog'
import GameCreate from './components/GameCreate/GameCreate'
import GameDetails from './components/GameDetails/GameDetails'
import GameEdit from './components/GameEdit/GameEdit'

import './App.css'

function App() {
    const [email, setEmail] = useState('');

    const userLoginHandler = (email) => {
        setEmail(email);
    }
    
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/login" element={<Login onLogin={userLoginHandler} />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/games" element={<GameCatalog />}/>
                    <Route path="/games/create" element={<GameCreate />}/>
                    <Route path="/games/:gameId/details" element={<GameDetails email={email} />}/>
                    <Route path="/games/:gameId/edit" element={<GameEdit />}/>
                </Routes>
                
            </main>
        </div>
    )
}

export default App
