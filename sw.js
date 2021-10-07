<?xml version='1.0' encoding='UTF-8'?>
<wsdl:definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:tns="http://callback.mis.vimis.rosminzdrav.ru/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:ns1="http://schemas.xmlsoap.org/soap/http" name="callback" targetNamespace="http://callback.mis.vimis.rosminzdrav.ru/">
  <wsdl:types>
	<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://callback.mis.vimis.rosminzdrav.ru/" elementFormDefault="unqualified" targetNamespace="http://callback.mis.vimis.rosminzdrav.ru/" version="1.0">
  	<xs:element name="sendResult" type="tns:sendResult"/>
  	<xs:element name="sendInterimMsg" type="tns:sendInterimMsg"/>
  	<xs:complexType name="sendResult">
    	<xs:sequence>
      	<xs:element name="msg_id" type="xs:string"/>
      	<xs:element name="status" type="xs:int"/>
      	<xs:element name="description" type="xs:string"/>
    	</xs:sequence>
  	</xs:complexType>
  	<xs:complexType name="sendInterimMsg">
    	<xs:sequence>
      	<xs:element name="msg_id" type="xs:string"/>
      	<xs:element name="description" type="xs:string"/>
    	</xs:sequence>
  	</xs:complexType>
	</xs:schema>
  </wsdl:types>
  <wsdl:message name="sendResult">
	<wsdl:part element="tns:sendResult" name="parameters"/>
  </wsdl:message>
  <wsdl:message name="sendInterimMsg">
	<wsdl:part element="tns:sendInterimMsg" name="parameters"/>
  </wsdl:message>
  <wsdl:portType name="Callback">
	<wsdl:operation name="sendResult">
  	<wsdl:input message="tns:sendResult" name="sendResult"/>
	</wsdl:operation>
	<wsdl:operation name="sendInterimMsg">
  	<wsdl:input message="tns:sendInterimMsg" name="sendInterimMsg"/>
	</wsdl:operation>
  </wsdl:portType>
  <wsdl:binding name="callbackSoapBinding" type="tns:Callback">
	<soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
	<wsdl:operation name="sendResult">
  	<soap:operation soapAction="sendResult" style="document"/>
  	<wsdl:input name="sendResult">
    	<soap:body use="literal"/>
  	</wsdl:input>
	</wsdl:operation>
	<wsdl:operation name="sendInterimMsg">
  	<soap:operation soapAction="sendInterimMsg" style="document"/>
  	<wsdl:input name="sendInterimMsg">
    	<soap:body use="literal"/>
  	</wsdl:input>
	</wsdl:operation>
  </wsdl:binding>
  <wsdl:service name="callback">
	<wsdl:port binding="tns:callbackSoapBinding" name="CallbackPort">
	  <soap:address location="http://localhost:8080/mis/callback"/>
	</wsdl:port>
  </wsdl:service>
</wsdl:definitions>
