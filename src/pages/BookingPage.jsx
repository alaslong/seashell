const BookingPage = () => {
  return (
    <>
      <form className="h-screen w-5/6 m-auto flex flex-wrap justify-center items-center text-primary gap-3">
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3 mt-14">
          Full name
          <input type="text" className="grow" placeholder="John Smith" />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3 mt-14">
          Email address
          <input
            type="email"
            className="grow"
            placeholder="jsmith@company.com"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Phone number
          <input type="tel" className="grow" placeholder="+49 1510 000 1234" />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Company name
          <input type="text" className="grow" placeholder="Acme GmbH" />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Participants
          <input
            type="number"
            className="grow"
            placeholder="15"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Field
          <input type="" className="grow" placeholder="XXXXX" />
        </label>



        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Date
          <input type="date" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Time
          <input type="time" className="grow" />
        </label>

        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Date 2
          <input type="date" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Time 2
          <input type="time" className="grow" />
        </label>

        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Date 3
          <input type="date" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100 basis-1/3">
          Time 3
          <input type="time" className="grow" />
        </label>

        <label className="input input-bordered flex items-center gap-2 bg-slate-100 w-[68%]">
          Message
          <input type="text" className="grow" placeholder="Additional requests" />
        </label>



      </form>
    </>
  );
};

export default BookingPage;
