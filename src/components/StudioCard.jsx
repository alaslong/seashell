const StudioCard = ({ studio }) => {
  return (
    <div
      key={studio.id}
      className="card bordered rounded-2xl m-4 p-0 w-64 flex-col justify-center items-center bg-slate-200"
    >
      <figure>
        <img src={studio.picture} alt="Studio image" className="w-64 h-64 object-cover grayscale"/>
      </figure>
      <div className="card-body flex flex-col w-full">
        <h3 className="card-title text-primary">{studio.name}</h3>
        <p className="text-primary">{studio.location.neighbourhood}</p>
      </div>
    </div>
  );
};

export default StudioCard;
