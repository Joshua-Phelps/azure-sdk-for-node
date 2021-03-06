// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor/register?api-version=2015-12-01')
  .reply(200, "{\"properties\":{\"state\":\"Pending\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor\",\"type\":\"Microsoft.Features/providers/features\",\"name\":\"Microsoft.Sql/IndexAdvisor\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:05c190ff-f829-4fe0-9b3b-392f24883901',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd0ab8e0d-9495-41e4-a5e2-9d63c145c30a',
  'x-ms-routing-request-id': 'WESTUS:20160128T010235Z:d0ab8e0d-9495-41e4-a5e2-9d63c145c30a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Jan 2016 01:02:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor/register?api-version=2015-12-01')
  .reply(200, "{\"properties\":{\"state\":\"Pending\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor\",\"type\":\"Microsoft.Features/providers/features\",\"name\":\"Microsoft.Sql/IndexAdvisor\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:05c190ff-f829-4fe0-9b3b-392f24883901',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd0ab8e0d-9495-41e4-a5e2-9d63c145c30a',
  'x-ms-routing-request-id': 'WESTUS:20160128T010235Z:d0ab8e0d-9495-41e4-a5e2-9d63c145c30a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Jan 2016 01:02:35 GMT',
  connection: 'close' });
 return result; }]];