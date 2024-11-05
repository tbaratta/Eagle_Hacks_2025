import ParticlesComponent from 'src/components/ui/particlebackground';
import { Button } from 'src/components/ui/button';
import Loader from '@/components/ui/Loader';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RootLayout = () => {
  const navigate = useNavigate();
  const isLoading = false;

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[200vh]">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      {/* Centered container for the logo and text */}
      <div className="flex flex-col items-center text-center sm:w-[420px] z-10 pt-5">
        <img
          src="/images/EagleHacksLogo2024.png"
          alt="EagleHacks 2024 logo"
          style={{ width: '420px', height: '300px', marginTop: '5px' }}
        />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Welcome to EagleHacks 2025!</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2 whitespace-nowrap">
          Hosted by CSSEC (Computer Science and Software Engineering Club)
        </p>
        <div className="flex space-x-4 mt-4">
          <Link to="https://discord.gg/J8jYHvqU" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </Link>
          <Link to="https://www.instagram.com/fgcu_cssec/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
          <Link to="https://www.linkedin.com/groups/12286562/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
        </div>

        {/* Submit Button with routing to /sign-up */}
        <Button
          type="button"
          className="shad-button_primary mt-8 px-8 py-4 text-lg"
          onClick={() => navigate('/sign-up')}
        >
          {isLoading ? (
            <div className="flex-center gap-2">
              <Loader /> Loading...
            </div>
          ) : "Sign Up Here"}
        </Button>

        {/* Icon and message for "Scroll for more" */}
        <div className="mt-12 flex items-center">
          <FontAwesomeIcon icon={faAnglesDown} fade size="2x" />
          <span className="ml-2 text-sm -mt-1">Scroll for more</span>
        </div>
        <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center w-full px-6 py-20 z-10">
          <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        </div>
      </div>
      </div>
      <div className="h-[150vh]" /> 
    </div>
  );
};

export default RootLayout;


/*

<div className="h-[150vh]" /> 
*/
