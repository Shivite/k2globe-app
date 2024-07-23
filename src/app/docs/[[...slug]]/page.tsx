export default function Docs({params}: {params:{slug:String[]}}){
   
    console.log("here", params);
     if(params.slug?.length === 1) {
        return <h2> {params?.slug[1]} data only</h2>
    } 
    if(params.slug?.length === 2) {
        return <h2> {params?.slug[1]} comes under {params.slug[2]}</h2>
    }
    if(params.slug?.length === 3) {
        return <h2> {params?.slug[1]} comes under {params.slug[2]} - comes under {params.slug[1]}</h2>
    }
    return <h2> not any</h2>
}