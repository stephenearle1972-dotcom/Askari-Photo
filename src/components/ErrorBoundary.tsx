import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white p-8 font-sans">
          <h1 className="text-2xl text-red-500 mb-4">Something went wrong.</h1>
          <div className="bg-gray-900 p-4 rounded overflow-auto mb-4">
            <p className="font-mono text-sm text-red-300">{this.state.error?.toString()}</p>
          </div>
          <details className="bg-gray-900 p-4 rounded overflow-auto">
            <summary className="cursor-pointer mb-2 text-gray-400">Stack Trace</summary>
            <pre className="font-mono text-xs text-gray-500 whitespace-pre-wrap">
              {this.state.errorInfo?.componentStack}
            </pre>
          </details>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
