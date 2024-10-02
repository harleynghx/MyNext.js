export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 >
                FEATURED PRODUCTS
            </h1>
            {children}
        </div>
    );
}
