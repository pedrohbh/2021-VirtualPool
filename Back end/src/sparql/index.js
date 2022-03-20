import SparqlClient from 'sparql-http-client'

const endpointUrl = 'https://dbpedia.org/sparql';
const sparqlClient = new SparqlClient({ endpointUrl });

export default sparqlClient;