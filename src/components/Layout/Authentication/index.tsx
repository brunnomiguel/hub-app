import { Header } from "../../Header";
import { Fragment, ReactNode } from "react";

export function LayoutAuthentication({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
