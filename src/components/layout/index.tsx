import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import React from "react";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine" />}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
