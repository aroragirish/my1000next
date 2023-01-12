import axios from "axios";
import router from "next/router";
import { store } from "../store/store";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_URL,
});

client.interceptors.request.use(function (config) {

  const loader = document.getElementById('spinner');
  const mainWrapper = document.getElementById('main-wrapper');

  mainWrapper.classList.add('less-opaque');

  loader.classList.add('lds-hourglass');

  return config
}, function (error) {
  return Promise.reject(error);
});

client.interceptors.response.use((res) => {
  const loader = document.getElementById('spinner');
  const mainWrapper = document.getElementById('main-wrapper');

  mainWrapper.classList.remove('less-opaque');
  loader.classList.remove('lds-hourglass');
  if (res.status === 401) {
    store.dispatch({
      type: 'LOGOUT'
    });
    router.push('/get-started')
  }
  return res;
});

const select = (state) => {
  return state?.user?.tokens?.access?.token
}

const listener = () => {
  let token = select(store.getState())
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

store.subscribe(listener)

const baseService = (options) => {
  const newOptions = {
    ...options,
    headers: {
      ...options.headers,
    },
  };
  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    const loader = document.getElementById('spinner');
    const mainWrapper = document.getElementById('main-wrapper');
  
    mainWrapper.classList.remove('less-opaque');
    loader.classList.remove('lds-hourglass');
    if (error.response.status === 401) {
      store.dispatch({
        type: 'LOGOUT'
      });
      router.push('/get-started')
    }
    return Promise.reject(error);
  };

  return client(newOptions).then(onSuccess).catch(onError);
};

export default baseService;
