import { render } from '@testing-library/react';
import React from 'react';
import './pages.css';
import profile from '../../img/bali.jpg'

const fotoProfil = {
    width: '200px',
    borderRadius: '50px',
    textAlign: 'center',
    margin: 'auto'
}
const containerHome = {
    width: '100%',
    padding: '20px',
}
class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div style={containerHome}>
                    <h2>Talent Refactory Front End - Batch #1</h2>
                    <img src={profile} style={fotoProfil} />
                    <h3>Rachmat Gunawan</h3>
                </div>
            </div>
        )
    }
}
export default Home