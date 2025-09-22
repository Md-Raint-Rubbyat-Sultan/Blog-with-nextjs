import Loading from "@/components/ui/Loading";
import React from "react";

type Props = {};

const LoadingBlogs: React.FC<Props> = () => {
  return (
    <div className="py-24">
      <Loading />
    </div>
  );
};

export default LoadingBlogs;
