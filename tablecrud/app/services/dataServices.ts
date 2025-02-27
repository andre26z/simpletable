'use client';

import { useState, useEffect } from 'react';

export interface User {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}

// Create a custom hook for fetching data
export const useDataService = () => {
	const [data, setData] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			// Update URL to point to json-server
			const response = await fetch('http://localhost:3001/users');

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}

			const result = await response.json();
			setData(result);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err : new Error('Unknown error occurred'));
			console.error('Error fetching data:', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refreshData = () => {
		fetchData();
	};

	return { data, loading, error, refreshData };
};
