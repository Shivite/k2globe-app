export default function ProductList({params}:{params:{productId:string}}){
    console.log(params)
    return (<>
test {params.productId}
    </>)
}