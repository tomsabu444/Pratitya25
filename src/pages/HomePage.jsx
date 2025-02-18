import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
import Loading from "../components/Loading";

const H1 = lazy(() => import("../components/Homeone"));
const H2 = lazy(() => import("../components/Homesec"));
const H3 = lazy(() => import("../components/HomeEnd"));

const LazyWrapper = ({ children, fallback = null, threshold = 0.25 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return <div ref={ref}>{inView ? children : fallback}</div>;
};

const HomePage = () => {
  return (
    <div>
      {/* H1 is assumed to be in the initial viewport */}
      <Suspense fallback={<Loading />}>
        <H1 />
      </Suspense>

      {/* H2 is loaded only when scrolled into view */}
      <LazyWrapper fallback={<div style={{ height: "500px" }}><Loading /></div>}>
        <Suspense fallback={<Loading />}>
          <H2 />
        </Suspense>
      </LazyWrapper>

      {/* H3 is loaded only when scrolled into view */}
      <LazyWrapper fallback={<div style={{ height: "500px" }}><Loading /></div>}>
        <Suspense fallback={<Loading />}>
          <H3 />
        </Suspense>
      </LazyWrapper>
    </div>
  );
};

export default HomePage;