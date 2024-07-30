export default function ProductList({ params }: { params: { productId: string } }) {
    return (<>
        <p> Product with Id {params?.productId}</p>
    </>)
}