import React, { useRef, useState, useEffect} from "react";


const FirtClass = () =>{
    
    let [items, setItems] = useState([])
    let foodname= useRef(null)
    const btn1 = useRef(null)
    const btn2 = useRef(null)
    
    useEffect(() => {
        if (btn1.current && btn2.current) {
            btn1.current.style.display = 'none'; // Access the style property safely
            btn2.current.style.display = 'block'; 
        }
      }, []);
    let id =''
   
    const onCount = () =>{
        let obj={
            name: foodname.current.value
        }
        items =[...items, obj]  
        setItems(items)     
    }

    const deleteFood = (param) =>{
        let filter = items.filter((each, i) => each.name !== param.name)
        console.log(filter)
        setItems(filter)
    }

    const editFood = (data,i) =>{
        id = i
        btn1.current.style.display = 'block'
        btn2.current.style.display = 'none';
        foodname.current.value = data.name
    }
    const update = () =>{
        btn2.current.style.display = 'block';  
        btn1.current.style.display = 'none';
        let index = items.findIndex((obj, i) => i === id);
        if(index !==-1){
            items[index].name = foodname.current.value
            setItems([...items])
        }else{
           console.log("joshua")
        }
    }
    return(
        <div className="font">
            <div className="h-screen bg-gray-400  flex flex-wrap items-center justify-center">
               <div className="flex justify-center items-center">
                    <div className="">
                        <div className="font text-center">Names of Food </div>
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <div className="w-full">
                                <input className="block w-full app-input" ref={foodname} />              
                            </div>
                            <button  ref={btn2} className="btn-primary" onClick={onCount}>Add</button>
                            <div ref={btn1} id="btn1" >
                                <button className="btn-primary" onClick={update}>Update</button>
                            </div>
                        </div>
                        <div className="mt-7  h-60 overflow-y-auto px-2 py-1" >
                        {
                            items.map((item,i)=>(
                                <div key={i} className="bg-white md:p-3 p-3 mt-2 rounded-lg shadow-md shadow-gray-500 flex justify-between">
                                    <h2>{item.name}</h2>
                                    <div className="flex items-center gap-2">
                                        <button  onClick={()=>editFood(item, i)} className="bg-blue-200 hover:bg-blue-700 text-sm text-blue-600 rounded-sm p-1 hover:text-white font-bold h-7 w-7">
                                            <i className="fa fa-edit"></i>
                                        </button>
                                        <button onClick={()=>deleteFood(item)} className="bg-red-200 hover:bg-red-700 text-sm text-red-600  rounded-sm p-1 hover:text-white font-bold h-7 w-7">
                                        <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                       
                    </div>
                   
               </div>
            </div>
        </div>
    )
}

export default FirtClass