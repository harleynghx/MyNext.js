export default function Reviews({ params } : {params: {productid: string}}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,fontSize: '20px'}}>
            REVIEW PAGE OF PRODUCT {params.productid}
        </div>
    );
}