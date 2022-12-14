
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    const{Images,isLoading}=useFetchGifs(category);


    // const [Images, setImages] = useState([]);

    // const getImg=async()=>{
    //     const newImages=await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImg();
    // }, [])
    


    return (
        <>
            <h3>{category}</h3>
            
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    Images.map((image)=>(
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
