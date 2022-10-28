import React from 'react';
import ReactDOM from 'react-dom';

class perfil extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {info : new Character(), rank : ""};		
	}

	
	
	render() {  
      return (
        <div><{{attribute.Name}} id="Head">{{ Head }}</{{attribute.Name}}><img src={{attribute.Name}} id="user.picture">{{ user.picture }}</img src={{attribute.Name}}><span id="info.nome">{{ info.nome }}</span><span id="info.vitorias">{{ info.vitorias }}</span><span id="info.vitorias">{{ info.vitorias }}</span><span id="rank">{{ rank }}</span><table id="table">{{ table }}</table>
	<header path="" />
	</div>
      );
    }
  }

}