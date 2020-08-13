import request from './services/api/request';

request('/wp/v2/posts', 'GET')
  .then(console.log);
