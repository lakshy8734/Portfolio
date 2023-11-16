import './index.scss';
import LogoTitle from '../../assets/images/Vanilla-1s-280px.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetter';
import Logo from './Logo';
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'k', 's', 'h', 'y', 'g', 'u', 'p', 't', 'a']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
            <div className=" container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br />
                        <span className={`${letterClass} _13`}>i</span>
                        <span className={`${letterClass} _14`}>'m </span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Blockchain Developer / Tech Enthusiasts </h2>
                    <Link to="/contact" className='flat-button'> CONTACT ME </Link>
                    <a href="https://drive.google.com/file/d/1SsioibMdYCga-tASSujPXJ2TkEtaNedW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flat-button">
                        DOWNLOAD RESUME
                    </a>

                </div>
                <Logo />
            </div>
            < Loader type="pacman" />
        </>

    );
}


export default Home