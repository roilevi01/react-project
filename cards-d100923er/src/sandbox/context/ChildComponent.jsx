import React from "react";

import GrandChildComponent from "./GrandChlidComponent";

export default function ChildComponent() {
  return (
    <div>
      Parent component
      <GrandChildComponent />
    </div>
  );
}
