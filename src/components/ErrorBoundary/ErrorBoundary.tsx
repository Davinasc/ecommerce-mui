import { isRouteErrorResponse } from 'react-router-dom';

interface ErrorBoundaryProps {
  error: unknown;
}

export default function ErrorBoundary({ error }: ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>

        <p>{error.data}</p>
      </>
    );
  }

  if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }

  return <h1>Unknown Error</h1>;
}
