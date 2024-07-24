import { notFound } from "next/navigation"
export default function ReviewListing ({params}:{params:{productId:String, reviewId: String}}) {
    const reviewIdStr: string = (params?.reviewId as string | undefined) ?? '0';
const reviewId = parseInt(reviewIdStr, 10);
if (reviewId > 100) {
        notFound();
    }
    return (
        <>
        
        product {params.productId} - review - {params.reviewId}
        </>
    )

}