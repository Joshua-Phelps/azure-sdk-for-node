/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Azure Active Directory identity configuration for a resource.
 *
 */
class ResourceIdentity {
  /**
   * Create a ResourceIdentity.
   * @property {uuid} [principalId] The Azure Active Directory principal id.
   * @property {string} [type] The identity type. Set this to 'SystemAssigned'
   * in order to automatically create and assign an Azure Active Directory
   * principal for the resource. Possible values include: 'SystemAssigned'
   * @property {uuid} [tenantId] The Azure Active Directory tenant id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResourceIdentity
   *
   * @returns {object} metadata of ResourceIdentity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceIdentity',
      type: {
        name: 'Composite',
        className: 'ResourceIdentity',
        modelProperties: {
          principalId: {
            required: false,
            readOnly: true,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            readOnly: true,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceIdentity;
