import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const withErrorBoundary = (WrappedComponent, componentName) => {
  return function WithErrorBoundary(props) {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};

export default withErrorBoundary; 