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
 * Error Details object.
 */
export interface StorageSyncErrorDetails {
  /**
   * Error code of the given entry.
   */
  code?: string;
  /**
   * Error message of the given entry.
   */
  message?: string;
  /**
   * Target of the given entry.
   */
  target?: string;
}

/**
 * Error type
 */
export interface StorageSyncApiError {
  /**
   * Error code of the given entry.
   */
  code?: string;
  /**
   * Error message of the given entry.
   */
  message?: string;
  /**
   * Target of the given error entry.
   */
  target?: string;
  /**
   * Error details of the given entry.
   */
  details?: StorageSyncErrorDetails;
}

/**
 * Error type
 */
export interface StorageSyncError {
  /**
   * Error details of the given entry.
   */
  error?: StorageSyncApiError;
  /**
   * Error details of the given entry.
   */
  innererror?: StorageSyncApiError;
}

/**
 * Subscription State object.
 */
export interface SubscriptionState {
  /**
   * State of Azure Subscription. Possible values include: 'Registered', 'Unregistered', 'Warned',
   * 'Suspended', 'Deleted'
   */
  state?: string;
  /**
   * Is Transitioning
   */
  readonly istransitioning?: boolean;
  /**
   * Subscription state properties.
   */
  properties?: any;
}

export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  */
  readonly id?: string;
  /**
   * The name of the resource
  */
  readonly name?: string;
  /**
   * The type of the resource. Ex- Microsoft.Compute/virtualMachines or
   * Microsoft.Storage/storageAccounts.
  */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource
*/
export interface TrackedResource extends Resource {
  /**
   * Resource tags.
  */
  tags?: { [propertyName: string]: string };
  /**
   * The geo-location where the resource lives
  */
  location: string;
}

