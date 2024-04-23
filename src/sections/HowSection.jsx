const HowSection = () => {
  return (
    <div className="flex flex-col text-center min-h-[65%] text-lg text-primary">
      <h2 className="text-3xl mb-24">
        We <span className="text-accent">connect</span> wellness providers with businesses organising events for
        their employees.
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
