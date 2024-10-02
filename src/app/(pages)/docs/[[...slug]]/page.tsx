export default function Docs({params} : {params: {slug: string[]}}) {
    if (params.slug?.length === 3) {
            return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,fontSize: '20px'}}>
                VIEWING DOCUMENTS FOR {params.slug[0]} FEATURING {params.slug[1]} FUNCTIONALITY {params.slug[2]}
            </div>
    )}
    if (params.slug?.length === 2) {
            return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,fontSize: '20px'}}>
                VIEWING DOCUMENTS FOR {params.slug[0]} FEATURING {params.slug[1]}
            </div>
    )}
    if (params.slug?.length === 1) {
            return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,fontSize: '20px'}}>
                VIEWING DOCUMENTS FOR {params.slug[0]}
            </div>
    )}
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,fontSize: '20px'}}>
            VIEWING DOCUMENTS
        </div>
    );  
}