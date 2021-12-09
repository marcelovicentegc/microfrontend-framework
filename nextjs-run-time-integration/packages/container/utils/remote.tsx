import React from "react";
import { useRemoteComponent } from "../hooks/useRemoteComponent";

export function createRemoteComponent() {
  const remoteComponent = (opts: RemoteComponentOptions) => {
    const { url, fallback = <div>Loading...</div> } = opts;

    const [loading, error, component] = useRemoteComponent(url);

    if (loading) {
      return fallback;
    }

    if (error || !component) {
      return <div>Failed to load component: {error?.message}</div>;
    }

    return <div dangerouslySetInnerHTML={{ __html: component }}></div>;
  };

  return remoteComponent;
}

export interface RemoteComponentOptions {
  url: string;
  fallback?: JSX.Element;
}
