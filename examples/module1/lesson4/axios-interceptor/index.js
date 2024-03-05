import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.metadata = { startTime: new Date() };
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  const { url, metadata } = response.config;
  const finishTime = new Date();
  const duration = finishTime - metadata.startTime;

  console.log(`Request duration for ${url} was ${duration}ms`);
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
