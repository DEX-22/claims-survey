import axios from 'axios';


const amgApi = axios.create({
    baseURL: import.meta.env.BACKEND_AMG_URL,
    headers: { 
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NzcxODIwNjIsIm5iZiI6MTY3NzE4MjA2MiwianRpIjoid1JqeElFU01icm1UZWJ6USIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.MDUWYsPnyXMLpjdwa03CvxSLttaI1WA3ZjMgeg660sc', 
      'Content-Type': 'application/json'
      },
    
  });

  // amgApi.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("accessToken");
  //     if (token) {
  //       config.headers["Authorization"] = `Bearer ${token}`; // for Laravel or Spring boot <application></application>
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  export default amgApi;