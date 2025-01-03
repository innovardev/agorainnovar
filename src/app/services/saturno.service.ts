
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const callSoapApi = async () => {
    const myHeaders = new Headers();
    myHeaders.append("SOAPAction", "http://tempuri.org/ConsultaInventarioShopify");
    myHeaders.append("Content-Type", "text/xml; charset=utf-8");
  
    const raw = `<?xml version="1.0" encoding="utf-8"?>\r\n<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\r\n  <soap:Body>\r\n    <ConsultaInventarioShopify xmlns="http://tempuri.org/">\r\n      <Usuario>Shopify</Usuario>\r\n      <Contrasena>Shopify1</Contrasena>\r\n    </ConsultaInventarioShopify>\r\n  </soap:Body>\r\n</soap:Envelope>`;
  
    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow"
    };
  
    try {
      const response = await fetch("http://181.57.183.198:8092/eCommerce.asmx", requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.text(); // O response.xml() si el XML es necesario
      return result;  // Retorna la respuesta como texto (XML)
    } catch (error) {
      console.error("Error occurred during SOAP API request:", error);
      throw error;
    }
  };
  
  export default callSoapApi;