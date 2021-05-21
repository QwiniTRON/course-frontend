import { AxiosInstance, AxiosResponse, Canceler } from "axios";
import { appApi, CreateHttpClient } from "./ApiConfigure";
import { IApiResponse } from "./ApiModel";


export type ApiQueryFunction<TRequest = undefined, TResponse = undefined> = (request?: TRequest, api?: AxiosInstance) => Promise<AxiosResponse<IApiResponse<TResponse>>>;


export class ApiFetcher<TRequest = undefined, TResponse = undefined> {
  protected api: AxiosInstance;
  protected query: ApiQueryFunction<TRequest, TResponse>;

  public canceler: Canceler;

  public error: any = null;
  public apiError?: string;
  public loading: boolean = false;

  public data?: TResponse;
  public fetchPromise?: Promise<IApiResponse<TResponse>>;

  public isFetched: boolean = false;
  public success: boolean = false;
  public isCanceled: boolean = false;

  public authenticateToken: string;

  public response?: IApiResponse<TResponse>;
  public request?: TRequest;

  public onData?: (data: IApiResponse<TResponse>, fetcher?: ApiFetcher<TRequest, TResponse>) => any
  public onError?: (data: IApiResponse<TResponse>, fetcher?: ApiFetcher<TRequest, TResponse>) => any

  constructor(query: ApiQueryFunction<TRequest, TResponse>, authenticateToken: string = "") {
    this.query = query;

    this.authenticateToken = authenticateToken;

    const newAxios = CreateHttpClient(this.authenticateToken);
    this.api = newAxios.httpClient;
    this.canceler = newAxios.canceler;
  }

  reload() {
    this.error = undefined;
    this.apiError = undefined;
    this.loading = false;

    this.data = undefined;
    this.fetchPromise = undefined;

    this.isFetched = false;
    this.success = false;
    this.isCanceled = false;

    this.response = undefined;
    this.request = undefined;

    const newAxios = CreateHttpClient(this.authenticateToken);
    this.api = newAxios.httpClient;
    this.canceler = newAxios.canceler;
  }

  fetch(request: TRequest): Promise<IApiResponse<TResponse>> {
    this.fetchPromise = this.query(request, this.api).then((data) => data.data);

    this.request = request;

    this.fetchPromise.then(this.finishHandler.bind(this)).catch(this.errorHandler.bind(this));

    this.loading = true;

    return this.fetchPromise;
  }

  cancel() {
    this.canceler?.();

    this.loading = false;

    this.isFetched = false;
    this.isCanceled = true;
  }

  private finishHandler(data: IApiResponse<TResponse>) {
    this.loading = false;
    this.isFetched = true;
    this.success = true;

    this.response = data;

    if (data.succeeded == false) {
      this.success = false;
      this.apiError = data.error;
    }

    if (data.succeeded) {
      this.data = data.data;
    }

    this.onData?.(data, this);
  }

  private errorHandler(error: any) {
    this.loading = false;
    this.success = false;
    this.isFetched = true;

    this.error = error;

    this.onError?.(error, this);
  }
}