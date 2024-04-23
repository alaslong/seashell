import axios from "axios";
import { useQuery } from "react-query";
import WorkshopCard from "../components/WorkshopCard";

const WorkshopsSection = () => {

  const retrieveWorkshops = async () => {
    const response = await axios.get(
      "https://seashell-server.fly.dev/api/workshop"
    );
    return response.data;
  };

  const {
    data: workshops,
    isLoading,
    error,
  } = useQuery("workshopsData", retrieveWorkshops);

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-wrap w-full justify-center">
      {workshops.map((workshop) => {
        return (
          <WorkshopCard workshop={workshop} />
        );
      })}
    </div>
  );
};

export default WorkshopsSection;
