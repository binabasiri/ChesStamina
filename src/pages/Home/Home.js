import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Dumbbell, Brain, Users, Trophy } from 'lucide-react';
import './Home.scss';
import YouTube from 'react-youtube';

export default function ChesstaminaLanding() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: <Brain className="icon" />,
      title: 'Strategic Thinking',
      description: 'Enhance your chess skills and mental acuity',
    },
    {
      icon: <Dumbbell className="icon" />,
      title: 'Physical Fitness',
      description: 'Improve your physical health while playing',
    },
    {
      icon: <Users className="icon" />,
      title: 'Social Interaction',
      description: 'Connect with others in a unique gaming experience',
    },
    {
      icon: <Trophy className="icon" />,
      title: 'Competitive Play',
      description: 'Participate in tournaments and climb the leaderboard',
    },
  ];

  return (
    <div className="chess-fit">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Chesstamina: Where Mind Meets Motion
          </motion.h1>
          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the ultimate fusion of chess and fitness. Challenge your
            brain and body in this game.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="/calculator" className="button button--primary">
              Get Started <ChevronRight className="button__icon" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="features__title">Game Features</h2>
          <div className="features__grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-card__icon">{feature.icon}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="how-to-play">
        <h2 className="how-to-play__title">How to Play</h2>
        <div className="how-to-play__content">
          <motion.div
            className="how-to-play__media"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <YouTube videoId="zX-Yw0LPlXc" />
          </motion.div>
          <div className="how-to-play__steps">
            <motion.ol
              className="steps-list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <li>Set up the chessboard and fitness stations</li>
              <li>Make a chess move</li>
              <li>Complete the corresponding physical challenge</li>
              <li>Alternate turns with your opponent</li>
              <li>Win by checkmate or fitness superiority</li>
            </motion.ol>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Company Info */}
            <div className="footer__section">
              <h3 className="footer__title">Chesstamina</h3>
              <p className="footer__description">
                Please take a moment and play chesstamina with your friends.
              </p>
            </div>

            {/* Contributors */}
            <div className="footer__section">
              <h3 className="footer__title">Contributors</h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="https://www.linkedin.com/in/brianbulcke/">
                    <img
                      src="/brian.jpg"
                      alt="John Doe"
                      className="footer__avatar"
                    />
                    <div className="footer__contributor-info">
                      <span className="footer__name">Brian Bulcke</span>
                      <span className="footer__role">GamePlay designer</span>
                    </div>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="https://www.linkedin.com/in/bina-basiri/">
                    <img
                      src="/bina.jpg"
                      alt="Jane Smith"
                      className="footer__avatar"
                    />
                    <div className="footer__contributor-info">
                      <span className="footer__name">Bina Basiri</span>
                      <span className="footer__role">Lead Developer</span>
                    </div>
                  </a>
                </li>
                <li className="footer__list-item">
                  <img
                    src="/paya.jpg"
                    alt="Mike Johnson"
                    className="footer__avatar"
                  />
                  <div className="footer__contributor-info">
                    <span className="footer__name">Paya Sadeghi</span>
                    <span className="footer__role">Marketing Lead</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="footer__section">
              <h3 className="footer__title">Contact Us</h3>
              <form className="footer__form">
                <div className="footer__form-group">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="footer__input"
                    required
                  />
                </div>
                <div className="footer__form-group">
                  <textarea
                    placeholder="Your message"
                    className="footer__textarea"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="button button--primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="modal">
          <div className="modal__content">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=zX-Yw0LPlXc"
              title="Chesstamina Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="button button--primary button--full"
              onClick={() => setIsVideoPlaying(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
