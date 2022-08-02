export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/stickers/search?api_key=YAU330Zv2oV6reGDbA18C00AyLrGxUKm&q=${category}&limit=10`;
    const resp=await fetch(url);
    const {data= []}= await resp.json();

    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}
