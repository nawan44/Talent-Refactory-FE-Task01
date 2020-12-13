import { render } from '@testing-library/react';
import React from 'react';
import './pages.css';
import { Container, Row, Col, Badge, NavLink, Button } from 'reactstrap';
import Rahmat from '../../img/rahmat.jpg'

const layoutCv = {
    backgroundColor: 'white',
    padding: '20px'
}
const row1 = {
    textAlign: 'right'
}
const rowLeft = {
    width: '50%',
    float: 'left',
    textAlign: 'left',
    margin: '10px 0 0 0'
}
const rowRight = {
    width: '50%',
    float: 'left',
    textALign: 'right',
    fontSize: '12px',
    margin: '10px 0 0 0'
}
const icon = {
    color: '#66E7C3',
    margin: ' 0 0 0 7px'
}
const profile = {
    width: '100%',
    float: 'left'
}

const cvProfile = {
    width: '30%',
    borderRadius: '50%',
    float: 'left'
}
const h2Profile = {
    width: '70%',
    float: 'left',
    fontWeight: 'bold',
    fontSize: '30px',
    padding: '0 0 0 20px',

}
const tagLine = {
    width: '100%',
    float: 'left',
    margin: '10px 0 0 0',
    textALign: 'right',
}
const rowRightP = {
    textALign: 'right',
    margin: '10px 0 0 0'
}
const title = {
    margin: '30px 0 0 0',
    fontWeight: 'bold',
    fontSize: '30px',
    textAlign: 'left'
}
const content = {
    width: '100%',
    height: 'auto',
    margin: '20px 0 20px 0',
    textAlign: 'left'
}
const contentTitle = {
    fontSize: '18px',
    fontWeight: 'bold'
}
const contentSubTitle = {
    fontSize: '14px',
    width: '100%',
    textAlign: 'left',
    color: 'black',
    float: 'left',
    margin: '5px 5px 0 0'
}
const contentDescLeft = {
    fontSize: '10px',
    float: 'left',
    width: '50%',
    fontStyle: 'italic',
    color: '#66E7C3',
    textAlign: 'left',
}
const contentDescRight = {
    fontSize: '10px',
    float: 'left',
    width: '50%',
    fontStyle: 'italic',
    color: '#66E7C3',
    textAlign: 'right'
}
const contentDescTitle = {
    fontSize: '12px',
    float: 'left',
    width: '100%',
    margin: '5px 0 0 0',
    color: '#66E7C3',
    textAlign: 'left'
}
const contentDescTitle2 = {
    fontSize: '12px',
    float: 'left',
    width: '100%',
    margin: '0 0 20px 15px',
    color: 'grey',
    textAlign: 'left'
}
const contentDesc = {
    fontSize: '12px',
    float: 'left',
    width: '100%',
    color: 'black',
    textAlign: 'left',
}

