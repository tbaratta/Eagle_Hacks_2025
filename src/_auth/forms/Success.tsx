import ParticlesComponent from "@/components/ui/particlebackground";

const SuccessPage = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background Component */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center mb-40 w-full">
      <img
            src="/images/Check_Mark.png"
            alt="About Us"
            className="object-cover w-72 h-72"
          />
        <div className="text-center">
            <h1 className="text-white text-4xl font-bold sm:ml-14">Thank you for applying to Eagle Hacks 2025!</h1>
            <p className="text-light-1 mt-5 text-lg">You should receive a confirmation email from our team shortly</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
