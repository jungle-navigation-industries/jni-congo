export default interface IUseDataFetch<TResponse> {
  response: TResponse;
  isLoading: boolean;
  errorMessage: string;
}
