import fetcher from "@/libs/fetcher";
import useSwr from 'swr';

const useBillboard = () => {
	const { data, error, isLoading } = useSwr("/api/random", fetcher, {
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

export default useBillboard;
