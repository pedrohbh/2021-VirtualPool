import React from 'react';
import ReactDOM from 'react-dom';

class jogar extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {opponent : "", setOpponent : "", user : new Usuario(), img2 : ""};		
	}

	
	opponet() 
	{
		//TODO To be implemented
	}
	
	
	render() {  
      return (
        <div><head ></head><span id="user.nome">{{ user.nome }}</span><span id="opponent">{{ opponent }}</span><img src="user.picture"></img><img src="img2"></img><Head ></Head>
	
	<button onClick="opponet">opponet</button>
	
	
	<header path="" />
	</div>
      );
    }
  }

}