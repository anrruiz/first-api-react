import { useState } from "react"


export const NCategory = ({onNCategory}) => {

	const [Nvalue, setNvalue] = useState('');

	const onNChange =({target})=>{
		setNvalue( target.value);
	}

	const onSend =(event)=>{
		event.preventDefault();
		const initvalue=Nvalue.trim();
		if(initvalue.length<1) return;
		//valueSave(categories =>[Nvalue, ...categories]);
		onNCategory(initvalue);
		setNvalue('');
	}

    return (
		<form onSubmit={onSend}>
    		<input
				type="text"
				placeholder="buscar gifs"
				value={ Nvalue }
				onChange={onNChange}
			/>
		</form>
    )
}
