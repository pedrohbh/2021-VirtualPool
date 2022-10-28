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
        <div><input type="checkbox" id="head">{{ head }}</input type="checkbox"><span id="user.nome">{{ user.nome }}</span><span id="opponent">{{ opponent }}</span><img src={{attribute.Name}} id="user.picture">{{ user.picture }}</img src={{attribute.Name}}><img src={{attribute.Name}} id="img2">{{ img2 }}</img src={{attribute.Name}}><{{attribute.Name}} id="Head">{{ Head }}</{{attribute.Name}}>
	
	<button onClick="opponet">opponet</button>
	
	
	<header path="" />
	</div>
      );
    }
  }

}