const badge = {
    backgroundColor: '#66E7C3',
    color: '#fff',
    fontSize: '14px',
    margin: '5px',
    float: 'left'
}
const btnDownload = {
    color: '#fff'
}
class Cv extends React.Component {
    render() {
        return (
            <div className="container">
                <Container style={layoutCv}>
                    <Row style={row1}>
                        <Col style={rowLeft}>
                            <div style={profile}>
                                <img src={Rahmat} style={cvProfile} />
                                <div style={h2Profile}>Rachmat Gunawan</div>
                            </div>
                            <div style={tagLine}>
                                <br />
                                <p>Learn new things for continuous improvement and share to have a social impact. </p>
                            </div>

                        </Col>
                        <Col style={rowRight}>
                            <div style={rowRightP}>rachmat.d.gunawan@gmail.com   <i style={icon} class="fa fa-envelope"></i></div>
                            <div style={rowRightP}>+6281298474102   <i style={icon} class="fa fa-phone-square"></i></div>
                            <div style={rowRightP}>Bekasi, Indonesia  <i style={icon} class='fas fa-map-marker-alt'></i></div>
                            <div style={rowRightP}>http://rachmatgunawan.com   <i style={icon} class="fa fa-globe"></i></div>
                            <div style={rowRightP}>https://linkedin.com/in/rachmat-gun   <i style={icon} class='fab fa-linkedin'></i></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={rowLeft}>
                            <div style={title}>EDUCATION</div>
                            <hr />
                            <div style={content}>
                                <div style={contentTitle}>Front End Engineer</div>
                                <div style={contentSubTitle}>Binar Academy - Bootcamp</div>
                                <div style={contentDescLeft}>02/2019 - 04/2019</div>
                                <div style={contentDescRight}>Binatro, Indonesia</div>
                            </div>
                            <div style={content}>
                                <div style={contentTitle}>Informatics</div>
                                <div style={contentSubTitle}>Universitas Mercubuana</div>
                                <div style={contentDescLeft}>02/2019 - 04/2019</div>
                                <div style={contentDescRight}>Jakarta, Indonesia</div>
                            </div>
                        </Col>
                        <Col style={rowRight}>
                            <div style={title}>SKILLS</div>
                            <hr />
                            <Badge style={badge}>HTML</Badge>
                            <Badge style={badge}>CSS</Badge>
                            <Badge style={badge}>Unity</Badge>
                            <Badge style={badge}>PostgreSql</Badge>
                            <Badge style={badge}>Git</Badge>
                            <Badge style={badge}>Adobe Photoshop</Badge>
                            <Badge style={badge}>Coreldraw</Badge>
                            <Badge style={badge}>Bootstrap</Badge>
                            <Badge style={badge}>Javascript (less than 1 year)</Badge>
                            <Badge style={badge}>ReactJS (less than 1 year)</Badge>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={rowLeft}>
                            <div style={title}>WORK EXPERIENCE</div>
                            <hr />
                            <div style={content}>
                                <div style={contentTitle}>Front End Engineer</div>
                                <div style={contentSubTitle}>Delameta Bilano</div>
                                <div style={contentDescLeft}>11/2020 - Now</div>
                                <div style={contentDescRight}>Jakarta, Indonesia</div>
                                <div style={contentDescTitle}>Achievements/Tasks</div>
                                <div style={contentDesc}>
                                    <ul>
                                        <li>ReactJs Developer</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={content}>
                                <div style={contentTitle}>Junior Engineer</div>
                                <div style={contentSubTitle}>Sibernetik Integradata</div>
                                <div style={contentDescLeft}>07/2020 - 11/2020</div>
                                <div style={contentDescRight}>Jakarta, Indonesia</div>
                                <div style={contentDescTitle}>Achievements/Tasks</div>
                                <div style={contentDesc}>
                                    <ul>
                                        <li>ReactJs Developer</li>
                                        <li>PostgreSql</li>
                                        <li>Technical Writer</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={content}>
                                <div style={contentTitle}>Staf Administration</div>
                                <div style={contentSubTitle}>Ministry of Land and Spatial Planning / National Land Agency</div>
                                <div style={contentDescLeft}>03/2016 - 03/2020</div>
                                <div style={contentDescRight}>Jakarta, Indonesia</div>
                                <div style={contentDescTitle}>Achievements/Tasks</div>
                                <div style={contentDesc}>
                                    <ul>
                                        <li>Financial Administration</li>
                                        <li>Financial Planning</li>
                                        <li>Archive</li>

                                    </ul>
                                </div>
                            </div>
                            <div style={content}>
                                <div style={contentTitle}>Operator Production</div>
                                <div style={contentSubTitle}>Mesin Isuzu Indonesia</div>
                                <div style={contentDescLeft}>02/2013 - 12/2015</div>
                                <div style={contentDescRight}>Bekasi, Indonesia</div>
                                <div style={contentDescTitle}>Achievements/Tasks</div>
                                <div style={contentDesc}>
                                    <ul>
                                        <li>Quality Circle</li>
                                        <li>Assembly Axle Part</li>
                                        <li>Total Productive Maintenance</li>
                                        <li>5R</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={content}>
                                <div style={contentTitle}>Operator Production</div>
                                <div style={contentSubTitle}>Astra Honda Motor</div>
                                <div style={contentDescLeft}>03/2011 - 12/2012, </div>
                                <div style={contentDescRight}>Bekasi, Indonesia</div>
                                <div style={contentDescTitle}>Achievements/Tasks</div>
                                <div style={contentDesc}>
                                    <ul>
                                        <li>Operate Die Cast Machine</li>
                                        <li>Repair Part</li>
                                        <li>Total Productive Maintenance</li>
                                        <li>5R</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={content}>
                                <div style={contentTitle}>Operator Production</div>
                                <div style={contentSubTitle}>Toyota Motor Manufacturing Indonesia</div>
                                <div style={contentDescLeft}>08/2008 - 08/2010,</div>
                                <div style={contentDescRight}>Karawang, Indonesia</div>
                                <div style={contentDescTitle}>Achievements/Tasks</div>
                                <div style={contentDesc}>
                                    <ul>
                                        <li>2nd Green Employee 2009</li>
                                        <li>Operate Press Machine</li>
                                        <li>Repair Part</li>
                                        <li>Total Productive Maintenance</li>
                                        <li>5R</li>
                                    </ul>
                                </div>

                            </div>
                        </Col>
                        <Col style={rowRight}>
                            <div style={title}>PERSONAL PROJECTS</div>
                            <hr />
                            <NavLink href="https://drive.google.com/drive/u/2/folders/1TiY3zi6lu46MXNzjdIbnyorc6NoUjp1_" style={contentSubTitle}>Augmented Reality Geographic Information System     <i class='fas fa-external-link-alt'></i> </NavLink>
                            <NavLink href="http://nawina2d.com/" style={contentSubTitle}>Game Adventure 2D     <i class='fas fa-external-link-alt'></i> </NavLink>
                            <NavLink href="http://rachmatgunawan.com/" style={contentSubTitle}>Personal Blog     <i class='fas fa-external-link-alt'></i> </NavLink>
                            <NavLink href="https://drive.google.com/drive/u/2/folders/1TiY3zi6lu46MXNzjdIbnyorc6NoUjp1_" style={contentSubTitle}>Garage Life - Show Case Batch 3 Binar Academy BSD 2019     <i class='fas fa-external-link-alt'></i> </NavLink>
                            <NavLink href="https://github.com/nawan44/Java-Graphic" style={contentSubTitle}>Java Graphic     <i class='fas fa-external-link-alt'></i> </NavLink>
                            <NavLink href="https://play.google.com/store/apps/details?id=com.contoh.rachgunawan" style={contentSubTitle}>Recycle view Android - Submission Dicoding Academy     <i class='fas fa-external-link-alt'></i> </NavLink>

                            <div style={title}>CERTIFICATES</div>
                            <hr />
                            <NavLink href="https://www.certiport.com/Portal/Pages/CredentialVerification.aspx" style={contentSubTitle}>Database Administration Fundamentals - Microsoft Technology Associate     <i class='fas fa-external-link-alt'></i> </NavLink>
                            <div style={contentDescTitle2}>Credential Verification : EoCo - XLRq</div>

                            <NavLink href="https://aspen.eccouncil.org/Verify" style={contentSubTitle}>Certified Secure Computer User v2 - EC Council     <i class='fas fa-external-link-alt'></i> </NavLink>
                            <div style={contentDescTitle2}>Credential Verification : ECC78814255628</div>

                            <NavLink href="#" style={contentSubTitle}>Newbie IpV6 - Hurricane Electric     <i class='fas fa-external-link-alt'></i> </NavLink>


                            <div style={title}>LANGUAGES</div>
                            <hr />
                            <div style={contentSubTitle}>English
                            <div style={contentDescTitle}>Limited Working Proficiency</div>
                            </div>

                            <div style={contentSubTitle}>Bahasa
                            <div style={contentDescTitle}>Full Professional Proficiency</div>
                            </div>
                            <div style={title}>INTERESTS</div>
                            <hr />
                            <Badge style={badge}>Reading</Badge>
                            <Badge style={badge}>Music</Badge>
                            <Badge style={badge}>Travelling</Badge>
                            <Badge style={badge}>Psychology</Badge>
                            <Badge style={badge}>Archeology</Badge>
                            <Badge style={badge}>Political</Badge>

                        </Col>

                    </Row>
                </Container>
                <Container>
                    <Button color="info" block>
                        <NavLink href="#" style={btnDownload}>
                            Download CV <i class="fa fa-download"></i>
                        </NavLink>
                    </Button>
                </Container>
            </div >
        )
    }
}
export default Cv