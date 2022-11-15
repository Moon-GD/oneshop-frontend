import '../css/common.css';
import Ad from './Ad';
import AboutDescription from './AboutDescription';
import UserInfo from './UserInfo';

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