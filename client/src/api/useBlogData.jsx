import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBlogData = () => {
  const {
    data: blogs = [],
    isLoading: isLoaded,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(
        "https://blog-website-server-theta.vercel.app/blogs"
      );
      return res.data.data;
    },
  });

  return { blogs, isLoaded, refetch };
};

export default useBlogData;
