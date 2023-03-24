import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useImages = () => {
	const { data, error, isLoading } = useSwr("/api/images", fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});
	return {
		data,
		error,
		isLoading,
	};
};

export default useImages;
