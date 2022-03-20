import sparqlClient from "../sparql/index.js";

class RetrieveJogadorRealByIdService{
    async execute(id){
        const query = `
        PREFIX dbo: <http://dbpedia.org/onthology/>
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dbr: <http://dbpedia.org/resource/>
        PREFIX dbpedia2: <http://dbpedia.org/property/>
        PREFIX dbpedia: <http://dbpedia.org/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        SELECT ?descricao ?imagem
        WHERE
            {
                    ?jogador a dbo:SnookerPlayer .
                    ?jogador foaf:name ` + id + `@en .
                    ?jogador rdfs:comment ?descricao .
                    ?jogador foaf:depiction ?imagem .

                    FILTER ( LANG ( ?descricao) = 'en' )
            }
        LIMIT 1`

        console.log(id)
        const stream = await sparqlClient.query.select(query)

        stream.on('data', row => {
        Object.entries(row).forEach(([key, value]) => {
            console.log(`${key}: ${value.value} (${value.termType})`)
        })
        })

        stream.on('error', err => {
        console.error(err)
        })

        return {stream};
    }
}

export { RetrieveJogadorRealByIdService };
