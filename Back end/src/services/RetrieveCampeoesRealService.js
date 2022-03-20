import sparqlClient from "../sparql/index.js";

class RetrieveCampeoesRealService{
    async execute(){
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

        const stream = await sparqlClient.query.select(query)
        let response = []
        
        /*
        stream.on('data', row => {
        Object.entries(row).forEach(([key, value]) => {
            console.log(`${key}: ${value.value} (${value.termType})`)
            response.push(value.value)
        })
        })

        console.log(response);*/

        
        stream.on('error', err => {
        console.error(err)
        })

        return {stream};
    }
}

export { RetrieveCampeoesRealService };