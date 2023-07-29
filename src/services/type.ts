export interface ICustomSWRConfig {
  refreshInterval?: number;
  revalidateOnReconnect?: boolean;
  revalidateOnFocus?: boolean;
}
export interface ISwrApi {
  url: string;
  method?:
    | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'delete'
    | 'postForm'
    | 'undefined';
  body?: string;
}
