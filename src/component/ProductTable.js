import React from 'react'

export default function ProductTable({items}) {
    
    return (

       <div className="tab">
          
         <table>
         <tr style={{ textAlign: "center" }}>
                    <th>model</th>
                    <th>price</th>
                    <th>category</th>
                </tr>
         {
                    items.map(phones => (
                        <tr  className="per1">
                            <td> {phones.model} </td>
                            <td> {phones.price} </td>
                            <td> {phones.category} </td>
                        </tr>
                    ))
                }
         </table>
            
       </div>
)
}