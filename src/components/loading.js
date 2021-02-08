import React from "react";

function Loading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>loading</p>;
  };
}
export default Loading;
