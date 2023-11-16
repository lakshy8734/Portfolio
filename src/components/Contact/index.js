





import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
// import emailjs from '@emailjs/browser'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetter'
import { MapContainer, Marker, TileLayer,Popup } from 'react-leaflet'
import './index.scss'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const Form = useRef ()

    useEffect (() => {
         setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
        }, [])




        const sendEmail = (e) => {
            e.preventDefault();
          
            emailjs.sendForm('service_gtel73z', 'template_vj1yr2h', Form.current, '1J9q1xveqxtXcxCfs')
              .then((result) => {
                console.log(result.text);
                alert('Message successfully sent!');

                Form.current.reset();
                
              }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again');
              });
          };
    
    return (
        <>
    <div className="container contact-page">
    <div className='text-zone'>
    <h1>
    <AnimatedLetters
     letterClass={letterClass}    
     strArray={['C', 'o', 'n','t','a','c','t',' ','m','e']}
     idx={15}   
    />
    </h1>
    <p>
    I'm very ambitious fullstack developer  looking for a role in
        established IT company with the opportunity  because i'm still berozbar unemployed is any recruitor read this kindly contact with me to work with the latest
        technologies on challenging and diverse projects.
    </p>
    <div className="contact-form">
<form ref={Form} onSubmit={sendEmail}>
<dt>
<li className="half">
<input placeholder="Name"  type="text" name="name" required />
</li>
<li className="half">
<input
placeholder="Email"
type="email"
name="email"
required
/>
</li>
<li>
<input placeholder="Subject" type="text" name="subject" required />
</li>
<li>
<textarea  placeholder="message" name="message" required></textarea>
</li>
<li>
<input type="submit" className='flat-button' value="SEND" />
</li>
</dt>
</form>

</div>
</div>

<div className="info-map">
          Lakshy Gupta,
          <br />
          India,
          <br />
         Rudrapur <br />
         UttaraKhand <br />
          <br />
          <span>lakshygupta123@gmail.com</span>
        </div>
        <div  className='map-wrap'>
        <MapContainer center={[28.975028, 79.406306]} zoom={13}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[28.975028, 79.406306]}>
              <Popup>Lakshy lives here, come over for a cup of tea :</Popup>
            </Marker>
          </MapContainer>

        </div>
</div>

<Loader type="pacman" />

    </>
    )

}


export default Contact



    
   
    