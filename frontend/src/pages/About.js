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