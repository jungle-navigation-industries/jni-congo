import { AxiosResponse } from "axios";
import { DependencyList, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ValueDefaults from "../utilities/value-defaults/ValueDefaults";
import IUseDataFetch from "./IUseDataFetch";
import { StatusCodes } from "./StatusCodes";

export function useFetchData<TResponse>(
  defaultResponse: TResponse,
  fetchData: () => Promise<AxiosResponse<TResponse>>,
  deps: DependencyList = []
): IUseDataFetch<TResponse> {
  const navigate = useNavigate();
  const [response, setResponse] = useState<TResponse>(defaultResponse);
  const [isLoading, setIsLoading] = useState<boolean>(ValueDefaults.boolean);
  const [errorMessage, setErrorMessage] = useState<string>(
    ValueDefaults.string
  );

  useEffect(() => {
    const executeFetch = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const result = await fetchData();

        switch (result.status) {
          case StatusCodes.Ok:
          case StatusCodes.Created: {
            setResponse(result.data);
            return;
          }
          case StatusCodes.BadRequest: {
            setErrorMessage(result.statusText);
          }
        }
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        navigate("/error");
      }
    };

    void executeFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, navigate]);

  return {
    response,
    isLoading,
    errorMessage,
  };
}
