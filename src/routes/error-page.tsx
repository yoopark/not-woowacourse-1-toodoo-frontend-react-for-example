import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

// 이게 최선일까? Type narrowing 깔끔하게 하는 방법 ...
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RouterError extends Error {}

/**
 * @See {@link https://github.com/remix-run/react-router/discussions/9628#discussioncomment-7796431}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isRouterError = (error: any): error is RouterError => {
  return 'message' in error;
};

const getErrorMessage = (error: unknown): string => {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  }

  if (isRouterError(error)) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return 'An unexpected error has occurred';
};

const ErrorPage = () => {
  const error = useRouteError();

  const errorMessage = getErrorMessage(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};

export { ErrorPage };
