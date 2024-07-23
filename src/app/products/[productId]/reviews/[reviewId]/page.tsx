import { notFound } from "next/navigation"
export default function ReviewListing ({params}:{params:{productId:String, reviewId: String}}) {
    console.log("params---", params)
    if(parseInt(params?.reviewId) > 100){
        notFound();
    }
    return (
        <>
        
        product {params.productId} - review - {params.reviewId}
        </>
    )

}