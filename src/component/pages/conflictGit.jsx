import { render } from '@testing-library/react';
import React from 'react';
import './pages.css';
import workflow from '../../img/workflow.svg'
import sistemGit from '../../img/sistem-git.png'


const frameYoutube = {
    height: '300px',
    width: '80%'
}
const gambar = {
    width: '80%'

}
class KonflikGit extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="Konflik-git">
                    <h1>Bekerja dengan Git</h1>
                    <p>Jika kita membuat sebuah proyek dengan lebih dari 1 orang yang terlibat dan menggunakan Git sebagai sarana development dan saling berbagi source code, maka kemungkinan akan terjadi konflik (saling tindih code) tinggi</p>
                    <img src={sistemGit} style={gambar} />
                    <p>source : https://www.petanikode.com/git-untuk-pemula/</p>
                    <h2>Git Workflow</h2>
                    <p>Setiap membuat fitur baru / perbaikan code, programmer harus membuat branch baru dan bekerja dengan branch tersebut. Jika pekerjaan selesai dan melakukan commit di branch tersebut. Programmer melakukan request merge. Berikutnya programmer yang berwenang melakukan merge akan approve dan melihat perubahan / konflik yang ada</p>
                    <img src={workflow} style={gambar} />
                    <p>source : https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow</p>
                    <h2>Git Branch</h2>
                    <p>Membuat branch secara terpisah menurut / mengikuti feature yang dibuat untuk menghindari konflik pada repository </p>
                    Membuat Branch baru
                    <h6>git checkout -b &lt;nama branch	&gt;</h6>
                    Untuk berpindah antar branch
                    <h6>git checkout  &lt;nama branch	&gt;</h6>
                    <h2>Konflik Git</h2>
                    <p>Contoh jika si A mengedit file index lalu melakukan push, maka jika si B langsung melakukan push akan terjadi konflik.</p>
                    <p>Untuk menghindari hali ini terjadi, si B harus melakukan pull terlebih dulu. Jika menggunakan Vs Code hal ini bisa dilakukan secara otomatis</p>
                    <h2>Abaikan Konflik Git</h2>
                    <p>Git diff dapat digunakan untuk menampilkan perubahan antara 2 commit, dua trees yang sedang bekerja dan dua file pada disk. Untuk mengabaikan perbedaan tersebut dapat menggunakan</p>
                    <h6>git diff -w</h6>
                    <h2>Simulasi Git</h2>
                    <p>
                        <ol>
                            <li>Si A membuat sebuah project</li>
                            <li>Si A membuat branch Developer untuk melakukan proses development</li>
                            <li>Si B melakukan clone project itu</li>
                            <li>Si B membuat fitur baru, misal fitur 1 terlebih dahulu membuat branch baru dibawah branch development dengan nama branch fitur 1</li>
                            <li>Si B selesai membuat fitur baru</li>
                            <li>Si B melakukan push ke branch fitur 1</li>
                            <li>Si B melakukan request merge</li>
                            <li>Si A ingin mel</li>
                        </ol>
                    </p>
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
export default KonflikGit