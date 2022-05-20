import {useState} from "react";
import Card from './Card'

function Cards(){
    const [items, setItems]=useState([
        { id: 1, img: '/img/dino1.jpg', stat: "active" },
        { id: 2, img: '/img/dino2.jpg', stat: "" },
        { id: 3, img: '/img/dino3.jpg', stat: "correct" },
        { id: 4, img: '/img/dino4.jpg', stat: "" },
        { id: 5, img: '/img/dino5.jpg', stat: "wrong" },
        { id: 6, img: '/img/dino6.jpg', stat: "" },
        { id: 7, img: '/img/dino7.jpg', stat: "" },
        { id: 8, img: '/img/dino8.jpg', stat: "" },
        { id: 9, img: '/img/dino9.jpg', stat: "" },
        { id: 10, img: '/img/dino10.jpg', stat: "" },
        { id: 11, img: '/img/dino11.jpg', stat: "" },
        { id: 12, img: '/img/dino12.jpg', stat: "" },
        { id: 13, img: '/img/dino13.jpg', stat: "" },
        { id: 14, img: '/img/dino14.jpg', stat: "" },
        { id: 15, img: '/img/dino15.jpg', stat: "" },
        { id: 16, img: '/img/dino16.jpg', stat: "" }
    ])
    const [prev,setPrev]=useState(-1)
    function check(current){
        if(items[current].id==items[prev].id){
            items[current].stat="correct"
            items[prev].stat="correct"
        }else{
            items[current].stat="wrong"
            items[prev].stat="wrong"
            setItems([...items])
            setTimeout(()=>{
                items[current].stat=""
                items[prev].stat=""
                setItems([...items])
                setPrev(-1)
            },1000)
        }
        //https://www.youtube.com/watch?v=qhOZoJPMg6w
    }

    function handleClick(id){
        if(prev==-1){
            setPrev(id)
        }else{
            check(id)
        }
        // items[id].stat= "active"
        // setItems([...items])
        //alert(id)
    }
    return (
        <div className='container'>
            {items.map((item,index) =>(
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            )
                )}
        </div>
    )
}
export default Cards;
