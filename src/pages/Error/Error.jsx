import { useRouteError, Link } from 'react-router-dom';

import SectionContent from '../../components/Content/SectionContent';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <SectionContent title={title}>
      <p>{message}</p>
      <Link to="/">Go Home</Link>
    </SectionContent>
  );
}
