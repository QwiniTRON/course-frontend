export interface IApiRequest {
  
}

export interface IApiResponse<TData> {
  succeeded: boolean
  data: TData
  errorMessage: string
}