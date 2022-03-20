import sparqlClient from "../sparql/index.js";

class RetrieveJogadoresRealService{
    async execute(){

        const query = `
        PREFIX dbo: <http://dbpedia.org/ontology/>
        PREFIX dbr: <http://dbpedia.org/resource/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        SELECT ?nome
        WHERE
        {
                ?jogador a dbo:SnookerPlayer .
                ?jogador foaf:name ?nome.
        }
        ORDER BY ?nome`

        const stream = await sparqlClient.query.select(query);

        var aux = [];

        stream.on('data', (row) => {
            Object.entries(row).forEach(([key, value]) => {
                //console.log(`${key}: ${value.value} (${value.termType})`);
                aux.push(value.value)
            })
        })

        stream.on('end',function(){
            return aux;
        });
    }
}

export { RetrieveJogadoresRealService };