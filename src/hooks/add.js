export default function add(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
       throw new Error('Both integer arguments are required');
    }

    return a + b;
}

export function fetchUserPost() {
    return [{}, {}, {}]
}


export const increment = (value) => { 
    return value + 1;
}