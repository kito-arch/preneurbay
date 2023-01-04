
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section6.module.css'
import Image from 'next/image'

export default function Section6(props){
    return(
        <PaddingLayout>
            <div className = {styles.container}>
                <div style = {{margin: 'auto', width: 'fit-content'}}>
                    <Image src = './landing_sec6_title.png' width = '362' height = '38' />
                </div>

                <p style = {{marginTop: '71px'}} className = {styles.yellowBox}>PreneurBay’s Terminal</p>

                <div className = 'd-flex align-items-start justify-content-between'>
                    <div style = {{width: '396px'}}>
                        <p className = {styles.title}>Connecting Cities Internationally</p>
                    </div>
                    <div style = {{width: '666px'}}>
                        <p className = {styles.text}>PreneurBay’s Terminal is a concept of connecting two individual cities together using our platform individuals from Bay’s Terminal can get to know more about each other leading to economic,educational and cultural growth between international cities.</p>
                    </div>
                </div>

                <div style = {{marginTop: '50px'}} className = 'd-flex align-items-start justify-content-between'>
                    <div style = {{width: '728px'}}>
                        <ul className = {styles.points}>
                            <li>Our USP Is Connecting International Entrepreneurs and Professional Travelers with Local Entrepreneurs Community</li>
                            <li>Co-working space allows you to engage and build opportunities with co-workers and the international community</li>
                            <li>We are trying to build strong network of RnD to lead innovation creating bridge between corporates leaders and educational institutes</li>
                            <li>Our Modern Living Room Allows you to stay in peace on business travel</li>
                            <li>Our App Allows a more in-depth networking effect to explore more about our members and helps you connect with more people internationally</li>
                            <li>Gig on travel: it allows you to do gigs jobs posted by our members bringing your travel cost down</li>
                            <li>Attend Local and In House Events</li>
                            <li>Last but not least we know it costs you much in the early stage of business so we make our bay affordable to you as much as we can so we can leave good memories in your early preneurs life.</li>
                        </ul>
                    </div>
                    <div>
                        <Image src = './landing_sec6_img.png' width = '400' height = '570'/>
                    </div>
                </div>
            </div>
        </PaddingLayout>
    )
}