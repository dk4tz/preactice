// domain.com/news/article-1
// domain.com/news/article-2
// domain.com/news/article-3

import { useRouter } from 'next/router';

const DetailsPage = () => {
  const router = useRouter();

  console.log(router.query.articleId);

  // send a request to the backendAPI
  // to fetch the news item with articleId

  return <h1>Welcome to the Details Page</h1>;
};

export default DetailsPage;
