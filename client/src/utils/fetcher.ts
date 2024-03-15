const fetcher = async (path: string, init?: RequestInit) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${path}`, {
         ...(init || {}),
         headers: {
            ...(init?.headers || {}),
            'Content-Type': 'application/json'
         },
         mode: 'cors' 
    });
}

export default fetcher;