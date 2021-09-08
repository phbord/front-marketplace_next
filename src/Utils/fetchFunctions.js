export const getListing = async(url) => {
		const config = {
			method: 'GET',
		};

		const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, config);
		const data = await response.json();

		if (data[0].title) {
      return data
		}
	};