import getLatestPosts from './services/api/get-latest-posts';

const fetchData = async () => {
  try {
    const data = await getLatestPosts();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
