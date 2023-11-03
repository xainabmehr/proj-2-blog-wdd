import React from 'react';
import { Link } from 'react-router-dom';
import XainabsImg from './xainabs.jpeg'

function Xainabs() {
    const articleStyle = {
        color: 'white',
        textAlign: 'left',
        marginTop: '70px', // Add top margin to create space below the navbar
      };
  return (
    <div>
    <img src={XainabsImg} alt="Article 1 Image" style={{ width: '100%', maxWidth: '200px', height: 'auto', alignItems: screenLeft }} />
      <h1 style={articleStyle}>Surviving Midterm Season at UC Berkeley</h1>
      <h5 style={articleStyle}>Xainab Mehr</h5>
      
      <p style={articleStyle}>Midterm season at the University of California, Berkeley, is like a rite of passage that transforms bright-eyed freshmen into sleep-deprived zombies roaming the haunted halls of Moffitt Library. But fear not, brave scholars, for I have uncovered the most cutting-edge mental health tips to ensure your survival during this perilous time. Remember, when the going gets tough, the tough get satirical!</p>
      <h7 style={articleStyle}> 1. Take a shower</h7>
      <p style={articleStyle}>Who knew that one of the most groundbreaking mental health tips for surviving midterms would be to wash your body? Yes, you heard it right. The ancient art of taking a shower can do wonders for your mental well-being. For those who've never ventured into the unknown realm of personal hygiene, try it out! Just be sure to set a timer for 15 minutes to maximize efficiency. Some people even claim that water is good for you.</p>
      <h7 style={articleStyle}>2. Give up your hopes and dreams</h7>
      <p style={articleStyle}>Why strive for excellence when you can comfortably slump into mediocrity? Let's be realistic; aiming for success during midterm season is like trying to find a unicorn on Sproul Plaza. Embrace the beautiful mediocrity of your existence, and you'll find that your stress levels drop drastically. Plus, you'll save money on anti-aging creams because you'll age faster when you give up your dreams. Bonus!</p>
      <h7 style={articleStyle}>3. Communicate with your inner coffee bean</h7>
      <p style={articleStyle}>Coffee: the elixir of life for Berkeley students. Forget water; java is the true essence of sustenance. Instead of reaching out to a therapist, try talking to your coffee beans. They're excellent listeners and always there to provide a much-needed caffeine boost to trick your brain into thinking you're productive. Just be prepared for the inevitable crash when your coffee beans inevitably ghost you.</p>
      <h7 style={articleStyle}>4. Become a procrastination guru (like me)</h7>
      <p style={articleStyle}>Procrastination is an art form, and during midterm season, you have the chance to become a true maestro. Just think, the longer you put off your responsibilities, the more time you have to discover other ways to avoid studying. From cleaning your room for the third time that day to counting the number of bricks on Doe Library, procrastination can be a valuable skill.</p>
      <h7 style={articleStyle}>5. Attend a yoga class</h7>
      <p style={articleStyle}> As a berkeley student, I need to add one quirky, exotic tip before I end this article of course! Berkeley is known for its holistic approach to well-being, so it's only fitting that we include some mindfulness practices in our tips. Attend a yoga class to achieve mental clarity and physical flexibility. Your downward dog may not help you solve that impossible calculus problem, but at least you'll have mastered the art of contorting your body while the rest of your life falls apart.</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default Xainabs;
