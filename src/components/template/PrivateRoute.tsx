import { Helmet } from "react-helmet-async";
import React, { Suspense } from "react";

export const PrivateRoute = ({ title, children }: { title: string; children: any }) => {
  // TODO: Handle check token expired here

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default React.memo(PrivateRoute);
