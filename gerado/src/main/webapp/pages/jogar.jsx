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
        <div><input type="checkbox" id="head">{{ head }}</input type="checkbox"><span id="user.nome">{{ user.nome }}</span><span id="opponent">{{ opponent }}</span><img src="user.picture" id="user.picture">{{ user.picture }}</img src="user.picture"><img src="img2" id="img2">{{ img2 }}</img src="img2"><Head id="Head">{{ Head }}</Head>
	
	<button onClick="opponet">opponet</button>
	
	
	<header path="" />
	</div>
      );
    }
  }

}