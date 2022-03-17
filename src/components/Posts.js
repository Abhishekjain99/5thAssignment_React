import { useEffect , useState } from 'react';
import Demo from './Demo';
import axios from 'axios';
const Posts = () => {
    const [temp,setTemp] = useState([]);
    useEffect(()=>{
        getPosts()       
    }, [])
    const getPosts=()=>{
        axios.get('http://localhost:3000/data')
        .then(res => {
            setTemp(res.data);
        })
    }
    return(
        <div>
          {
            <Demo 
             arr = {temp}
            />
            
          }
        </div>
    )  
}
export default Posts;