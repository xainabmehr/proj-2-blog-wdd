import React from 'react';
import { Link } from 'react-router-dom';
import sarasImage from './saras-img.png';

function Saras() {
    const articleStyle = {
        color: 'white',
        textAlign: 'left',
        marginTop: '70px', // Add top margin to create space below the navbar
      };
      
  return (
    <div> 
      <img src={sarasImage} alt="Article 1 Image" style={{ width: '100%', maxWidth: '200px', height: 'auto', alignItems: screenLeft }} />
      <h1 style={articleStyle}>How to be an Alpha Male at UC Berkeley</h1>
      <h5 style={articleStyle}>By Sara Tetsu</h5>
      <p style={articleStyle}>
      <h3 style={articleStyle}>The Alpha mindset: some daily affirmation:</h3>
      - Being an alpha all comes down to a mindset: the mindset that others are stupid, and you do not respect them. Remember this mantra the next time you write a polite greeting in an email, and let it empower you to hit that backspace key.
      - “Power trip” is betas’ way of criticizing you for your position as an alpha. Do not worry, their “criticism” is just masked jealously.
      - Make others lives as hard as possible. This is best done by getting on the course staff for a class as an undergrad, especially one that involves judging others work and handing out verdicts. People will hate you, but they will respect you. And again, their hate is just jealousy.
      <h3 style={articleStyle}>Get rid of your Beta clothes.</h3>
      - The alpha look is important because it allows alphas to notice other alphas. If you aren’t wearing running shoes, a heather grey sweatshirt from the internship you did last summer, and black jeans, you are not an alpha. Smell like soap? Go for a run and stink yourself up. Alphas do not care about the well being of others.
      <h3 style={articleStyle}>Assert dominance on EdStem </h3>
      - When exam threads get posted, make sure you ask a question about a question on the most recent practice MT (current year -1) but also, make sure you ask a question about an exam from three years ago. Non-anonymity is a must. This is how you make sure everyone knows you are ahead of the game.
      <h3 style={articleStyle}>Pick an Alpha major</h3>
      - If you’re not sure if your major is Alpha, I hate to be the bearer of bad news, but it’s not. And you’re not. If your major is alpha, you’ll know it is. Not knowing is a very beta thing.
      <h3 style={articleStyle}>Make appearances in Alpha classes</h3>
      - Doesn’t matter if you’re in them or not. Sit in the back, looming. Make sure the looming is visible. Do not be early, but do not be late. Be exactly on time. Clear your throat often.
      Ask to borrow a pencil. Specifically a number 2 pencil (number 1 pencils are awful, and very beta). Then throughout the duration of the class, use your pocket knife to sharpen it. Clear your throat. New paragraph.
      <h3 style={articleStyle}>use your ears LESS and your mouth MORE</h3>
      - If you are listening, you aren’t talking. Letting other people have the floor is like letting them spit on your grave. Do NOT let other’s have a turn.
      - Remember that your opinion is right, no matter how little you feel like you know about a subject.
      <h3 style={articleStyle}>Treat others like the betas that they are.</h3>
      - Do not apologize, especially when you are in the wrong. Deny it, and continue to deflect blame.
      - Make excuses for yourself. Hold everyone to a ridiculous standard.
      - Expect others to read your mind. Remember, its always better to under communicate than over communicate.
      </p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default Saras;
