const url = process.env.VUE_APP_NASA_API_URL;
const apiKey = process.env.VUE_APP_NASA_API_KEY;

export const getSpaceImages = async ({startDate, endDate}) => {
	const nasaUrl = `${url}${apiKey}&start_date=${startDate}&end_date=${endDate}`;
	const response = await fetch(nasaUrl);
	const nasaImages = await response.json();
	if (!response.ok) {
		return response;
    }
	return nasaImages;
};