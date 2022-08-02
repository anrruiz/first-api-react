import { useState } from "react"
import { GifGrid } from "./Components/GifGrid";
import { NCategory } from "./Components/NCategory";


export const GifExpertApp = () => {
	
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory= (newCategory)=>{
		if(categories.includes(newCategory)) return
		//el push no serviria ya que es una mutacion de estado y teact no lo permite
		setCategories([newCategory, ...categories])
	}
	// AddCategory();
	console.log(categories);
	return (
		<>
    		<h1>GifExpertApp</h1>
			<NCategory 
				// valueSave={ setCategories}
				onNCategory={onAddCategory}
			/>

			{
				categories.map(( category )=>(
						<GifGrid key={category} 
						category={category}/>
					)
				)
			}

			
    	</>
		
	)

}
