export default function Reviewid({params} : {params: {reviewid: string; productid: string}}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,fontSize: '20px'}}>
            <h1>REVIEW {params.reviewid} OF PRODUCT {params.productid}</h1>
        </div>
    );
}