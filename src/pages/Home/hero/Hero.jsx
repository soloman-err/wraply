import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Hero.css';

const Hero = () => {
  return (
    <section className="border">
      <AwesomeSlider className="aws-btn">
        <div data-src="/drink-i.jpg" alt=""></div>
        <div data-src="/drink-ii.jpg" alt=""></div>
        <div data-src="/drink-iii.jpg" alt=""></div>
        <div data-src="/drink-iv.jpg" alt=""></div>
        <div data-src="/drink-v.jpg" alt=""></div>
      </AwesomeSlider>
    </section>
  );
};

export default Hero;
