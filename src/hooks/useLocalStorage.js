import { useEffect, useState } from 'react';

export default function useLocalStorage(storageKey, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        // function to return initial state value
        try {
            const stringifiedValue = localStorage.getItem(storageKey);
            if (stringifiedValue) {
                return JSON.parse(stringifiedValue);
            }
            return initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            if (!storedValue) return;
            localStorage.setItem(storageKey, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [storageKey, storedValue]);

    return [storedValue, setStoredValue];
}