import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const ProductCardSkeleton = () => {
    return (
        <div className=" container px-5 pt-20 pb-14 mx-auto flex flex-wrap -m-4">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
        </div>
    );
};

export default ProductCardSkeleton;
