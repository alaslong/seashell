const StudioCard = ({ studio }) => {
  return (
    <div
      key={studio.id}
      className="card bordered p-0 m-4 w-64 flex-col justify-center items-center"
    >
      <figure>
        <img src={studio.picture} alt="Studio image" className="w-64 h-64 object-cover"/>
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title">{studio.name}</h2>
        <p>{studio.location.neighbourhood}</p>
      </div>
    </div>
  );
};

export default StudioCard;
