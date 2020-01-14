const url = process.env.VUE_APP_NASA_API_URL;
const apiKey = process.env.VUE_APP_NASA_API_KEY;

export const getSpaceImages = async ({startDate, endDate}) => {
    console.log('this is the things: ', url, apiKey);
    console.log(startDate, endDate);
    // console.log(Date.now());
    
    
    
	// const { id } = userInfo;
	// const url = `{}`;
	// const response = await fetch(url);
	// const catalogs = response.json();
	// if (!response.ok) {
	// 	return response;
	// }
	// return catalogs;
};