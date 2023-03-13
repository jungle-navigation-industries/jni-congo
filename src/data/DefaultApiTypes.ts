import ValueDefaults from "../utilities/value-defaults/ValueDefaults";
import {
  EsiAuthorizeCharacterRequest,
  EsiAuthorizeCharacterResponse,
  GetAuthenticationUrlResponse,
} from "./Api";

export function esiAuthorizeCharacterRequest(
  code: string
): EsiAuthorizeCharacterRequest {
  return {
    code: code,
  };
}

export function defaultEsiAuthorizeCharacterResponse(): EsiAuthorizeCharacterResponse {
  return {
    authorizedCharacterData: {},
  };
}

export function defaultGetAuthenticationUrlResponse(): GetAuthenticationUrlResponse {
  return {
    url: ValueDefaults.string,
  };
}
