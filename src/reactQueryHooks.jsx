import axios from 'axios'
import { useQuery } from 'react-query'

   
const URL=`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
    

const fetchImages = async(searchTerm)=> {
    const response = await axios.get(`${URL}&query=${searchTerm}`);
    return response.data;
}

export const useFetchGallery = (searchTerm)=>{
    const {data, isLoading} = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: ()=>{
            return fetchImages(searchTerm);
        }
    })
    return {data, isLoading};
}