 
import { useAuth } from "../hooks/useAuth";
import TabRoutes from './tab.routes';




export default function Routes(){
    const {} = useAuth();
    return(
        
            <TabRoutes />
       
    )
}