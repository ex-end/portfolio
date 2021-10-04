<?xml version="1.0" encoding="UTF-8"?>
<wsdl:definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsp="http://www.w3.org/ns/ws-policy" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:wsaw="http://www.w3.org/2006/05/addressing/wsdl" xmlns:wsam="http://www.w3.org/2007/05/addressing/metadata" xmlns:tns="http://vimis.rosminzdrav.ru/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:ns1="http://schemas.xmlsoap.org/soap/http" name="receiver" targetNamespace="http://vimis.rosminzdrav.ru/">
  <wsdl:types>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://vimis.rosminzdrav.ru/" attributeFormDefault="unqualified" elementFormDefault="unqualified" targetNamespace="http://vimis.rosminzdrav.ru/">
  <xs:element name="sendDocument" type="tns:sendDocument"/>
  <xs:element name="returnMsgId" type="tns:returnMsgId"/>
  <xs:complexType name="sendDocument">
	<xs:sequence>
  	<xs:element name="vmcl" type="xs:int"/>
  	<xs:element name="docType" type="xs:int"/>
  	<xs:element name="docTypeVersion" type="xs:int"/>
  	<xs:element name="triggerPoint" type="xs:int"/>
  	<xs:element name="interimMsg" minOccurs="0" type="xs:int"/>
  	<xs:element name="document" type="xs:string"/>
	</xs:sequence>
  </xs:complexType>
  <xs:complexType name="returnMsgId">
	<xs:sequence>
  	<xs:element name="msg_id" type="xs:string"/>
	</xs:sequence>
  </xs:complexType>
</xs:schema>
  </wsdl:types>
  <wsdl:message name="sendDocument">
	<wsdl:part element="tns:sendDocument" name="parameters">
	</wsdl:part>
  </wsdl:message>
  <wsdl:message name="returnMsgId">
	<wsdl:part element="tns:returnMsgId" name="parameters">
	</wsdl:part>
  </wsdl:message>
  <wsdl:portType name="Receiver">
	<wsdl:operation name="sendDocument">
   	<wsdl:input message="tns:sendDocument" name="sendDocument" wsam:Action="sendDocument" wsaw:Action="sendDocument">
	</wsdl:input>
  	<wsdl:output message="tns:returnMsgId" name="returnMsgId" wsam:Action="http://vimis.rosminzdrav.ru/Receiver/returnMsgId" wsaw:Action="http://vimis.rosminzdrav.ru/Receiver/returnMsgId">
	</wsdl:output>
	</wsdl:operation>
  </wsdl:portType>
  <wsdl:binding name="receiverSoapBinding" type="tns:Receiver">
	<soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
    <wsaw:UsingAddressing xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:wsaw="http://www.w3.org/2006/05/addressing/wsdl" wsdl:required="false"/>
	<wsdl:operation name="sendDocument">
  	<soap:operation soapAction="sendDocument" style="document"/>
  	<wsdl:input name="sendDocument">
    	<soap:body use="literal"/>
   	</wsdl:input>
  	<wsdl:output name="returnMsgId">
    	<soap:body use="literal"/>
  	</wsdl:output>
	</wsdl:operation>
  </wsdl:binding>
  <wsdl:service name="receiver">
	<wsdl:port binding="tns:receiverSoapBinding" name="ReceiverPort">
  	<soap:address location="https://ips-test.rosminzdrav.ru/9a467df650753"/>
	</wsdl:port>
  </wsdl:service>
</wsdl:definitions>
