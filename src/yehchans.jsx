import React from 'react';
import { Link } from 'react-router-dom';
import YehchansImg from './yeh-img.jpg'

function Yehchans() {
    const articleStyle = {
        color: 'white',
        textAlign: 'left',
        marginTop: '70px', // Add top margin to create space below the navbar
      };
  return (
    <div>
    <img src={YehchansImg} alt="Article 1 Image" style={{ width: '100%', maxWidth: '200px', height: 'auto', alignItems: screenLeft }} />
      <h1 style={articleStyle}>Winning in the Job Market</h1>
      <h5 style={articleStyle}>By Yehchan Yoo</h5>
      <p style={articleStyle}>
      
      <p style={articleStyle}>In an era where even the tech giants are tightening their belts, finding a job in the tech sector has become a bit like trying to win a lottery where the odds are ever in the house's favor. With behemoths like Meta and Google shedding staff like autumn leaves, it's clear that even the most illustrious empires can suffer a sudden chill.
      The modern job hunt now feels like a futuristic version of 'Survivor,' where candidates vie for a golden ticket to employment while dodging metaphorical arrows shot by ruthless corporate overlords. Resumes and cover letters, once an opportunity for personal flair, now face the discerning gaze of digital gatekeepers. These algorithms, reminiscent of HAL 9000 with a caffeine addiction, scan for misplaced commas with the precision of a forensic linguist.</p>
      <p style={articleStyle}>Picture this: You pour your heart and soul into a cover letter, crafting a narrative that screams, "Hire me, I'm your future superstar!" Only to realize that your potential reader might just be a computer program with a knack for ones and zeros. As your eloquent prose gets dissected by lines of code, you can't help but wonder if a well-placed GIF would have made a difference.
        And then there's the not-so-small matter of major tech companies parting ways with their employees in droves. Meta, once the shining star of social media, is trimming its sails, and Google, the behemoth of search engines, is tightening its belt. It's as if the Silicon Valley elite have discovered minimalism in the most inconvenient way possible.
        In this grim landscape, networking has morphed into a Hunger Games of endorsements and recommendations on platforms like LinkedIn. We scramble for digital breadcrumbs, hoping they'll lead us to the elusive feast of gainful employment.</p>
      <p style={articleStyle}>But take heart, for all is not lost. As AI takes the reins in the hiring process, perhaps it's time we fight fire with fire. Let the machines craft our resumes and cover letters, for they speak the language of algorithms better than any human ever could. Imagine a digital masterpiece that seamlessly integrates keywords and phrases, designed to wow even the most discerning of virtual recruiters.
        Of course, this raises the question of whether we'll soon find ourselves competing with AI-generated job applications. Will we battle against meticulously crafted algorithms with impeccable grammar and a knack for SEO? It's a brave new world, folks, and we must be prepared to face the rise of the machines on all fronts.</p>
      <p style={articleStyle}>In conclusion, the modern tech job market is a battlefield, and we are the warriors armed with keyboards and an unyielding determination to survive. As we navigate these turbulent waters, let's remember that humor, creativity, and human connection still hold sway in this digital dystopia. Even the mightiest AI can't replicate the spark of ingenuity that sets us apart as individuals.
        So, dear job seekers, chin up and type on. The perfect job may be just a well-placed algorithm away. Who knows, maybe one day we'll look back on this era and chuckle about the time when our fiercest competition had a motherboard for a brain. Until then, may the code be ever in your favor.</p>
     </p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default Yehchans;
