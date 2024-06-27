
import { unSubscribe } from '../../services/user.service'
import { useNavigate } from 'react-router-dom';


function UnregisterForm() {
    
    const navigate = useNavigate()
    
    async function handleUnregister(){

    await unSubscribe()
    navigate("/")
}
   
  
  return (
    <>
     
        <button type="button" id='btnUnRegister' onClick={handleUnregister}>Unsubscribe</button>
      
    </>
  );
}
  


export default UnregisterForm