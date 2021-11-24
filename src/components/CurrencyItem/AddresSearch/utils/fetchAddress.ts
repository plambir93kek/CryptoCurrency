import axios from "axios"
import { useDispatch } from "react-redux";


export const fetchAddress = async(id:string, address:string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    const url = `https://api.blockchair.com/${id}/dashboards/address/${address}`;
    console.log(url)
    try{
      setLoading(true)
      const response = await axios.get(url)
      setLoading(false)
      const balance = response.data.data?.[`${address}`].address.balance;
      if(!balance || balance===0){
        return null
      } else {
        return balance;
      }
    }catch(e){
      setLoading(false)
      return null
    }
};

