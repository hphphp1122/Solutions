import React, { Component } from 'react';
import Data1 from "./add1.json"

class Example2 extends Component {
	render() {
    
    return (
      
            
					Data1.data.map((data) => {
						return (
								<div>
									<div>
											
                      <h3><b>{data.id}. </b>{data.first_name} {data.last_name}</h3>
                      <img src={data.avatar}></img>
                      <p>{data.email}</p>
									</div>
								</div>
						);
					})
			
        );
    }
} 
export default Example2;