/**
 * Storage Sync Service object.
*/
export interface StorageSyncService extends TrackedResource {
  /**
   * Storage Sync service status.
  */
  readonly storageSyncServiceStatus?: number;
  /**
   * Storage Sync service Uid
  */
  readonly storageSyncServiceUid?: string;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
*/
export interface ProxyResource extends Resource {
}

/**
 * Sync Group object.
*/
export interface SyncGroup extends ProxyResource {
  /**
   * Unique Id
  */
  uniqueId?: string;
  /**
   * Sync group status
  */
  readonly syncGroupStatus?: string;
}

/**
 * Cloud Endpoint object.
*/
export interface CloudEndpoint extends ProxyResource {
  /**
   * Storage Account Resource Id
  */
  storageAccountResourceId?: string;
  /**
   * Azure file share name
  */
  azureFileShareName?: string;
  /**
   * Storage Account Tenant Id
  */
  storageAccountTenantId?: string;
  /**
   * Partnership Id
  */
  partnershipId?: string;
  /**
   * Friendly Name
  */
  friendlyName?: string;
  /**
   * Backup Enabled
  */
  readonly backupEnabled?: string;
  /**
   * CloudEndpoint Provisioning State
  */
  provisioningState?: string;
  /**
   * CloudEndpoint lastWorkflowId
  */
  lastWorkflowId?: string;
  /**
   * Resource Last Operation Name
  */
  lastOperationName?: string;
}

/**
 * The parameters used when calling trigger change detection action on cloud endpoint.
*/
export interface TriggerChangeDetectionParameters {
  /**
   * Relative path to a directory Azure File share for which change detection is to be performed.
  */
  directoryPath?: string;
  /**
   * Change Detection Mode. Applies to a directory specified in directoryPath parameter. Possible
   * values include: 'Default', 'Recursive'
  */
  changeDetectionMode?: string;
  /**
   * Array of relative paths on the Azure File share to be included in the change detection. Can be
   * files and directories.
  */
  readonly paths?: string[];
}

/**
 * The parameters used when calling recall action on server endpoint.
*/
export interface RecallActionParameters {
  /**
   * Pattern of the files.
  */
  pattern?: string;
  /**
   * Recall path.
  */
  recallPath?: string;
}

/**
 * The parameters used when creating a storage sync service.
*/
export interface StorageSyncServiceCreateParameters {
  /**
   * Required. Gets or sets the location of the resource. This will be one of the supported and
   * registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of
   * a resource cannot be changed once it is created, but if an identical geo region is specified
   * on update, the request will succeed.
  */
  location: string;
  /**
   * Gets or sets a list of key value pairs that describe the resource. These tags can be used for
   * viewing and grouping this resource (across resource groups). A maximum of 15 tags can be
   * provided for a resource. Each tag must have a key with a length no greater than 128 characters
   * and a value with a length no greater than 256 characters.
  */
  tags?: { [propertyName: string]: string };
  properties?: any;
}

/**
 * The parameters used when creating a sync group.
*/
export interface SyncGroupCreateParameters extends ProxyResource {
  /**
   * The parameters used to create the sync group
  */
  properties?: any;
}

/**
 * The parameters used when creating a cloud endpoint.
*/
export interface CloudEndpointCreateParameters extends ProxyResource {
  /**
   * Storage Account Resource Id
  */
  storageAccountResourceId?: string;
  /**
   * Azure file share name
  */
  azureFileShareName?: string;
  /**
   * Storage Account Tenant Id
  */
  storageAccountTenantId?: string;
  /**
   * Friendly Name
  */
  friendlyName?: string;
}

/**
 * The parameters used when creating a server endpoint.
*/
export interface ServerEndpointCreateParameters extends ProxyResource {
  /**
   * Server Local path.
  */
  serverLocalPath?: string;
  /**
   * Cloud Tiering. Possible values include: 'on', 'off'
  */
  cloudTiering?: string;
  /**
   * Level of free space to be maintained by Cloud Tiering if it is enabled.
  */
  volumeFreeSpacePercent?: number;
  /**
   * Tier files older than days.
  */
  tierFilesOlderThanDays?: number;
  /**
   * Friendly Name
  */
  friendlyName?: string;
  /**
   * Server Resource Id.
  */
  serverResourceId?: string;
  /**
   * Offline data transfer. Possible values include: 'on', 'off'
  */
  offlineDataTransfer?: string;
  /**
   * Offline data transfer share name
  */
  offlineDataTransferShareName?: string;
}

/**
 * Trigger Rollover Request.
*/
export interface TriggerRolloverRequest {
  /**
   * Certificate Data
  */
  serverCertificate?: string;
}

/**
 * The parameters used when creating a registered server.
*/
export interface RegisteredServerCreateParameters extends ProxyResource {
  /**
   * Registered Server Certificate
  */
  serverCertificate?: string;
  /**
   * Registered Server Agent Version
  */
  agentVersion?: string;
  /**
   * Registered Server OS Version
  */
  serverOSVersion?: string;
  /**
   * Registered Server last heart beat
  */
  lastHeartBeat?: string;
  /**
   * Registered Server serverRole
  */
  serverRole?: string;
  /**
   * Registered Server clusterId
  */
  clusterId?: string;
  /**
   * Registered Server clusterName
  */
  clusterName?: string;
  /**
   * Registered Server serverId
  */
  serverId?: string;
  /**
   * Friendly Name
  */
  friendlyName?: string;
}

/**
 * Parameters for updating an Server Endpoint.
*/
export interface ServerEndpointUpdateParameters {
  /**
   * Cloud Tiering. Possible values include: 'on', 'off'
  */
  cloudTiering?: string;
  /**
   * Level of free space to be maintained by Cloud Tiering if it is enabled.
  */
  volumeFreeSpacePercent?: number;
  /**
   * Tier files older than days.
  */
  tierFilesOlderThanDays?: number;
  /**
   * Offline data transfer. Possible values include: 'on', 'off'
  */
  offlineDataTransfer?: string;
  /**
   * Offline data transfer share name
  */
  offlineDataTransferShareName?: string;
}

/**
 * Files not syncing error object
*/
export interface FilesNotSyncingError {
  /**
   * Error code (HResult)
  */
  readonly errorCode?: number;
  /**
   * Count of persistent files not syncing with the specified error code
  */
  readonly persistentCount?: number;
  /**
   * Count of transient files not syncing with the specified error code
  */
  readonly transientCount?: number;
}

/**
 * Sync Session status object.
*/
export interface SyncSessionStatus {
  /**
   * Last sync result (HResult)
  */
  readonly lastSyncResult?: number;
  /**
   * Last sync timestamp
  */
  readonly lastSyncTimestamp?: Date;
  /**
   * Last sync success timestamp
  */
  readonly lastSyncSuccessTimestamp?: Date;
  /**
   * Last sync per item error count.
  */
  readonly lastSyncPerItemErrorCount?: number;
  /**
   * Count of persistent files not syncing. Reserved for future use.
  */
  readonly persistentFilesNotSyncingCount?: number;
  /**
   * Count of transient files not syncing. Reserved for future use.
  */
  readonly transientFilesNotSyncingCount?: number;
  /**
   * Array of per-item errors coming from the last sync session. Reserved for future use.
  */
  readonly filesNotSyncingErrors?: FilesNotSyncingError[];
}

/**
 * Sync Session status object.
*/
export interface SyncActivityStatus {
  /**
   * Timestamp when properties were updated
  */
  readonly timestamp?: Date;
  /**
   * Per item error count
  */
  readonly perItemErrorCount?: number;
  /**
   * Applied item count.
  */
  readonly appliedItemCount?: number;
  /**
   * Total item count (if available)
  */
  readonly totalItemCount?: number;
  /**
   * Applied bytes
  */
  readonly appliedBytes?: number;
  /**
   * Total bytes (if available)
  */
  readonly totalBytes?: number;
}

/**
 * Server Endpoint sync status
*/
export interface ServerEndpointSyncStatus {
  /**
   * Download Health Status. Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
  */
  readonly downloadHealth?: string;
  /**
   * Upload Health Status. Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
  */
  readonly uploadHealth?: string;
  /**
   * Combined Health Status. Possible values include: 'Healthy', 'Error', 'SyncBlockedForRestore',
   * 'SyncBlockedForChangeDetectionPostRestore', 'NoActivity'
  */
  readonly combinedHealth?: string;
  /**
   * Sync activity. Possible values include: 'Upload', 'Download', 'UploadAndDownload'
  */
  readonly syncActivity?: string;
  /**
   * Total count of persistent files not syncing (combined upload + download). Reserved for future
   * use.
  */
  readonly totalPersistentFilesNotSyncingCount?: number;
  /**
   * Last Updated Timestamp
  */
  readonly lastUpdatedTimestamp?: Date;
  /**
   * Upload Status
  */
  readonly uploadStatus?: SyncSessionStatus;
  /**
   * Download Status
  */
  readonly downloadStatus?: SyncSessionStatus;
  /**
   * Upload sync activity
  */
  readonly uploadActivity?: SyncActivityStatus;
  /**
   * Download sync activity
  */
  readonly downloadActivity?: SyncActivityStatus;
  /**
   * Offline Data Transfer State. Possible values include: 'InProgress', 'Stopping', 'NotRunning',
   * 'Complete'
  */
  readonly offlineDataTransferStatus?: string;
}

/**
 * Server Endpoint object.
*/
export interface ServerEndpoint extends ProxyResource {
  /**
   * Server Local path.
  */
  serverLocalPath?: string;
  /**
   * Cloud Tiering. Possible values include: 'on', 'off'
  */
  cloudTiering?: string;
  /**
   * Level of free space to be maintained by Cloud Tiering if it is enabled.
  */
  volumeFreeSpacePercent?: number;
  /**
   * Tier files older than days.
  */
  tierFilesOlderThanDays?: number;
  /**
   * Friendly Name
  */
  friendlyName?: string;
  /**
   * Server Resource Id.
  */
  serverResourceId?: string;
  /**
   * ServerEndpoint Provisioning State
  */
  readonly provisioningState?: string;
  /**
   * ServerEndpoint lastWorkflowId
  */
  readonly lastWorkflowId?: string;
  /**
   * Resource Last Operation Name
  */
  readonly lastOperationName?: string;
  /**
   * Server Endpoint sync status
  */
  readonly syncStatus?: ServerEndpointSyncStatus;
  /**
   * Offline data transfer. Possible values include: 'on', 'off'
  */
  offlineDataTransfer?: string;
  /**
   * Offline data transfer storage account resource ID
  */
  readonly offlineDataTransferStorageAccountResourceId?: string;
  /**
   * Offline data transfer storage account tenant ID
  */
  readonly offlineDataTransferStorageAccountTenantId?: string;
  /**
   * Offline data transfer share name
  */
  offlineDataTransferShareName?: string;
}

/**
 * Registered Server resource.
*/
export interface RegisteredServer extends ProxyResource {
  /**
   * Registered Server Certificate
  */
  serverCertificate?: string;
  /**
   * Registered Server Agent Version
  */
  agentVersion?: string;
  /**
   * Registered Server OS Version
  */
  serverOSVersion?: string;
  /**
   * Registered Server Management Error Code
  */
  serverManagementErrorCode?: number;
  /**
   * Registered Server last heart beat
  */
  lastHeartBeat?: string;
  /**
   * Registered Server Provisioning State
  */
  provisioningState?: string;
  /**
   * Registered Server serverRole
  */
  serverRole?: string;
  /**
   * Registered Server clusterId
  */
  clusterId?: string;
  /**
   * Registered Server clusterName
  */
  clusterName?: string;
  /**
   * Registered Server serverId
  */
  serverId?: string;
  /**
   * Registered Server storageSyncServiceUid
  */
  storageSyncServiceUid?: string;
  /**
   * Registered Server lastWorkflowId
  */
  lastWorkflowId?: string;
  /**
   * Resource Last Operation Name
  */
  lastOperationName?: string;
  /**
   * Resource discoveryEndpointUri
  */
  discoveryEndpointUri?: string;
  /**
   * Resource Location
  */
  resourceLocation?: string;
  /**
   * Service Location
  */
  serviceLocation?: string;
  /**
   * Friendly Name
  */
  friendlyName?: string;
  /**
   * Management Endpoint Uri
  */
  managementEndpointUri?: string;
  /**
   * Monitoring Configuration
  */
  monitoringConfiguration?: string;
}

/**
 * Resource Move Info.
*/
export interface ResourcesMoveInfo {
  /**
   * Target resource group.
  */
  targetResourceGroup?: string;
  /**
   * Collection of Resources.
  */
  resources?: string[];
}

/**
 * Workflow resource.
*/
export interface Workflow extends ProxyResource {
  /**
   * last step name
  */
  lastStepName?: string;
  /**
   * workflow status. Possible values include: 'active', 'expired', 'succeeded', 'aborted',
   * 'failed'
  */
  status?: string;
  /**
   * operation direction. Possible values include: 'do', 'undo', 'cancel'
  */
  operation?: string;
  /**
   * workflow steps
  */
  steps?: string;
  /**
   * workflow last operation identifier.
  */
  lastOperationId?: string;
}

/**
 * The operation supported by storage sync.
*/
export interface OperationDisplayInfo {
  /**
   * The description of the operation.
  */
  description?: string;
  /**
   * The action that users can perform, based on their permission level.
  */
  operation?: string;
  /**
   * Service provider: Microsoft StorageSync.
  */
  provider?: string;
  /**
   * Resource on which the operation is performed.
  */
  resource?: string;
}

/**
 * The operation supported by storage sync.
*/
export interface OperationEntity {
  /**
   * Operation name: {provider}/{resource}/{operation}.
  */
  name?: string;
  /**
   * The operation supported by storage sync.
  */
  display?: OperationDisplayInfo;
  /**
   * The origin.
  */
  origin?: string;
}

/**
 * Operation Display Resource object.
*/
export interface OperationDisplayResource {
  /**
   * Operation Display Resource Provider.
  */
  provider?: string;
  /**
   * Operation Display Resource.
  */
  resource?: string;
  /**
   * Operation Display Resource Operation.
  */
  operation?: string;
  /**
   * Operation Display Resource Description.
  */
  description?: string;
}

/**
 * Parameters for a check name availability request.
*/
export interface CheckNameAvailabilityParameters {
  /**
   * The name to check for availability
  */
  name: string;
}

/**
 * The CheckNameAvailability operation response.
*/
export interface CheckNameAvailabilityResult {
  /**
   * Gets a boolean value that indicates whether the name is available for you to use. If true, the
   * name is available. If false, the name has already been taken or invalid and cannot be used.
  */
  readonly nameAvailable?: boolean;
  /**
   * Gets the reason that a Storage Sync Service name could not be used. The Reason element is only
   * returned if NameAvailable is false. Possible values include: 'Invalid', 'AlreadyExists'
  */
  readonly reason?: string;
  /**
   * Gets an error message explaining the Reason value in more detail.
  */
  readonly message?: string;
}

/**
 * Restore file spec.
*/
export interface RestoreFileSpec {
  /**
   * Restore file spec path
  */
  path?: string;
  /**
   * Restore file spec isdir
  */
  readonly isdir?: boolean;
}

/**
 * Post Restore Request
*/
export interface PostRestoreRequest {
  /**
   * Post Restore partition.
  */
  partition?: string;
  /**
   * Post Restore replica group.
  */
  replicaGroup?: string;
  /**
   * Post Restore request id.
  */
  requestId?: string;
  /**
   * Post Restore Azure file share uri.
  */
  azureFileShareUri?: string;
  /**
   * Post Restore Azure status.
  */
  status?: string;
  /**
   * Post Restore Azure source azure file share uri.
  */
  sourceAzureFileShareUri?: string;
  /**
   * Post Restore Azure failed file list.
  */
  failedFileList?: string;
  /**
   * Post Restore restore file spec array.
  */
  restoreFileSpec?: RestoreFileSpec[];
}

/**
 * Pre Restore request object.
*/
export interface PreRestoreRequest {
  /**
   * Pre Restore partition.
  */
  partition?: string;
  /**
   * Pre Restore replica group.
  */
  replicaGroup?: string;
  /**
   * Pre Restore request id.
  */
  requestId?: string;
  /**
   * Pre Restore Azure file share uri.
  */
  azureFileShareUri?: string;
  /**
   * Pre Restore Azure status.
  */
  status?: string;
  /**
   * Pre Restore Azure source azure file share uri.
  */
  sourceAzureFileShareUri?: string;
  /**
   * Pre Restore backup metadata property bag.
  */
  backupMetadataPropertyBag?: string;
  /**
   * Pre Restore restore file spec array.
  */
  restoreFileSpec?: RestoreFileSpec[];
  /**
   * Pre Restore pause wait for sync drain time period in seconds.
  */
  pauseWaitForSyncDrainTimePeriodInSeconds?: number;
}

/**
 * Backup request
*/
export interface BackupRequest {
  /**
   * Azure File Share.
  */
  azureFileShare?: string;
}

/**
 * Post Backup Response
*/
export interface PostBackupResponse {
  /**
   * cloud endpoint Name.
  */
  readonly cloudEndpointName?: string;
}

/**
 * Parameters for updating an Storage sync service.
*/
export interface StorageSyncServiceUpdateParameters {
  /**
   * The user-specified tags associated with the storage sync service.
  */
  tags?: { [propertyName: string]: string };
  /**
   * The properties of the storage sync service.
  */
  properties?: any;
}

/**
 * Operation status object
*/
export interface OperationStatus {
  /**
   * Operation Id
  */
  readonly name?: string;
  /**
   * Operation status
  */
  readonly status?: string;
  /**
   * Start time of the operation
  */
  readonly startTime?: Date;
  /**
   * End time of the operation
  */
  readonly endTime?: Date;
  /**
   * Error details.
  */
  readonly error?: StorageSyncApiError;
}

/**
 * The resource model definition for a Azure Resource Manager resource with an etag.
*/
export interface AzureEntityResource extends Resource {
  /**
   * Resource Etag.
  */
  readonly etag?: string;
}

/**
 * The list of storage sync operations.
*/
export interface OperationEntityListResult extends Array<OperationEntity> {
  /**
   * The link used to get the next page of operations.
  */
  nextLink?: string;
}

/**
 * Array of StorageSyncServices
*/
export interface StorageSyncServiceArray extends Array<StorageSyncService> {
}

/**
 * Array of SyncGroup
*/
export interface SyncGroupArray extends Array<SyncGroup> {
}

/**
 * Array of CloudEndpoint
*/
export interface CloudEndpointArray extends Array<CloudEndpoint> {
}

/**
 * Array of ServerEndpoint
*/
export interface ServerEndpointArray extends Array<ServerEndpoint> {
}

/**
 * Array of RegisteredServer
*/
export interface RegisteredServerArray extends Array<RegisteredServer> {
}

/**
 * Array of Workflow
*/
export interface WorkflowArray extends Array<Workflow> {
}
