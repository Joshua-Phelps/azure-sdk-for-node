// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/applications?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#listapplicationsummariesresponses\",\"value\":[\r\n    {\r\n      \"id\":\"Blender\",\"versions\":[\r\n        \"2.7\",\"ScriptGen\"\r\n      ]\r\n    },{\r\n      \"id\":\"cntk\",\"versions\":[\r\n        \"1\"\r\n      ]\r\n    },{\r\n      \"id\":\"cntkbenchmark\",\"versions\":[\r\n        \"1\"\r\n      ]\r\n    },{\r\n      \"id\":\"ffmpeg\",\"versions\":[\r\n        \"1.0\"\r\n      ]\r\n    },{\r\n      \"id\":\"MPIHelloWorld\",\"versions\":[\r\n        \"1.0\"\r\n      ]\r\n    },{\r\n      \"id\":\"my_application_id\",\"versions\":[\r\n        \"1.0\"\r\n      ]\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e7e73be2-e8e6-4cc3-9516-fbc29d707c4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 22:00:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/applications?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#listapplicationsummariesresponses\",\"value\":[\r\n    {\r\n      \"id\":\"Blender\",\"versions\":[\r\n        \"2.7\",\"ScriptGen\"\r\n      ]\r\n    },{\r\n      \"id\":\"cntk\",\"versions\":[\r\n        \"1\"\r\n      ]\r\n    },{\r\n      \"id\":\"cntkbenchmark\",\"versions\":[\r\n        \"1\"\r\n      ]\r\n    },{\r\n      \"id\":\"ffmpeg\",\"versions\":[\r\n        \"1.0\"\r\n      ]\r\n    },{\r\n      \"id\":\"MPIHelloWorld\",\"versions\":[\r\n        \"1.0\"\r\n      ]\r\n    },{\r\n      \"id\":\"my_application_id\",\"versions\":[\r\n        \"1.0\"\r\n      ]\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e7e73be2-e8e6-4cc3-9516-fbc29d707c4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 22:00:23 GMT',
  connection: 'close' });
 return result; }]];