import { AuthorizedCharacterData } from "../../data/Api";

const EsiAuthenticationResult: React.FC<EsiAuthenticationResultProperties> = ({
  characterData,
}) => {
  return (
    <div>
      <p>Name: {characterData.characterName}</p>
      <p>Id: {characterData.characterID}</p>
      <p>Corporation Id: {characterData.corporationID}</p>
    </div>
  );
};

interface EsiAuthenticationResultProperties {
  characterData: AuthorizedCharacterData;
}

export default EsiAuthenticationResult;
