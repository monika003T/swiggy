import {useRouteError} from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!! Something went Wrong</h1>
            <h1>{err.status}: {err.statusText}:{err.data}</h1>
         
        </div>
    )
}
export default Error;