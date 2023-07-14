export default function UserPage({params}: any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Profile Pages</h1>
            <h2>Manish Kumar: {params.id}</h2>
        </div>
    )
}