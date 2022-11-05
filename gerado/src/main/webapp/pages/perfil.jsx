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
        <div><Head ></Head><img src={user.picture}></img><span id="info.nome">{{ info.nome }}</span><span id="info.vitorias">{{ info.vitorias }}</span><span id="info.vitorias">{{ info.vitorias }}</span><span id="rank">{{ rank }}</span><table>
				<tr>
					<th>{{ table }}</th>
				</tr>
				<tr>
					<td>{{ table }}</td>
				</tr>
			</table>
	<header asPath="" />
	</div>
      );
    }
  }

}