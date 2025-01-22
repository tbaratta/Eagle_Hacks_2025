import ParticlesComponent from "@/components/ui/particlebackground";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  
  const navigate = useNavigate();

  const handleDiscordClick = () => {
    window.open("https://discord.gg/gqY7xYJAx2", "_blank");
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background Component */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center mb-40 w-full mt-28">
      <img
            src="/images/Check_Mark.png"
            alt="About Us"
            className="object-cover w-72 h-72"
          />
       
       <div className="text-center">
  <h1 className="text-white text-4xl font-bold sm:ml-14">
    Thank you for applying to Eagle Hacks 2025!
  </h1>
  <p className="text-light-1 mt-5 text-lg">
    You should receive a confirmation email from our team shortly
  </p>
  <p className="text-light-1 mt-5 text-lg">Join our Discord for updates!</p>

  {/* Add flexbox utilities to adjust button position */}
  <div className="flex justify-center mt-5">
      <button className="buttonDiscord" onClick={handleDiscordClick}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="40"
              height="40"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Discord</span>
      </button>
  </div>
</div>


 <button className="buttonV2 mt-10" onClick={() => navigate("/")}>
  Home
  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button> 

      </div>
    </div>
  );
};

export default SuccessPage;
