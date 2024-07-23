export default function ReviewListing ({params}:{params:{productId:String, reviewId: String}}) {
    console.log("params---", params)
    return (
        <>
        product {params.productId} - review - {params.reviewId}
        </>
    )

}