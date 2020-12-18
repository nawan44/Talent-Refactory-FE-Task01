import { render } from '@testing-library/react';
import React from 'react';
import './pages.css';
import workflow from '../../img/workflow.svg';
import sistemGit from '../../img/sistem-git.png';
import foto1 from '../../img/1.jpg';
import foto2 from '../../img/2.jpg';
import foto3 from '../../img/3.jpg';
import foto4 from '../../img/4.jpg';
import foto5 from '../../img/5.jpg';
import foto6 from '../../img/6.jpg';
import foto7 from '../../img/7.jpg';
import foto8 from '../../img/8.jpg';
import foto9 from '../../img/9.jpg';
import foto10 from '../../img/10.jpg';
import foto11 from '../../img/11.jpg';


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
                <div className="konflik-git">
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
                            <li>Si B melakukan push ke branch fitur 1, lakukan fetch</li>
                            <h6>git push -f origin &lt;nama branch	&gt;</h6>
                            <li>Si B melakukan request merge</li>
                            <li>Si A menggabungkan source code</li>
                        </ol>
                    </p>
                    <h3>Merge Branch menggunakan github</h3>
                    <iframe
                        style={frameYoutube}
                        src="https://www.youtube.com/embed/1ftwQ1kft9o"></iframe>
                    <h3>Pull / Merge Source Git antara Github dan file lokal dengan Vs Code</h3>
                    <iframe
                        style={frameYoutube}
                        src="https://www.youtube.com/embed/qaJ_OTMvpO0"></iframe>
                    <p>Jika tidak ada konflik.
                    Jika terdapat konflik dan menggunakan text editor Vs Code.
                        Vs Code akan menandai file yang berubah dan file yang existing dan mana yang akan dipilih yang akan digunakan (merge)</p>
                    <h3>Langlah - langkah merge Repository menggunakan Github</h3>
                    <p>1. Selesai melakukan clone</p>
                    <img src={foto1} style={gambar} />
                    <p>2. Membuat branch baru dibawah branch main</p>
                    <img src={foto2} style={gambar} />
                    <p>3. Melakukan push ke branch baru</p>
                    <img src={foto3} style={gambar} />
                    <p>4. Di github muncul commit dengan branch baru</p>
                    <img src={foto4} style={gambar} />
                    <p>5. Detail perubahan (Compare) </p>
                    <img src={foto5} style={gambar} />
                    <p>6. Create Pull Request</p>
                    <img src={foto6} style={gambar} />
                    <p>7. Merge Pull Request</p>
                    <img src={foto7} style={gambar} />
                    <p>8. Confirm Merge</p>
                    <img src={foto8} style={gambar} />
                    <p>9. Delete branch (opsional)</p>
                    <img src={foto9} style={gambar} />
                    <p>10. Melakukan pull repo yang telah di merge</p>
                    <img src={foto10} style={gambar} />
                    <p>11. Jika terdapat konflik pada file, kita dapat memilih untuk
                        <p>menggunakan file existing sekarang (Accept Current Change) atau</p>
                        <p>menggunakan file yang telah diubah (Accept Incoming Change) atau </p>
                        <p>menggunakan kedua-duanya (Accept Both Change) atau</p>
                        <p>bisa membandingkan kembali <a href="https://code.visualstudio.com/docs/editor/versioncontrol#_merge-conflicts">(Compare Change)</a>
                        </p></p>
                    <img src={foto11} style={gambar} />
                </div>
            </div>
        )
    }
}
export default KonflikGit