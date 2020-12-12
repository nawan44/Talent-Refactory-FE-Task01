import { render } from '@testing-library/react';
import React from 'react';
import './pages.css';
import profile from '../../img/bali.jpg'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <img src={profile} />
            </div>
        )
    }
}
export default Home