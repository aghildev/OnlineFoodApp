import { RESTO_MENU_URL } from "../../components/constants";
import { useEffect, useState } from "react"

const useRestoMenu = (id) => {
    const [restoData, setRestoData] = useState(null)
   

    const getMenuDetails = async () => {
        const data = await fetch(RESTO_MENU_URL + id);
        const jsonData = await data.json();
        setRestoData(jsonData.data)
    }

    useEffect(()=>{
        getMenuDetails()
    },[])

  return restoData
}

export default useRestoMenu