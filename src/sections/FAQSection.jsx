const FAQSection = () => {
  return (
    <div className="w-5/6 m-auto h-[95%] flex flex-col justify-center gap-3 text-primary" id="faq">
        <h2 className="text-center text-primary text-3xl my-20 font-semibold">Have more questions?</h2>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-sm font-medium">
          Do you also provide equipment?
        </div>
        <div className="collapse-content text-sm">
          <p>All equipment required for participation is organised by us.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-sm font-medium">
          Can you facilitate a place to practise?
        </div>
        <div className="collapse-content text-sm">
          <p>
            On our website, you can find a list of partner studios and their
            capacity. You can select which one better fits your location
            requirements and time slot. The teacher chosen by you will meet your
            staff directly there. After completing the booking on our website,
            you will receive all the studio instructions. You can decide if
            you’d like to share that with your team or let us be the face of the
            activity and answer any questions they might have.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-sm font-medium">
          We have the space for a workshop at our office, what do we need
          to do?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Feel free to only book the activity on our page. Our wellness
            professional will be there 20 min ahead of the time scheduled to
            prepare the place. Through our platform chat, you can communicate
            with them to arrange anything else you might need prior to the
            event.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-sm font-medium">
          What if one of our staff members has an injury?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Make the teacher aware of all injuries before the workshop. We advise
            everyone to listen to what their bodies are telling them and move
            accordingly. Just like going to the office to work, please do not
            come to the workshop if you have a cold or flu, as you
            risk harm to yourself and others around you. Stay home and rest.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-sm font-medium">
          How do I book a workshop?
        </div>
        <div className="collapse-content text-sm">
          <p>
            On our page, you can see all the wellness professionals signed up
            with us, what they offer, and their availability. If you’re in
            between providers, feel free to message and ask any questions that
            might help you decide what is best for your team. Use the platform's
            messaging system to discuss details, negotiate terms, and ensure
            alignment on the event requirements
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-sm font-medium">
          How do I know my booking with a Seashell provider is confirmed?
        </div>
        <div className="collapse-content text-sm">
          <p>
            The provider you chose will receive a notification and confirm the
            booking. From there on, you can exchange messages with them on our
            platform for any further details.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-sm font-medium">
          How does the payment work?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Our platform facilitates secure and transparent payment processing.
            Businesses make payments through the platform, and providers receive
            their earnings directly, minus the platform's modest fee.
          </p>
        </div>
      </div>

    </div>
  );
};

export default FAQSection;
