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
        <div><Head ></Head><Select ></Select><img src={imagem}></img><div id="descricao">{{ descricao }}</div><Select ></Select><Select ></Select>
	<header asPath="" />
	</div>
      );
    }
  }

}