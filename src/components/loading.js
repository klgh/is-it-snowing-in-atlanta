import React from "react"

function loading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return <p>loading</p>
  }
}
export default loading
