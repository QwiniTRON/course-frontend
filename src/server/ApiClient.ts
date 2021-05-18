import { ky } from "ky/distribution/types/ky";
import { appApi } from "./ApiConfigure";


export type QueryFunction<TRequest = undefined, TResponse = undefined> = (api: ky, request: TRequest) => Promise<TResponse>;


export class ApiFetcher<TRequest = undefined, TResponse = undefined> {
  protected api: ky;
  protected query: QueryFunction<TRequest, TResponse>;

  protected abortController: AbortController;

  public error: any = null;
  public loading: boolean = false;

  public data?: TResponse;
  public fetchPromise?: Promise<TResponse>;

  public isFetched: boolean = false;
  public success: boolean = false;
  public isCanceled: boolean = false;

  public onData?: (data: TResponse) => any
  public onError?: (data: TResponse) => any

  constructor(query: QueryFunction<TRequest, TResponse>) {
    this.query = query;
    this.abortController = new AbortController();
    this.api = appApi.extend({
      signal: this.abortController.signal
    });
  }

  reload() {
    this.error = null;
    this.loading = false;

    this.data = undefined;
    this.fetchPromise = undefined;

    this.isFetched = false;
    this.success = false;
    this.isCanceled = false;

    this.abortController = new AbortController();
    this.api = appApi.extend({
      signal: this.abortController.signal
    });
  }

  fetch(request: TRequest): Promise<TResponse> {
    this.fetchPromise = this.query(this.api, request);

    this.fetchPromise.then(this.finishHandler.bind(this)).catch(this.errorHandler.bind(this));

    this.loading = true;

    return this.fetchPromise;
  }

  cancel() {
    this.abortController.abort();

    this.loading = false;

    this.isFetched = false;
    this.isCanceled = true;
  }

  private finishHandler(data: TResponse) {
    this.loading = false;
    this.success = true;
    this.isFetched = true;

    this.data = data;

    this.onData?.(data);
  }

  private errorHandler(error: any) {
    this.loading = false;
    this.success = false;
    this.isFetched = true;

    this.error = error;

    this.onError?.(error);
  }
}