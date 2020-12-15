import { render } from '@testing-library/react';
import React from 'react';
import './pages.css';
import profile from '../../img/bali.jpg'

const fotoProfil = {
    width: '200px',
    borderRadius: '50px',
    textAlign: 'center',
    margin: 'auto',
    margin: '50px 0 50px 0'
}
const containerHome = {
    width: '100%',
    height: '900px',
    padding: '30px',
    textAlign: 'center',
    margin: '0 auto'
}
class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div style={containerHome}>
                    <h2>Talent Refactory </h2>
                    <h2>Front End</h2>
                    <img src={profile} style={fotoProfil} />
                    <h3>Rachmat Gunawan</h3>
                </div>
            </div>
        )
    }
}
export default Home