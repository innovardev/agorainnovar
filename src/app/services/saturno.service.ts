
const callSoapApi = async () => {
    const myHeaders = new Headers();
    myHeaders.append("SOAPAction", "http://tempuri.org/ConsultaInventarioShopify");
    myHeaders.append("Content-Type", "text/xml; charset=utf-8");
    
    const raw = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n  <soap:Body>\r\n    <ConsultaInventarioShopify xmlns=\"http://tempuri.org/\">\r\n      <Usuario>Shopify</Usuario>\r\n      <Contrasena>Shopify1</Contrasena>\r\n    </ConsultaInventarioShopify>\r\n  </soap:Body>\r\n</soap:Envelope>";
    
    const requestOptions:any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        mode: "cors",  
        redirect: "follow"
    };
    
    fetch("http://181.57.183.198:8092/eCommerce.asmx", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

};


export default callSoapApi;