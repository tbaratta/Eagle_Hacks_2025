import ParticlesComponent from 'src/components/ui/particlebackground';
//import { Button } from 'src/components/ui/button';
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
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 mt-auto">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesComponent />
      </div>

      {/* Centered container for the logo and text */}
      <div className="flex flex-col items-center text-center sm:w-[420px] z-10 pt-20 sm:pt-32 -mt-8">
        <img
          src="/images/EagleHacks25_Logo_V2.png"
          alt="EagleHacks 2025 logo"
          className="w-3/4 sm:w-full object-contain h-auto sm:-mt-24 lg:-mt-24 md:-mt-24"
        />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12 -mt-28">Welcome to Eagle Hacks 2025!</h2>
        <p className="text-light-1 small-medium md:base-regular mt-2 sm:whitespace-normal md:whitespace-nowrap max-w-full text-center md:ml-[-90px]">
  Hosted by CSSEC (Computer Science and Software Engineering Club)
</p>

        <p className="text-light-1 small-medium md:base-regular mt-2 whitespace-nowrap">
          Holmes Hall - Florida Gulf Coast University
        </p>
        <p className="text-light-1 small-medium md:base-regular mt-2 whitespace-nowrap">
          February 21st - 23rd, 2025
        </p>
        
        <div className="flex space-x-4 mt-4">

          <Link to="https://discord.gg/gqY7xYJAx2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} size="2x" style={{ color: '#0345a8' }} />
          </Link>
          <Link to="https://www.instagram.com/fgcu_cssec/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#007749' }} />
          </Link>
          <Link to="https://www.linkedin.com/groups/12286562/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0345a8' }} />
          </Link>
        </div>

        <button className="button mt-8 px-8 py-4 text-lg ml-2" 
                onClick={() => navigate('/sign-up')}>
          {isLoading ? (
            <div className="flex-center gap-2">
              <Loader /> Loading...
            </div>
          ) : (
            "Sign Up Here"
          )}
        </button>

        <div className="mt-12 flex items-center">
          <FontAwesomeIcon icon={faAnglesDown} fade size="2x" />
          <span className="ml-2 text-sm -mt-1">Scroll for more</span>
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col items-center justify-center w-full px-6 py-20 z-10">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start text-left w-full max-w-4xl mt-8 space-y-6 md:space-y-0 md:space-x-6">
          <img
            src="/images/about_us_v2.jpeg"
            alt="About Us"
            className="w-full md:w-2/3 max-w-[600px] h-[300px] object-cover"
          />
          <div className="flex flex-col justify-center md:w-1/2">
            <p className="text-base md:text-lg text-light-2 leading-normal md:leading-relaxed max-w-[800px]">
              Eagle Hacks is CSSEC's premier hackathon event hosted at FGCU. This is your chance
              to build innovative projects, collaborate with like-minded peers, and learn from industry experts.
            </p>
            <p className="text-base md:text-lg text-light-2 leading-relaxed mt-4">
              Whether you're a seasoned programmer or a curious beginner, there's something for everyone at EagleHacks. 
              Join us for a weekend of coding, networking, and fun!
            </p>
          </div>
        </div>
      </div>

      {/* Workshops and Events Section */}
      <div className="flex flex-col items-center justify-center w-full px-6 py-20 z-10">
        <h3 className="text-3xl font-semibold mb-4">Workshops & Events</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start text-left w-full max-w-4xl mt-8 space-y-6 md:space-y-0 md:space-x-6">
          {/* Image */}
          <img
            src="/images/workshops_and_events.jpeg"
            alt="Workshops and Events"
            className="w-full md:w-2/3 max-w-[600px] object-contain"
          />
          {/* Text */}
          <div className="flex flex-col justify-center md:w-1/2">
            <p className="text-base md:text-lg text-light-2 leading-normal md:leading-relaxed max-w-[800px]">
            <span style={{ display: 'block', marginBottom: '50px' }}>
            &#8226; <strong>Learn from Experts:</strong> Attend our workshops hosted by our sponsors to gain practical skills and insights into the latest technologies.
            </span>
            <span style={{ display: 'block', marginBottom: '50px' }}>
            &#8226; <strong>Expand Your Network:</strong> Connect with our sponsors and fellow participants to share ideas and grow your network.
            </span>
            <span style={{ display: 'block', marginBottom: '50px' }}>
            &#8226; <strong>Engage in Fun Activities:</strong> Take breaks with exciting mini-events, games, and more!
            </span>
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col items-center justify-center w-full px-6 py-20 z-10">
        <h3 className="text-3xl font-semibold mb-4">Projects</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start text-left w-full max-w-4xl mt-8 space-y-6 md:space-y-0 md:space-x-6">
          {/* Image */}
          <img
            src="/images/projects.jpeg"
            alt="Workshops and Events"
            className="w-full sm:-5/6 md:w-2/3 max-w-[600px] object-contain"
            style={{ width: 'auto', height: '550px', }} 
          />
  
          <div className="flex flex-col justify-center md:w-1/2">
            <p className="text-base md:text-lg text-light-2 leading-normal md:leading-relaxed max-w-[800px]">
            <span style={{ display: 'block', marginBottom: '50px' }}>
            &#8226; <strong>Unleash your creativity:</strong> Build projects using any technology you’re passionate about—web development, AI/ML, hardware, and more.
            </span>
            <span style={{ display: 'block', marginBottom: '50px' }}>
            &#8226; <strong>Showcase your skills:</strong> Demonstrate problem-solving abilities, technical expertise, and originality to leading companies.
            </span>
            <span style={{ display: 'block', marginBottom: '50px' }}>
            &#8226; <strong>Innovate and collaborate:</strong> Explore cutting-edge tech and work with like-minded individuals to craft something extraordinary.
            </span>
            <span style={{ display: 'block', marginBottom: '50px' }}>
            &#8226; <strong>Make an impact:</strong> Push your limits, sharpen skills, and stand out to industry leaders.
            </span>
            </p>
          </div>
        </div>
      </div>



