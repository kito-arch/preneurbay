
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section6.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section6(props){
    return(
        <div id = "about" className = {styles.container}>
                <PaddingLayout>
                    <Fade duration = {2000} bottom>
                        <p className = {styles.title} style = {{margin: 'auto', width: 'fit-content'}}><mark>How do we work?</mark></p>
                    </Fade>

                    <Fade duration = {2000} left>
                        <p style = {{marginTop: '71px'}} className = {styles.yellowBox}>PreneurBay's Terminal</p>
                    </Fade>

                    
                    <div className = 'd-flex align-items-start justify-content-between'>
                        <Fade duration = {2000} left>
                            <div style = {{width: '396px'}}>
                                <p className = {styles.title}>Connecting Cities Internationally</p>
                            </div>
                        </Fade>
                        <Fade duration = {2000} right>
                            <div style = {{width: '666px'}}>
                                <p className = {styles.text}>PreneurBay's Terminal platform is a unique solution for bridging the gap between two international cities, promoting cross-cultural exchange and fostering growth in the areas of economics, education, and culture. By providing a platform for individuals to connect and explore, PreneurBay aims to facilitate positive relationships and promote mutual understanding between different communities. Within our co working and living spaces</p>
                            </div>
                        </Fade>
                    </div>
                </PaddingLayout>

                <div style = {{marginTop: '50px'}} className = 'd-flex align-items-start justify-content-between'>
                    <Fade duration = {2000} right>
                        <div className = {`${styles.imgCont} show_in_mobile`}>
                            <Image src = '/workinh.jpg' layout='fill'/>
                        </div>
                    </Fade>
                    <div style = {{width: '100%'}}>
                        <PaddingLayout >
                            <Fade duration = {2000} left>
                                <div style = {{width: '396px', marginBottom: '30px'}}>
                                    <p className = {styles.title}>Key Benefits</p>
                                </div>
                            </Fade>
                            <div style={{width: '100%'}} className = 'd-flex align-items-start justify-content-between'>
                                    <Fade duration = {2000} left>
                                        <div className = {styles.point} style = {{width: '728px'}}>
                                        <ul className = {styles.points}>
                                            <li>Our Unique Selling Point is Connecting International Entrepreneurs and Professional Travelers with Local Entrepreneur Communities.</li>
                                            <br/>
                                            <li>Our Co-working Spaces provide opportunities for engagement and building connections with co-workers and the international community.</li>
                                            <br/>
                                            <li>We strive to establish a robust Network of Research and Development to drive innovation and foster collaboration between corporate leaders and educational institutions.</li>
                                            <br/>
                                            <li>Our Modern Living Spaces offer a peaceful environment for business travel, allowing you to stay focused and refreshed.</li>
                                            <br/>
                                            <li>Our App provides in-depth networking opportunities to explore more about our members and connect with people internationally.</li>
                                            <br/>
                                            <li>The "Gig on Travel" feature allows you to take on jobs posted by members, reducing your travel costs.</li>
                                            <br/>
                                            <li>Attend Local and In-House Events to expand your network and knowledge.</li>
                                            <br/>
                                            <li>We understand the challenges of starting a business, that's why we make our services as affordable as possible to leave positive memories during your early entrepreneurial journey.</li>
                                            <br/>
                                            <li>We understand the financial challenges that come with starting a business, which is why we strive to make our services as affordable as possible for early stage entrepreneurs. Our goal is to provide a positive and memorable experience during this important phase of your entrepreneurial journey.</li>
                                        </ul>
                                        </div>
                                    </Fade>
                                    <Fade duration = {2000} right>
                                        <div className = {`${styles.imgCont} hide_in_mobile`}>
                                            <Image src = '/workinh.jpg' layout='fill'/>
                                        </div>
                                    </Fade>
                            </div>
                        </PaddingLayout>
                    </div>
                </div>
            </div>
    )
}