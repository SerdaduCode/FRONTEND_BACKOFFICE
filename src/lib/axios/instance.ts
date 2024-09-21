const onRequest = (req: any) => {
  return req;
};

const onRequestError = (err: any) => {
  return Promise.reject(err);
};

const onResponse = (res:any) => {
  return res;
};

const onResponseError = (err:any) => {
  return Promise.reject(err);
};

export const setupInterceptor = (instance:any) => {
  instance.interceptors.request.use(
    onRequest,
    onRequestError,
  );
  instance.interceptors.response.use(
    onResponse,
    onResponseError,
  );
  return instance;
};