export default function Productid({params} : {params: {productid: string}}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,fontSize: '20px'}}>
            <h1>PRODUCT PAGE {params.productid}</h1>
        </div>
    );
}