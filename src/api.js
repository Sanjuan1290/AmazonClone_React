
export async function fetchProducts(){

    const res = await fetch('https://supersimplebackend.dev/products')
    const data = await res.json();
    return data
}