<div className="flex flex-col items-center justify-center w-full px-6 py-20 z-10">
  <h3 className="text-3xl font-semibold mb-4">FAQs</h3>
  
  {/* Two groups side by side */}
  <div className="flex flex-col md:flex-row items-center md:items-start text-left w-full max-w-4xl mt-8 gap-4">
    
    {/* First Group of Dropdowns */}
    <div className="flex flex-col sm:ml-11 md:ml-11 lg:ml-11">
      <div className="dropdown">
        <input
          className="sr-only"
          name="state-dropdown-1"
          id="state-dropdown-1"
          type="checkbox"
        />
        <label
          aria-label="dropdown scrollbar"
          htmlFor="state-dropdown-1"
          className="trigger trigger-1"
        >
        </label>
        <ul className="list webkit-scrollbar" role="list" dir="auto">
          <li className="listitem" role="listitem">
            <article className="article">A hackathon is an event where like-minded people come together to collaborate, build, and innovate projects typically within a short time period. It's a space for coders, designers, and creators to turn ideas into reality, learn new skills, and network!</article>
          </li>
        </ul>
      </div>

      <div className="dropdown mt-5">
        <input
          className="sr-only"
          name="state-dropdown-2"
          id="state-dropdown-2"
          type="checkbox"
        />
        <label
          aria-label="dropdown scrollbar"
          htmlFor="state-dropdown-2"
          className="trigger trigger-2"
        >
        </label>
        <ul className="list webkit-scrollbar" role="list" dir="auto">
          <li className="listitem" role="listitem">
            <article className="article">FGCU students with a passion for technology and innovation! Whether you're a beginner or an experienced coder, all skill levels are welcome.</article>
          </li>
        </ul>
      </div>

      <div className="dropdown mt-5">
        <input
          className="sr-only"
          name="state-dropdown-3"
          id="state-dropdown-3"
          type="checkbox"
        />
        <label
          aria-label="dropdown scrollbar"
          htmlFor="state-dropdown-3"
          className="trigger trigger-3"
        >
        </label>
        <ul className="list webkit-scrollbar" role="list" dir="auto">
          <li className="listitem" role="listitem">
            <article className="article">Bring your laptop, charger, and any other tools you might need for coding. Most importantly, bring you enthusiasm and passion for coding!</article>
          </li>
        </ul>
      </div>
    </div>

    {/* Second Group of Dropdowns */}
    <div className="flex flex-col sm:ml-11 md:ml-36 lg:ml-44">
      <div className="dropdown">
        <input
          className="sr-only"
          name="state-dropdown-4"
          id="state-dropdown-4"
          type="checkbox"
        />
        <label
          aria-label="dropdown scrollbar"
          htmlFor="state-dropdown-4"
          className="trigger trigger-4"
        >
        </label>
        <ul className="list webkit-scrollbar" role="list" dir="auto">
          <li className="listitem" role="listitem">
            <article className="article">No, Eagle Hacks is completely free! Meals, swag, and resourcs are also provided at no cost.</article>
          </li>
        </ul>
      </div>

      <div className="dropdown mt-5">
        <input
          className="sr-only"
          name="state-dropdown-5"
          id="state-dropdown-5"
          type="checkbox"
        />
        <label
          aria-label="dropdown scrollbar"
          htmlFor="state-dropdown-5"
          className="trigger trigger-5"
        >
        </label>
        <ul className="list webkit-scrollbar" role="list" dir="auto">
          <li className="listitem" role="listitem">
            <article className="article">Absolutely! We welcome coders from all backgrounds and skill levels. We have introductory workshops for you to learn new skills, industry mentors to help, and other tools to help you build your project.  </article>
          </li>
        </ul>
      </div>

      <div className="dropdown mt-5">
        <input
          className="sr-only"
          name="state-dropdown-6"
          id="state-dropdown-6"
          type="checkbox"
        />
        <label
          aria-label="dropdown scrollbar"
          htmlFor="state-dropdown-6"
          className="trigger trigger-6"
        >
        </label>
        <ul className="list webkit-scrollbar" role="list" dir="auto">
          <li className="listitem" role="listitem">
            <article className="article">No, you don’t need a team to get started! Our hackathon is designed to encourage collaboration, with teams of four participants. If you don’t already have a team, don’t worry we’ll match you with one so you can connect and create together!</article>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Team Section */}
