const HowSection = () => {
  return (
    <div className="flex flex-col justify-center text-left h-screen text-lg text-primary" id="how">
      <h2 className="text-3xl my-20 text-center">
      We make it easy for businesses to <span className="text-accent">boost employee wellbeing</span> with curated experiences.
      </h2>

      <div className="flex justify-evenly">
        <p className="w-1/4">
          Providers showcase their <span className="text-accent">offerings</span> through our centralised platform, a
          departure from conventional methods dependent on word of mouth or
          social media.
        </p>

        <p className="w-1/4">
          We simplify the connection process, provide distinctive in person&nbsp;
          <span className="text-accent">experiences</span>, and actively contribute to dismantling traditional agency
          models in the wellness industry.
        </p>

        <p className="w-1/4">
          By addressing the pain points of both providers and businesses, we
          pave the way for more rewarding, <span className="text-accent">nourishing</span> collaborations.
        </p>
      </div>
    </div>
  );
};

export default HowSection;
