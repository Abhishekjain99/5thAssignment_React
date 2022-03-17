import Print from './printData';
const Demo = (props) => {
    var list = [];
    list = props.arr;
    
    function sortByName()
    {
       list.sort((a, b) => (a.name > b.name) ? 1 : -1);
       <Print
            temp = {list}
       />
    }
    function sortByAge()
    { 
        list.sort((a, b) => (a.age > b.age) ? 1 : -1);
        <Print
            temp = {list}
       />
    }
    return ( 
        <div>
         
         <h3>  <input type="radio" name = "radio" onChange={sortByName}/> See Result Sort By Name</h3>
           <br />
           <h3> <input type="radio" name = "radio" onChange={sortByAge}/> See Result Sort By Age</h3>
           <br />
           <br />
           {
               <Print
               temp = {list}
               />
           }
        </div>
     );
}
export default Demo;