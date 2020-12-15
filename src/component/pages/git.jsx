import { render } from '@testing-library/react';
import React from 'react';
import './pages.css';

const contentGit = {
    width: '100%',
    padding: '10px',
    textALign: 'left',
    // backgroundColor: 'green'
}
const contentDetail = {
    textALign: 'left',
    width: '100%',
    backgroundColor: 'red'

}

class Git extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Git & Github</h1>
                <div style={contentGit}>
                    <h2>Pengertian Git dan Github</h2>
                    <dl className="definisi-git">
                        <dt>Git</dt>
                        <dd>Git adalah software untuk berkolaborasi dan berbagi antar programmer saat bekerja. Bisa digunakan sebagai versioning control untuk mencatat versi software yang akan dipublish berdasarkan perubahan file atau repository
                        </dd>
                        <dt>Github</dt>
                        <dd>Github adalah salah satu platform untuk menyimpan source code menggunakan teknologi git . Kini github lebih dikenal sebagai media sosial programmer</dd>
                    </dl>
                    <p>
                        Jadi Git adalah jenis teknologinya dan github adalah salah satu merknya. Selain Github ada Gitlab, BitBucket, dan lain - lain. Berikut tabel perbedaan dari Git dan Github
                    </p>
                    <h2>Perbedaan Git dan Github</h2>
                    <table className="table-git">
                        <tr>
                            <th>Git</th>
                            <th>Github</th>
                        </tr>
                        <tr>
                            <td><i class='fab fa-git'></i></td>
                            <td><i class='fab fa-github'></i></td>
                        </tr>
                        <tr>
                            <td>Dikelola oleh The Linux Foundation</td>
                            <td>Diakuisisi oleh Microsoft pada 2018</td>
                        </tr>
                        <tr>
                            <td>Open sourced licensed</td>
                            <td>Pilihan bagi pengguna gratis dan pengguna berbayar</td>
                        </tr>
                        <tr>
                            <td>Akses secara offline</td>
                            <td>Akses secara online</td>
                        </tr>
                        <tr>
                            <td>Tidak menggunakan fitur user management</td>
                            <td>Menggunakan user management</td>
                        </tr>
                    </table>
                </div>

            </div>
        )
    }
}
export default Git