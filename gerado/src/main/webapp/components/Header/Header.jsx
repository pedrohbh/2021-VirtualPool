import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {asPath : ""};		
	}

	
	
	render() {  
      return (
        <div><li id="asPath">{{ asPath }}</li><Link ></Link><Link ></Link><Link ></Link><Link ></Link><Link ></Link><Link ></Link><li id="asPath">{{ asPath }}</li><li id="asPath">{{ asPath }}</li><li id="asPath">{{ asPath }}</li><li id="asPath">{{ asPath }}</li></div>
      );
    }
  }

}