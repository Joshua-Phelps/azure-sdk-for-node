/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
 */
export interface Sku {
  /**
   * Name of the pricing tier. Possible values include: 'Standard_Verizon', 'Premium_Verizon',
   * 'Custom_Verizon', 'Standard_Akamai', 'Standard_ChinaCdn', 'Premium_ChinaCdn',
   * 'Standard_Microsoft'
   */
  name?: string;
}

/**
 * The core properties of ARM resources
 */
export interface Resource extends BaseResource {
  /**
   * Resource ID.
   */
  readonly id?: string;
  /**
   * Resource name.
   */
  readonly name?: string;
  /**
   * Resource type.
   */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource.
 */
export interface TrackedResource extends Resource {
  /**
   * Resource location.
   */
  location: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * CDN profile is a logical grouping of endpoints that share the same settings, such as CDN
 * provider and pricing tier.
 */
export interface Profile extends TrackedResource {
  /**
   * The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
   */
  sku: Sku;
  /**
   * Resource status of the profile. Possible values include: 'Creating', 'Active', 'Deleting',
   * 'Disabled'
   */
  readonly resourceState?: string;
  /**
   * Provisioning status of the profile.
   */
  readonly provisioningState?: string;
}

/**
 * Properties required to update a profile.
 */
export interface ProfileUpdateParameters extends BaseResource {
  /**
   * Profile tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The URI required to login to the supplemental portal from the Azure portal.
 */
export interface SsoUri {
  /**
   * The URI used to login to the supplemental portal.
   */
  readonly ssoUriValue?: string;
}

/**
 * The result of the GetSupportedOptimizationTypes API
 */
export interface SupportedOptimizationTypesListResult {
  /**
   * Supported optimization types for a profile.
   */
  readonly supportedOptimizationTypes?: string[];
}

/**
 * The main origin of CDN content which is added when creating a CDN endpoint.
 */
export interface DeepCreatedOrigin extends BaseResource {
  /**
   * Origin name
   */
  name: string;
  /**
   * The address of the origin. It can be a domain name, IPv4 address, or IPv6 address.
   */
  hostName: string;
  /**
   * The value of the HTTP port. Must be between 1 and 65535
   */
  httpPort?: number;
  /**
   * The value of the HTTPS port. Must be between 1 and 65535
   */
  httpsPort?: number;
}

/**
 * CDN endpoint is the entity within a CDN profile containing configuration information such as
 * origin, protocol, content caching and delivery behavior. The CDN endpoint uses the URL format
 * <endpointname>.azureedge.net.
 */
export interface Endpoint extends TrackedResource {
  /**
   * The host header value sent to the origin with each request. If you leave this blank, the
   * request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and
   * Cloud Services require this host header value to match the origin hostname by default.
   */
  originHostHeader?: string;
  /**
   * A directory path on the origin that CDN can use to retrieve content from, e.g.
   * contoso.cloudapp.net/originpath.
   */
  originPath?: string;
  /**
   * List of content types on which compression applies. The value should be a valid MIME type.
   */
  contentTypesToCompress?: string[];
  /**
   * Indicates whether content compression is enabled on CDN. Default value is false. If
   * compression is enabled, content will be served as compressed if user requests for a compressed
   * version. Content won't be compressed on CDN when requested content is smaller than 1 byte or
   * larger than 1 MB.
   */
  isCompressionEnabled?: boolean;
  /**
   * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one
   * protocol (HTTP or HTTPS) must be allowed.
   */
  isHttpAllowed?: boolean;
  /**
   * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least
   * one protocol (HTTP or HTTPS) must be allowed.
   */
  isHttpsAllowed?: boolean;
  /**
   * Defines how CDN caches requests that include query strings. You can ignore any query strings
   * when caching, bypass caching to prevent requests that contain query strings from being cached,
   * or cache every request with a unique URL. Possible values include: 'IgnoreQueryString',
   * 'BypassCaching', 'UseQueryString', 'NotSet'
   */
  queryStringCachingBehavior?: string;
  /**
   * Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download,
   * Media services. With this information, CDN can apply scenario driven optimization. Possible
   * values include: 'GeneralWebDelivery', 'GeneralMediaStreaming', 'VideoOnDemandMediaStreaming',
   * 'LargeFileDownload', 'DynamicSiteAcceleration'
   */
  optimizationType?: string;
  /**
   * Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and
   * calculate the most optimal routes for the CDN. This is relative to the origin path.
   */
  probePath?: string;
  /**
   * List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an
   * access rule to a specified path or content, e.g. block APAC for path /pictures/
   */
  geoFilters?: GeoFilter[];
  /**
   * A policy that specifies the delivery rules to be used for an endpoint.
   */
  deliveryPolicy?: EndpointPropertiesUpdateParametersDeliveryPolicy;
  /**
   * The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g.
   * contoso.azureedge.net
   */
  readonly hostName?: string;
  /**
   * The source of the content being delivered via CDN.
   */
  origins: DeepCreatedOrigin[];
  /**
   * Resource status of the endpoint. Possible values include: 'Creating', 'Deleting', 'Running',
   * 'Starting', 'Stopped', 'Stopping'
   */
  readonly resourceState?: string;
  /**
   * Provisioning status of the endpoint.
   */
  readonly provisioningState?: string;
}

/**
 * Rules defining user's geo access within a CDN endpoint.
 */
export interface GeoFilter {
  /**
   * Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)
   */
  relativePath: string;
  /**
   * Action of the geo filter, i.e. allow or block access. Possible values include: 'Block',
   * 'Allow'
   */
  action: string;
  /**
   * Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US.
   */
  countryCodes: string[];
}

/**
 * An action for the delivery rule.
 */
export interface DeliveryRuleAction {
  /**
   * Polymorphic Discriminator
   */
  name: string;
}

/**
 * A condition for the delivery rule.
 */
export interface DeliveryRuleCondition {
  /**
   * Polymorphic Discriminator
   */
  name: string;
}

/**
 * A rule that specifies a set of actions and conditions
 */
export interface DeliveryRule {
  /**
   * The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A
   * rule with a lesser order will be applied before a rule with a greater order. Rule with order 0
   * is a special rule. It does not require any condition and actions listed in it will always be
   * applied.
   */
  order: number;
  /**
   * A list of actions that are executed when all the conditions of a rule are satisfied.
   */
  actions: DeliveryRuleAction[];
  /**
   * A list of conditions that must be matched for the actions to be executed
   */
  conditions?: DeliveryRuleCondition[];
}

/**
 * A policy that specifies the delivery rules to be used for an endpoint.
 */
export interface EndpointPropertiesUpdateParametersDeliveryPolicy {
  /**
   * User-friendly description of the policy.
   */
  description?: string;
  /**
   * A list of the delivery rules.
   */
  rules: DeliveryRule[];
}

/**
 * Properties required to create or update an endpoint.
 */
export interface EndpointUpdateParameters extends BaseResource {
  /**
   * Endpoint tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The host header value sent to the origin with each request. If you leave this blank, the
   * request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and
   * Cloud Services require this host header value to match the origin hostname by default.
   */
  originHostHeader?: string;
  /**
   * A directory path on the origin that CDN can use to retrieve content from, e.g.
   * contoso.cloudapp.net/originpath.
   */
  originPath?: string;
  /**
   * List of content types on which compression applies. The value should be a valid MIME type.
   */
  contentTypesToCompress?: string[];
  /**
   * Indicates whether content compression is enabled on CDN. Default value is false. If
   * compression is enabled, content will be served as compressed if user requests for a compressed
   * version. Content won't be compressed on CDN when requested content is smaller than 1 byte or
   * larger than 1 MB.
   */
  isCompressionEnabled?: boolean;
  /**
   * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one
   * protocol (HTTP or HTTPS) must be allowed.
   */
  isHttpAllowed?: boolean;
  /**
   * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least
   * one protocol (HTTP or HTTPS) must be allowed.
   */
  isHttpsAllowed?: boolean;
  /**
   * Defines how CDN caches requests that include query strings. You can ignore any query strings
   * when caching, bypass caching to prevent requests that contain query strings from being cached,
   * or cache every request with a unique URL. Possible values include: 'IgnoreQueryString',
   * 'BypassCaching', 'UseQueryString', 'NotSet'
   */
  queryStringCachingBehavior?: string;
  /**
   * Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download,
   * Media services. With this information, CDN can apply scenario driven optimization. Possible
   * values include: 'GeneralWebDelivery', 'GeneralMediaStreaming', 'VideoOnDemandMediaStreaming',
   * 'LargeFileDownload', 'DynamicSiteAcceleration'
   */
  optimizationType?: string;
  /**
   * Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and
   * calculate the most optimal routes for the CDN. This is relative to the origin path.
   */
  probePath?: string;
  /**
   * List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an
   * access rule to a specified path or content, e.g. block APAC for path /pictures/
   */
  geoFilters?: GeoFilter[];
  /**
   * A policy that specifies the delivery rules to be used for an endpoint.
   */
  deliveryPolicy?: EndpointPropertiesUpdateParametersDeliveryPolicy;
}

/**
 * Defines the parameters for the URL path condition.
 */
export interface UrlPathConditionParameters {
  /**
   * A URL path for the condition of the delivery rule
   */
  path: string;
  /**
   * The match type for the condition of the delivery rule. Possible values include: 'Literal',
   * 'Wildcard'
   */
  matchType: string;
}

/**
 * Defines the URL path condition for the delivery rule.
 */
export interface DeliveryRuleUrlPathCondition extends DeliveryRuleCondition {
  /**
   * Defines the parameters for the condition.
   */
  parameters: UrlPathConditionParameters;
}

/**
 * Defines the parameters for the URL file extension condition.
 */
export interface UrlFileExtensionConditionParameters {
  /**
   * A list of extensions for the condition of the delivery rule.
   */
  extensions: string[];
}

/**
 * Defines the URL file extension condition for the delivery rule.
 */
export interface DeliveryRuleUrlFileExtensionCondition extends DeliveryRuleCondition {
  /**
   * Defines the parameters for the condition.
   */
  parameters: UrlFileExtensionConditionParameters;
}

/**
 * Defines the parameters for the cache expiration action.
 */
export interface CacheExpirationActionParameters {
  /**
   * Caching behavior for the requests that include query strings. Possible values include:
   * 'BypassCache', 'Override', 'SetIfMissing'
   */
  cacheBehavior: string;
  /**
   * The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
   */
  cacheDuration?: string;
}

/**
 * Defines the cache expiration action for the delivery rule.
 */
export interface DeliveryRuleCacheExpirationAction extends DeliveryRuleAction {
  /**
   * Defines the parameters for the action.
   */
  parameters: CacheExpirationActionParameters;
}

/**
 * Parameters required for content purge.
 */
export interface PurgeParameters {
  /**
   * The path to the content to be purged. Can describe a file path or a wild card directory.
   */
  contentPaths: string[];
}

/**
 * Parameters required for content load.
 */
export interface LoadParameters {
  /**
   * The path to the content to be loaded. Path should be a relative file URL of the origin.
   */
  contentPaths: string[];
}

/**
 * CDN origin is the source of the content being delivered via CDN. When the edge nodes represented
 * by an endpoint do not have the requested content cached, they attempt to fetch it from one or
 * more of the configured origins.
 */
export interface Origin extends TrackedResource {
  /**
   * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
   */
  hostName: string;
  /**
   * The value of the HTTP port. Must be between 1 and 65535.
   */
  httpPort?: number;
  /**
   * The value of the https port. Must be between 1 and 65535.
   */
  httpsPort?: number;
  /**
   * Resource status of the origin. Possible values include: 'Creating', 'Active', 'Deleting'
   */
  readonly resourceState?: string;
  /**
   * Provisioning status of the origin.
   */
  readonly provisioningState?: string;
}

/**
 * Origin properties needed for origin creation or update.
 */
export interface OriginUpdateParameters extends BaseResource {
  /**
   * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
   */
  hostName?: string;
  /**
   * The value of the HTTP port. Must be between 1 and 65535.
   */
  httpPort?: number;
  /**
   * The value of the HTTPS port. Must be between 1 and 65535.
   */
  httpsPort?: number;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
 */
export interface ProxyResource extends Resource {
}

/**
 * Friendly domain name mapping to the endpoint hostname that the customer provides for branding
 * purposes, e.g. www.contoso.com.
 */
export interface CustomDomain extends ProxyResource {
  /**
   * The host name of the custom domain. Must be a domain name.
   */
  hostName: string;
  /**
   * Resource status of the custom domain. Possible values include: 'Creating', 'Active',
   * 'Deleting'
   */
  readonly resourceState?: string;
  /**
   * Provisioning status of Custom Https of the custom domain. Possible values include: 'Enabling',
   * 'Enabled', 'Disabling', 'Disabled', 'Failed'
   */
  readonly customHttpsProvisioningState?: string;
  /**
   * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by
   * step. Possible values include: 'SubmittingDomainControlValidationRequest',
   * 'PendingDomainControlValidationREquestApproval', 'DomainControlValidationRequestApproved',
   * 'DomainControlValidationRequestRejected', 'DomainControlValidationRequestTimedOut',
   * 'IssuingCertificate', 'DeployingCertificate', 'CertificateDeployed', 'DeletingCertificate',
   * 'CertificateDeleted'
   */
  readonly customHttpsProvisioningSubstate?: string;
  /**
   * Special validation or data may be required when delivering CDN to some regions due to local
   * compliance reasons. E.g. ICP license number of a custom domain is required to deliver content
   * in China.
   */
  validationData?: string;
  /**
   * Provisioning status of the custom domain.
   */
  readonly provisioningState?: string;
}

/**
 * The customDomain JSON object required for custom domain creation or update.
 */
export interface CustomDomainParameters {
  /**
   * The host name of the custom domain. Must be a domain name.
   */
  hostName: string;
}

/**
 * The JSON object that contains the properties to secure a custom domain.
 */
export interface CustomDomainHttpsParameters {
  /**
   * Defines the TLS extension protocol that is used for secure delivery. Possible values include:
   * 'ServerNameIndication', 'IPBased'
   */
  protocolType: string;
  /**
   * Polymorphic Discriminator
   */
  certificateSource: string;
}

/**
 * Defines the parameters for using CDN managed certificate for securing custom domain.
 */
export interface CdnCertificateSourceParameters {
  /**
   * Type of certificate used. Possible values include: 'Shared', 'Dedicated'
   */
  certificateType: string;
}

/**
 * Defines the certificate source parameters using CDN managed certificate for enabling SSL.
 */
export interface CdnManagedHttpsParameters extends CustomDomainHttpsParameters {
  /**
   * Defines the certificate source parameters using CDN managed certificate for enabling SSL.
   */
  certificateSourceParameters: CdnCertificateSourceParameters;
}

/**
 * Describes the parameters for using a user's KeyVault certificate for securing custom domain.
 */
export interface KeyVaultCertificateSourceParameters {
  /**
   * Subscription Id of the user's Key Vault containing the SSL certificate
   */
  subscriptionId: string;
  /**
   * Resource group of the user's Key Vault containing the SSL certificate
   */
  resourceGroupName: string;
  /**
   * The name of the user's Key Vault containing the SSL certificate
   */
  vaultName: string;
  /**
   * The name of Key Vault Secret (representing the full certificate PFX) in Key Vault.
   */
  secretName: string;
  /**
   * The version(GUID) of Key Vault Secret in Key Vault.
   */
  secretVersion: string;
}

/**
 * Defines the certificate source parameters using user's keyvault certificate for enabling SSL.
 */
export interface UserManagedHttpsParameters extends CustomDomainHttpsParameters {
  /**
   * Defines the certificate source parameters using user's keyvault certificate for enabling SSL.
   */
  certificateSourceParameters: KeyVaultCertificateSourceParameters;
}

/**
 * Input of the custom domain to be validated for DNS mapping.
 */
export interface ValidateCustomDomainInput {
  /**
   * The host name of the custom domain. Must be a domain name.
   */
  hostName: string;
}

/**
 * Output of custom domain validation.
 */
export interface ValidateCustomDomainOutput {
  /**
   * Indicates whether the custom domain is valid or not.
   */
  readonly customDomainValidated?: boolean;
  /**
   * The reason why the custom domain is not valid.
   */
  readonly reason?: string;
  /**
   * Error message describing why the custom domain is not valid.
   */
  readonly message?: string;
}

/**
 * Input of CheckNameAvailability API.
 */
export interface CheckNameAvailabilityInput {
  /**
   * The resource name to validate.
   */
  name: string;
}

/**
 * Output of check name availability API.
 */
export interface CheckNameAvailabilityOutput {
  /**
   * Indicates whether the name is available.
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason why the name is not available.
   */
  readonly reason?: string;
  /**
   * The detailed error message describing why the name is not available.
   */
  readonly message?: string;
}

/**
 * Input of the validate probe API.
 */
export interface ValidateProbeInput {
  /**
   * The probe URL to validate.
   */
  probeURL: string;
}

/**
 * Output of the validate probe API.
 */
export interface ValidateProbeOutput {
  /**
   * Indicates whether the probe URL is accepted or not.
   */
  readonly isValid?: boolean;
  /**
   * Specifies the error code when the probe url is not accepted.
   */
  readonly errorCode?: string;
  /**
   * The detailed error message describing why the probe URL is not accepted.
   */
  readonly message?: string;
}

/**
 * Output of check resource usage API.
 */
export interface ResourceUsage {
  /**
   * Resource type for which the usage is provided.
   */
  readonly resourceType?: string;
  /**
   * Unit of the usage. e.g. Count.
   */
  readonly unit?: string;
  /**
   * Actual value of usage on the specified resource type.
   */
  readonly currentValue?: number;
  /**
   * Quota of the specified resource type.
   */
  readonly limit?: number;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Cdn
   */
  readonly provider?: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
   */
  readonly resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  readonly operation?: string;
}

/**
 * CDN REST API operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  readonly name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * CIDR Ip address
 */
export interface CidrIpAddress {
  /**
   * Ip address itself.
   */
  baseIpAddress?: string;
  /**
   * The length of the prefix of the ip address.
   */
  prefixLength?: number;
}

/**
 * CDN Ip address group
 */
export interface IpAddressGroup {
  /**
   * The delivery region of the ip address group
   */
  deliveryRegion?: string;
  /**
   * The list of ip v4 addresses.
   */
  ipv4Addresses?: CidrIpAddress[];
  /**
   * The list of ip v6 addresses.
   */
  ipv6Addresses?: CidrIpAddress[];
}

/**
 * Edgenode is a global Point of Presence (POP) location used to deliver CDN content to end users.
 */
export interface EdgeNode extends ProxyResource {
  /**
   * List of ip address groups.
   */
  ipAddressGroups: IpAddressGroup[];
}

/**
 * Error response indicates CDN service is not able to process the incoming request. The reason is
 * provided in the error message.
 */
export interface ErrorResponse {
  /**
   * Error code.
   */
  readonly code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  readonly message?: string;
}

/**
 * Result of the request to list profiles. It contains a list of profile objects and a URL link to
 * get the next set of results.
 */
export interface ProfileListResult extends Array<Profile> {
  /**
   * URL to get the next set of profile objects if there are any.
   */
  nextLink?: string;
}

/**
 * Output of check resource usage API.
 */
export interface ResourceUsageListResult extends Array<ResourceUsage> {
  /**
   * URL to get the next set of custom domain objects if there are any.
   */
  nextLink?: string;
}

/**
 * Result of the request to list endpoints. It contains a list of endpoint objects and a URL link
 * to get the next set of results.
 */
export interface EndpointListResult extends Array<Endpoint> {
  /**
   * URL to get the next set of endpoint objects if there is any.
   */
  nextLink?: string;
}

/**
 * Result of the request to list origins. It contains a list of origin objects and a URL link to
 * get the next set of results.
 */
export interface OriginListResult extends Array<Origin> {
  /**
   * URL to get the next set of origin objects if there are any.
   */
  nextLink?: string;
}

/**
 * Result of the request to list custom domains. It contains a list of custom domain objects and a
 * URL link to get the next set of results.
 */
export interface CustomDomainListResult extends Array<CustomDomain> {
  /**
   * URL to get the next set of custom domain objects if there are any.
   */
  nextLink?: string;
}

/**
 * Result of the request to list CDN operations. It contains a list of operations and a URL link to
 * get the next set of results.
 */
export interface OperationsListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * Result of the request to list CDN edgenodes. It contains a list of ip address group and a URL
 * link to get the next set of results.
 */
export interface EdgenodeResult extends Array<EdgeNode> {
  /**
   * URL to get the next set of edgenode list results if there are any.
   */
  nextLink?: string;
}
