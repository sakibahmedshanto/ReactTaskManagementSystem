import React from 'react';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for does not exist or an unexpected error occurred.</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go back to Home</a>
    </div>
  );
};

export default ErrorPage;