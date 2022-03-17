const printData = (props) => {
    var list = props.temp;
    console.log(list);
    return ( 
        <div>
             <table style={{ border : "10px solid black" ,textAlign:"center", backgroundColor : "brown" , width : "1450px" , height : "20px"}}>
                    <tr >
                    <th >Name</th>
                    <th >Age</th>
                </tr>
            </table>
            {
                list.map( i => (
                    <div key = {i.age}>
                       <table style = {{border : "1", backgroundColor : "yellow" , width : "1450px" , height : "55px"}}>
                <tr>
                    <th style = {{textAlign:"left" , paddingLeft : "400px"}}>{i.name}</th>
                    <th style = {{textAlign:"right" , paddingRight : "300px"}}>{i.age}</th>
                </tr>
                        </table>
                     </div>
                ))
            }
        </div>
     );
}
export default printData;