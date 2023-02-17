import React from "react";

function useLocalStorage(itemName, initialValue) {
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const [item, setItem] = React.useState(initialValue);
	React.useEffect( () => {
		try {
			setTimeout(() => {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					// Si localStorageItem tiene contendido alguno
					parsedItem = JSON.parse(localStorageItem);
				}	
				setItem(parsedItem);
				setLoading(false);
			}, 100000);
		} catch (error) {
			setError(error);
		}
	}, []);
	const saveItem = (newItem) => {
		try {
			const stringfifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringfifiedItem);
			setItem(newItem);
		} catch (error) {
			setError(error);
		}
	};
	return {item, saveItem, loading, error};
}

export { useLocalStorage };