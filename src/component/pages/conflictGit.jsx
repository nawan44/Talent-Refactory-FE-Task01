import { render } from '@testing-library/react';
import React from 'react';
import './pages.css';
import workflow from '../../img/workflow.svg'

const frameYoutube = {
    height: '300px',
    width: '80%'
}
class ConflictGit extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="conflict-git">
                    <h1>Bekerja dengan Git</h1>
                    <p>Jika kita membuat sebuah proyek dengan lebih dari 1 orang yang terlibat dan menggunakan Git sebagai sarana development dan saling berbagi source code, maka kemungkinan akan terjadi konflik (saling tindih code) tinggi</p>
                    <h2>Git Workflow</h2>
                    <img src={workflow} />
                    <h2>Git Branch</h2>
                    <p>Membuat branch secara terpisah menurut / mengikuti feature yang dibuat untuk menghindari konflik pada repository </p>
                    <h2>Conflict Git</h2>
                    <p>Contoh jika si A mengedit file index lalu melakukan push, maka jika si B langsung melakukan push akan terjadi konflik.</p>
                    <p>Untuk menghindari hali ini terjadi, si B harus melakukan pull terlebih dulu. Jika menggunakan Vs Code hal ini bisa dilakukan secara otomatis</p>
                    <h3>Menggunakan Terminal</h3>
                    <iframe
                        style={frameYoutube}
                        src="https:youtube.com/embed/7XY5QhLP6Aw"></iframe>
                    <h3>Menggunakan Vs Code</h3>
                    <iframe
                        style={frameYoutube}
                        src="https:youtube.com/embed/7XY5QhLP6Aw"></iframe>
                </div>
            </div>
        )
    }
}
export default ConflictGit