import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useImage = (id?: string) => {
	const { data, error, isLoading } = useSWR(
		id ? `/api/images/${id}` : null,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);

	return {
		data,
		error,
		isLoading,
	};
};

export default useImage;
