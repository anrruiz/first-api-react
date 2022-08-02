import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    
    const [Images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImg=async()=>{
        const newImages=await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImg();
    }, [])

    return{
        Images,
        isLoading,
    }
}
