import React, { Component } from 'react';
import Data from "./add.json"

class first extends Component {
	render() {
    
    return (
      
            
					Data.data.map((data) => {
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
export default first;

