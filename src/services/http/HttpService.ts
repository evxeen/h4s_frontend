import axios, { AxiosRequestConfig, AxiosResponse } from "axios"; // нужно будет переписать на axios

export const authenticatedPostRequest = <T>(
  address: string,
  body: object,
  headers: { [k: string]: string } = {}
): Promise<T> => {
  // const h = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }; //вернуть как будет авторизация
  return request("POST", address, JSON.stringify(body), { ...headers });
};

export const authenticatedGetRequest = <T>(
  address: string,
  body?: object,
  headers: { [k: string]: string } = {}
): Promise<T> => {
  // const h = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }; //вернуть как будет авторизация
  return request("GET", address, undefined, { ...headers });
};

export const authenticatedPutRequest = <T>(
  address: string,
  body: object,
  headers: { [k: string]: string } = {}
): Promise<T> => {
  // const h = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }; //вернуть как будет авторизация
  return request("PUT", address, JSON.stringify(body), { ...headers });
};

export const authenticatedPatchRequest = <T>(
  address: string,
  body: object,
  headers: { [k: string]: string } = {}
): Promise<T> => {
  // const h = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }; //вернуть как будет авторизация
  return request("PATCH", address, JSON.stringify(body), { ...headers });
};

const request = <T>(
  method: string,
  url: string,
  body?: BodyInit,
  headers: { [k: string]: string } = {}
): Promise<T> => {
  const payload: RequestInit = {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body,
  };

  return fetch(url, payload).then((response) => handleResponse(response));
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  const emptyResponse =
    response.body === null || response.headers.get('Content-Length') === '0';
    console.log(response)

  if (!response.ok) {

    if (response.status === 401) {
      //   await разлогин добавить
    }

    return emptyResponse
      ? Promise.reject(response.statusText)
      : response.json().then((json: any) => {
        throw new Error(json.message || json.error || response.statusText);
      });
  }

  return emptyResponse ? Promise.resolve({}) : response.json();
};
