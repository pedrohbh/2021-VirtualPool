import sparqlClient from "../sparql/index.js";
import ParsingClient from 'sparql-http-client/ParsingClient.js';

class RetrieveJogadorRealByIdService{
    async execute(nome){
        const endpointUrl = 'https://dbpedia.org/sparql';
        const query = `
        PREFIX dbo: <http://dbpedia.org/ontology/>
        PREFIX dbr: <http://dbpedia.org/resource/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        SELECT ?descricao ?imagem
        WHERE
        {
                ?jogador a dbo:SnookerPlayer ;
                foaf:name ${nome} .
                ?jogador rdfs:comment ?descricao .
                OPTIONAL {?jogador foaf:depiction ?imagem .}
               FILTER ( LANG ( ?descricao) = 'en' )
        }LIMIT 1`

        const client = new ParsingClient({ endpointUrl })
        const bindings = await client.query.select(query)

        let response;

        bindings.forEach(row =>{
            "imagem" in row 
            ? response = {imagem: row.imagem.value, descricao: row.descricao.value}
            : response = {imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmCq2S0rgaCsC3RqHm1qzfNu6lRzG2cLJiQ&usqp=CAU", descricao: row.descricao.value}
            }
        )

        return response
    }
}

export { RetrieveJogadorRealByIdService };
