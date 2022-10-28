import React from 'react';
import ReactDOM from 'react-dom';

class sinuca extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {imagem : "", descricao : ""};		
	}

	
	
	render() {  
      return (
        <div><Head >{{ Head }}</Head><Select >{{ Select }}</Select><img src="imagem">{{ imagem }}</img><div id="descricao">{{ descricao }}</div>
	<header path="" />
	</div>
      );
    }
  }

}