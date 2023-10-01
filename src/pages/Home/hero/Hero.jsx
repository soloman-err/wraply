import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Hero.css';

const Hero = () => {
  return (
    <section className="border">
      <AwesomeSlider className="aws-btn">
        <div data-src="/slide-i.jpg" alt=""></div>
        <div data-src="/slide-ii.jpg" alt=""></div>
        <div data-src="/slide-iii.jpg" alt=""></div>
        <div data-src="/slide-iv.jpg" alt=""></div>
        <div data-src="/slide-v.jpg" alt=""></div>
      </AwesomeSlider>
    </section>
  );
};

export default Hero;
