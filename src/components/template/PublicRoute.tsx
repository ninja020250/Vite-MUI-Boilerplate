import { Helmet } from "react-helmet-async";
import React, { Suspense } from "react";

export const PublicRoute = ({ title, children }: { title: string; children: any }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default React.memo(PublicRoute);
