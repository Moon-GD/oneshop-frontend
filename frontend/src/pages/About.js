<<<<<<< HEAD
import '../css/common.css';
import Ad from '../components/Ad';
import AboutDescription from '../components/AboutDescription';
import UserInfo from '../components/UserInfo';

function About() {
  return (
    <section className="main">
      <UserInfo></UserInfo>
      <AboutDescription></AboutDescription>
      <Ad></Ad>
    </section>
  );
}

export default About;
=======
import '../css/common.css'
import Ad from './Ad'
import AboutDescription from '../components/AboutDescription'

function About() {
    return (
        <section className='main'>
            <AboutDescription></AboutDescription>
            <Ad></Ad>
        </section>
    )
}

export default About
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1
