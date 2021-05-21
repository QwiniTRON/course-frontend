export interface IApiRequest {
  
}

export interface IApiResponse<TData> {
  error?: any
  succeeded: boolean
  data: TData
}