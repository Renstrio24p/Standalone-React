const ReactApp = React.lazy(()=>import('./components/react'))

export default function Start(){

    return (
        <div>
            <ReactApp />
            {/* You can start coding this file */}
        </div>
    )

}
