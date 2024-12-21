import axios from "axios";

const createSoapRequest = () => `
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <ConsultaInventarioShopify xmlns="http://tempuri.org/">
      <Usuario>Shopify</Usuario>
      <Contrasena>Shopify1</Contrasena>
    </ConsultaInventarioShopify>
  </soap12:Body>
</soap12:Envelope>
`;

const callSoapApi = async () => {

    const url = 'http://181.57.183.198:8092/eCommerce.asmx?op=ConsultaInventarioShopify'
    try {
        const headers = {
            'Content-Type': 'application/soap+xml; charset=utf-8',
        }

        const response = await axios.post(url, createSoapRequest(), { headers })

        const jsonResponse = response.data

        return jsonResponse

    } catch (error:any) {
        if (error.response) {
            console.error('Error en la respuesta:', error.response.data);
          } else if (error.request) {
            console.error('Sin respuesta del servidor:', error.request);
          } else {
            console.error('Error en la configuración de la solicitud:', error.message);
          }
    }

}

export default callSoapApi;