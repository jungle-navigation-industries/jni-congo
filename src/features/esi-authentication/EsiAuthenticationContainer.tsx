import { useSearchParams } from "react-router-dom";
import apiClient from "../../data/Client";
import {
  defaultEsiAuthorizeCharacterResponse,
  esiAuthorizeCharacterRequest,
} from "../../data/DefaultApiTypes";
import { useFetchData } from "../../data/UseFetchData";
import EsiAuthenticationResult from "./EsiAuthenticationResult";

const EsiAuthenticationContainer: React.FC = () => {
  const [searchParameters] = useSearchParams();
  const code = searchParameters.get("code") ?? "";

  const result = useFetchData(
    defaultEsiAuthorizeCharacterResponse(),
    async () =>
      await apiClient().api.authorizeCharacter(
        esiAuthorizeCharacterRequest(code)
      )
  );

  return (
    <EsiAuthenticationResult
      characterData={result.response.authorizedCharacterData}
    />
  );
};

export default EsiAuthenticationContainer;
