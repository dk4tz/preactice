// domain.com/news
import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>Welcome to the News Page</h1>
      <ul>
        <li>
          <Link href='/news/next-is-cool'>Next is cool</Link>
        </li>
        <li>
          <Link href='/news/next-is-not-cool'>Next is not cool</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