<div className="flex flex-col items-center justify-center w-full px-6 py-20 z-10">
  <h3 className="text-3xl font-semibold mb-4">Our Team</h3>
  <div className="w-full max-w-4xl mt-8 space-y-4">

    {/* Row 1 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">President: Jordan Robertson</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/jordan-ty-robertson/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
    </svg>
  </a>
</div>
    </div>

    {/* Row 2 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Vice President: David Ilgunas</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/dilgunas2003/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 3 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Secretary: Dennis Kerry</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/dennis-kerry/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 4 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Vice Secretary: Tommy Baratta</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/thomas-baratta-228244290/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 5 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Treasurer: Lentz Fortune</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/lentz-fortune/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 6 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Vice Treasurer: Martin Becerra</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/martin-becerra-jr/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 7 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Outreach Coordinator: Dominique Lucien</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/dominique-lucien/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>
    
    {/* Row 8 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Vice Outreach Coordinator: Wade Smith</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/wade-b-smith/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 9 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Marketing Coordinator: Allison Brown</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/allison-brown-16a8b6293/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 10 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Vice Marketing Coordinator: Vivian Procacci</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/vivian-procacci/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 11 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Faculty Advisor: Professor Paul Allen</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/paul-allen-235312b/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>

    {/* Row 12 */}
    <div className="flex items-center justify-center text-lg font-semibold">
      <span className="flex text-3xl">Student Advisor: Thalia Valle Chavez</span>

      <div className="card">

  <a href="https://www.linkedin.com/in/thaliavalle/" className="socialContainer containerThree" target="_blank" rel="noopener noreferrer">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  </div>
    </div>
      </div>

  );
};

export default RootLayout;
