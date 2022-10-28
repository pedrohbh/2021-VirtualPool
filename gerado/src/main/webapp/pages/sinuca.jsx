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
        <div><Head id="Head">{{ Head }}</Head><Select id="Select">{{ Select }}</Select><img src="imagem" id="imagem">{{ imagem }}</img src="imagem"><div id="descricao">{{ descricao }}</div>
	<header path="" />
	</div>
      );
    }
  }

}