
import { Metadata } from "next";
type Props = { params: { productid: string } };

export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Puct ${params.productid}`);
        }, 100);
    });
    return {
        title: `Product ${params.productid}`
    };
}



export default function Productid({params} : Props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,fontSize: '20px'}}>
            <h1>PRODUCT PAGE {params.productid}</h1>
        </div>
    );
}