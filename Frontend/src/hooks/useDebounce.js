// Custom hook : tự tạo hook riêng dựa trên hook đã có của react

import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value); // 1. initial state lấy từ value truyền từ ngoài vào

    // 3
    useEffect(() => {
        // 3.1 Delay khoảng tgian để set lại value của setDebounceValue từ ngoài truyền vào, và delay lại 1 khoảng = khoảng delay truyền từ ngoài vào
        const handler = setTimeout(() => setDebounceValue(value), delay);

        // 3.2 clean up func: gọi khi deps thay đổi hoặc Component bị unmount
        return () => clearTimeout(handler)
    }, [value]);

    return debounceValue; // 2.
}

export default useDebounce;
