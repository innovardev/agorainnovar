import axios from "axios";

const createSoapRequest = () => `
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ConsultaInventarioShopify xmlns="http://tempuri.org/">
      <Usuario>Shopify</Usuario>
      <Contrasena>Shopify1</Contrasena>
    </ConsultaInventarioShopify>
  </soap:Body>
</soap:Envelope>
`;

const callSoapApi = async () => {
  const url = 'http://181.57.183.198/eCommerce.asmx';

  try {
    const headers = {
      'Content-Type': 'text/xml; charset=utf-8',
      'SOAPAction': '"http://tempuri.org/ConsultaInventarioShopify"',
    };

    const response = await axios.post(url, createSoapRequest(), { headers });
    console.log('Respuesta del servidor:', response.data);
  } catch (error:any) {
    if (error.response) {
      console.error('Error en la respuesta:', error.response.data);
    } else if (error.request) {
      console.error('Sin respuesta del servidor:', error.request);
    } else {
      console.error('Error en la configuración de la solicitud:', error.message);
    }
  }
};


export default callSoapApi;