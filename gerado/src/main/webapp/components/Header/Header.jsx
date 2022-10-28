import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {path : ""};		
	}

	
	
	render() {  
      return (
        <div><p id="path">{{ path }}</p></div>
      );
    }
  }

}