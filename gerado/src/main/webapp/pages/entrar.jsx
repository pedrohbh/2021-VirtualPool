import React from 'react';
import ReactDOM from 'react-dom';

class entrar extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {signInUrl : "", user : new Usuario(), signOut : ""};		
	}

	
	
	render() {  
      return (
        <div><a href="signInUrl">{{ signInUrl }}</a><Head >{{ Head }}</Head>
	<header path="" />
	</div>
      );
    }
  }

}