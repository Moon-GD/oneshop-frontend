import '../css/common.css';
import Ad from '../components/Ad';
import AboutDescription from '../components/AboutDescription';

function About() {
  return (
    <section className="main">
      <AboutDescription></AboutDescription>
      <Ad></Ad>
    </section>
  );
}

export default About;