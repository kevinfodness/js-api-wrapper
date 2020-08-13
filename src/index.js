import request from './services/api/request';

const fetchData = async () => {
  try {
    const data = await request('/wp/v2/route-does-not-exist', 'GET');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
