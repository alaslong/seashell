import axios from "axios";
import { useQuery } from "react-query";
import StudioCard from "../components/StudioCard";

const StudiosPage = () => {

    const retrieveStudios = async () => {
        const response = await axios.get(
          "https://seashell-server.fly.dev/api/studio"
        );
        return response.data;
      };
    
      const {
        data: studios,
        isLoading,
        error,
      } = useQuery("studiosData", retrieveStudios);
    
      if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>;
      }
      if (error) {
        return <div>Error</div>;
      }
    
      console.log(studios);

    return (

        <div className="flex flex-wrap w-full justify-center">

            {studios.map(studio => {
                return (
                    <StudioCard studio={studio} />
                )
            })}


        </div>
    );
}

export default StudiosPage;