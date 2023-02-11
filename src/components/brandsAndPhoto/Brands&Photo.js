import React, { Suspense } from "react";
const Brands = React.lazy(() => import("../brands/Brands.js"));
const Photo = React.lazy(() => import("../photo/Photo.js"));

const BrandsPhoto = () => {
  return (
    <div className="bg-up">
      <Suspense fallback={<div>Loading...</div>}>
        <Photo />
        <Brands />
      </Suspense>
    </div>
  );
};

export default BrandsPhoto;
