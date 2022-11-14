import '../css/common.css';
import Ad from './Ad';
import AboutDescription from './AboutDescription';

function About() {
  return (
    <section className="main">
      <AboutDescription></AboutDescription>
      <Ad></Ad>
    </section>
  );
}

export default About;