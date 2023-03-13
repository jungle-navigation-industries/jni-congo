import { Title, TitleSize } from "../../common";
import apiClient from "../../data/Client";
import { defaultGetAuthenticationUrlResponse } from "../../data/DefaultApiTypes";
import { useFetchData } from "../../data/UseFetchData";

const Home: React.FC = () => {
  const result = useFetchData(
    defaultGetAuthenticationUrlResponse(),
    apiClient().api.getAuthenticationUrl
  );

  return (
    <div>
      <Title titleSize={TitleSize.Two} title="Home" />
      <a href={result.response.url}>
        <button>Log In</button>
      </a>
    </div>
  );
};

export default Home;
