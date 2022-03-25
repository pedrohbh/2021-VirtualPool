import * as $rdf from 'rdflib';
import prismaClient from "../prisma/index.js";

class RDFService {

  async GetAll() {
    const ads = await prismaClient.jogador.findMany({});

    const saida = this.getRDFFile(ads);
    return saida;
  }

  async Get(nome) {

    const ad = await prismaClient.jogador.findFirst({
        where:{
            nome: nome,
        }
    });
    const saida = this.getRDFFile([ad]);
    return saida;
  }

  getRDFFile(ads) {
    const store = $rdf.graph(); // RDF Model

    const myNS = 'http://localhost:4000/api/rdf/';
    const grNS = 'http://purl.org/goodrelations/v1#';
    store.setPrefixForURI('gr', grNS);

    // Namespaces
    const MY = $rdf.Namespace(myNS);

    // Resources
    const grOffering = $rdf.sym(`${grNS}Jogador`);
    const grQuantitativeValueInteger = $rdf.sym(`${grNS}QuantitativeValueInteger`);
    const grhasCurrencyValue = $rdf.sym(`${grNS}hasCurrencyValue`);

    // Adicionar instâncias
    ads.forEach((ad) => {
      const adResource = $rdf.sym(`${myNS}${ad.id}`);
      store.add(adResource, MY('nome'), ad.nome);
      store.add(adResource, MY('vitorias'), ad.vitorias);
      store.add(adResource, MY('derrotas'), ad.derrotas);
      store.add(adResource, MY('email'), ad.email);
      store.add(adResource, MY('picture'), ad.picture);
    });

    const allStatements = store.statementsMatching();
    const serializer = $rdf.Serializer(store);

    return serializer.statementsToXML(allStatements);
  }
}

export {RDFService}