import callSoapApi from "../../services/saturno.service";
import xml2js from "xml2js"

export async function GET() {
    try {
        const data: any = await callSoapApi();
        const parser = new xml2js.Parser();
        const soapResponse = data;
        let resultData:string = '';
        parser.parseString(soapResponse, (err, result) => {
            if (err) {
                console.error('Error al parsear el XML', err);
            } else {
                resultData = result['soap:Envelope']['soap:Body'][0]['ConsultaInventarioShopifyResponse'][0]['ConsultaInventarioShopifyResult'][0];
            }
        });
        const res:any = JSON.parse(resultData)
        return new Response(JSON.stringify(res), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching SOAP API:", error);
        return new Response('Error al consumir la API SOAP', { status: 500 });
    }
}
