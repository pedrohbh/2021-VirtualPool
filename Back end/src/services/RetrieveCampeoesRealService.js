import sparqlClient from "../sparql/index.js";
import ParsingClient from 'sparql-http-client/ParsingClient.js';

class RetrieveCampeoesRealService{
    async execute(){
        const endpointUrl = 'https://dbpedia.org/sparql';
        const query = `
        PREFIX dbo: <http://dbpedia.org/ontology/>
        PREFIX dbr: <http://dbpedia.org/resource/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        SELECT ?nome
        WHERE
        {
                ?jogador a dbo:SnookerChamp .
                ?jogador foaf:name ?nome.
        }
        ORDER BY ?nome`

        const client = new ParsingClient({ endpointUrl })
        const bindings = await client.query.select(query)

        let response = []

        bindings.forEach(row =>{ 
            Object.entries(row).forEach(([key, value]) => {
                response.push({value: "\"" +value.value + "\"@" + value.language,label: value.value})
            })}
        )

        return {response}
    }
}

export { RetrieveCampeoesRealService };