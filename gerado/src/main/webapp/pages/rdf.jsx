import React from 'react';
import ReactDOM from 'react-dom';

class rdf extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {rdf : "", rdfAll : ""};		
	}

	
	useEffect() 
	{
		//TODO To be implemented
	}
	
	setProfile() 
	{
		//TODO To be implemented
	}
	
	
	render() {  
      return (
        <div><Head ></Head><div id="rdf">{{ rdf }}</div><div id="rdfAll">{{ rdfAll }}</div>
	<header path="" />
	</div>
      );
    }
  }

}