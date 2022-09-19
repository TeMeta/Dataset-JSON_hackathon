// Transform Define-XML into Define-JSON
// This is a brute-force verbose approach based on the Define-XML schema
// All nested schema have been expanded and flattened for completeness
// Future ODMv2 as JSON efforts will break this up into concise JSON schema
var define2_1_0_Module_Factory = function () {
  var define2_1_0 = {
    name: 'define2_1_0',
    defaultElementNamespaceURI: 'http:\/\/www.cdisc.org\/ns\/odm\/v1.3',
    typeInfos: [{
        localName: 'ODMcomplexTypeDefinitionSignatureDef',
        typeName: 'ODMcomplexTypeDefinition-SignatureDef',
        propertyInfos: [{
            name: 'meaning',
            required: true,
            elementName: 'Meaning',
            typeInfo: '.ODMcomplexTypeDefinitionMeaning'
          }, {
            name: 'legalReason',
            required: true,
            elementName: 'LegalReason',
            typeInfo: '.ODMcomplexTypeDefinitionLegalReason'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'methodology',
            attributeName: {
              localPart: 'Methodology'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionCryptoBindingManifest',
        typeName: 'ODMcomplexTypeDefinition-CryptoBindingManifest',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataPartialDate',
        typeName: 'ODMcomplexTypeDefinition-ItemDataPartialDate',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SignatureMethodType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'SignatureMethodType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementName: {
              localPart: 'HMACOutputLength',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Integer',
            type: 'elementRef'
          }, {
            name: 'algorithm',
            required: true,
            attributeName: {
              localPart: 'Algorithm'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RetrievalMethodType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'RetrievalMethodType'
        },
        propertyInfos: [{
            name: 'transforms',
            elementName: {
              localPart: 'Transforms',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.TransformsType'
          }, {
            name: 'uri',
            attributeName: {
              localPart: 'URI'
            },
            type: 'attribute'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataIncompleteTime',
        typeName: 'ODMcomplexTypeDefinition-ItemDataIncompleteTime',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionUserRef',
        typeName: 'ODMcomplexTypeDefinition-UserRef',
        propertyInfos: [{
            name: 'userOID',
            required: true,
            attributeName: {
              localPart: 'UserOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataTime',
        typeName: 'ODMcomplexTypeDefinition-ItemDataTime',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Time',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionCertificate',
        typeName: 'ODMcomplexTypeDefinition-Certificate',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionExternalQuestion',
        typeName: 'ODMcomplexTypeDefinition-ExternalQuestion',
        propertyInfos: [{
            name: 'dictionary',
            attributeName: {
              localPart: 'Dictionary'
            },
            type: 'attribute'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'Version'
            },
            type: 'attribute'
          }, {
            name: 'code',
            attributeName: {
              localPart: 'Code'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionPostalCode',
        typeName: 'ODMcomplexTypeDefinition-PostalCode',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionTranslatedText',
        typeName: 'ODMcomplexTypeDefinition-TranslatedText',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionPresentation',
        typeName: 'ODMcomplexTypeDefinition-Presentation',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionMeaning',
        typeName: 'ODMcomplexTypeDefinition-Meaning',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'X509DataType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'X509DataType'
        },
        propertyInfos: [{
            name: 'x509IssuerSerialOrX509SKIOrX509SubjectName',
            required: true,
            collection: true,
            mixed: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'X509SubjectName',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                }
              }, {
                elementName: {
                  localPart: 'X509IssuerSerial',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.X509IssuerSerialType'
              }, {
                elementName: {
                  localPart: 'X509SKI',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
              }, {
                elementName: {
                  localPart: 'X509Certificate',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
              }, {
                elementName: {
                  localPart: 'X509CRL',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionStudyDescription',
        typeName: 'ODMcomplexTypeDefinition-StudyDescription',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionErrorMessage',
        typeName: 'ODMcomplexTypeDefinition-ErrorMessage',
        propertyInfos: [{
            name: 'translatedText',
            required: true,
            collection: true,
            elementName: 'TranslatedText',
            typeInfo: '.ODMcomplexTypeDefinitionTranslatedText'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionDescription',
        typeName: 'ODMcomplexTypeDefinition-Description',
        propertyInfos: [{
            name: 'translatedText',
            required: true,
            collection: true,
            elementName: 'TranslatedText',
            typeInfo: '.ODMcomplexTypeDefinitionTranslatedText'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionCity',
        typeName: 'ODMcomplexTypeDefinition-City',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionOtherText',
        typeName: 'ODMcomplexTypeDefinition-OtherText',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataHexFloat',
        typeName: 'ODMcomplexTypeDefinition-ItemDataHexFloat',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'HexBinary',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataDate',
        typeName: 'ODMcomplexTypeDefinition-ItemDataDate',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Date',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionAssociation',
        typeName: 'ODMcomplexTypeDefinition-Association',
        propertyInfos: [{
            name: 'content',
            required: true,
            minOccurs: 3,
            maxOccurs: 3,
            collection: true,
            mixed: false,
            allowDom: false,
            elementTypeInfos: [{
                elementName: 'Annotation',
                typeInfo: '.ODMcomplexTypeDefinitionAnnotation'
              }, {
                elementName: 'KeySet',
                typeInfo: '.ODMcomplexTypeDefinitionKeySet'
              }],
            type: 'elementRefs'
          }, {
            name: 'studyOID',
            required: true,
            attributeName: {
              localPart: 'StudyOID'
            },
            type: 'attribute'
          }, {
            name: 'metaDataVersionOID',
            required: true,
            attributeName: {
              localPart: 'MetaDataVersionOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionOrganization',
        typeName: 'ODMcomplexTypeDefinition-Organization',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFormData',
        typeName: 'ODMcomplexTypeDefinition-FormData',
        propertyInfos: [{
            name: 'auditRecord',
            elementName: 'AuditRecord',
            typeInfo: '.ODMcomplexTypeDefinitionAuditRecord'
          }, {
            name: 'signature',
            elementName: 'Signature',
            typeInfo: '.ODMcomplexTypeDefinitionSignature'
          }, {
            name: 'archiveLayoutRef',
            elementName: 'ArchiveLayoutRef',
            typeInfo: '.ODMcomplexTypeDefinitionArchiveLayoutRef'
          }, {
            name: 'annotation',
            minOccurs: 0,
            collection: true,
            elementName: 'Annotation',
            typeInfo: '.ODMcomplexTypeDefinitionAnnotation'
          }, {
            name: 'itemGroupData',
            minOccurs: 0,
            collection: true,
            elementName: 'ItemGroupData',
            typeInfo: '.ODMcomplexTypeDefinitionItemGroupData'
          }, {
            name: 'formOID',
            required: true,
            attributeName: {
              localPart: 'FormOID'
            },
            type: 'attribute'
          }, {
            name: 'formRepeatKey',
            attributeName: {
              localPart: 'FormRepeatKey'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataBase64Float',
        typeName: 'ODMcomplexTypeDefinition-ItemDataBase64Float',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Base64Binary',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionQuestion',
        typeName: 'ODMcomplexTypeDefinition-Question',
        propertyInfos: [{
            name: 'translatedText',
            required: true,
            collection: true,
            elementName: 'TranslatedText',
            typeInfo: '.ODMcomplexTypeDefinitionTranslatedText'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFormDef',
        typeName: 'ODMcomplexTypeDefinition-FormDef',
        propertyInfos: [{
            name: 'description',
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'itemGroupRef',
            minOccurs: 0,
            collection: true,
            elementName: 'ItemGroupRef',
            typeInfo: '.ODMcomplexTypeDefinitionItemGroupRef'
          }, {
            name: 'archiveLayout',
            minOccurs: 0,
            collection: true,
            elementName: 'ArchiveLayout',
            typeInfo: '.ODMcomplexTypeDefinitionArchiveLayout'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'repeating',
            required: true,
            attributeName: {
              localPart: 'Repeating'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionStudyEventRef',
        typeName: 'ODMcomplexTypeDefinition-StudyEventRef',
        propertyInfos: [{
            name: 'studyEventOID',
            required: true,
            attributeName: {
              localPart: 'StudyEventOID'
            },
            type: 'attribute'
          }, {
            name: 'orderNumber',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'OrderNumber'
            },
            type: 'attribute'
          }, {
            name: 'mandatory',
            required: true,
            attributeName: {
              localPart: 'Mandatory'
            },
            type: 'attribute'
          }, {
            name: 'collectionExceptionConditionOID',
            attributeName: {
              localPart: 'CollectionExceptionConditionOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionInvestigatorRef',
        typeName: 'ODMcomplexTypeDefinition-InvestigatorRef',
        propertyInfos: [{
            name: 'userOID',
            required: true,
            attributeName: {
              localPart: 'UserOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ObjectType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'ObjectType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }, {
            name: 'mimeType',
            attributeName: {
              localPart: 'MimeType'
            },
            type: 'attribute'
          }, {
            name: 'encoding',
            attributeName: {
              localPart: 'Encoding'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionInclude',
        typeName: 'ODMcomplexTypeDefinition-Include',
        propertyInfos: [{
            name: 'studyOID',
            required: true,
            attributeName: {
              localPart: 'StudyOID'
            },
            type: 'attribute'
          }, {
            name: 'metaDataVersionOID',
            required: true,
            attributeName: {
              localPart: 'MetaDataVersionOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionMetaDataVersion',
        typeName: 'ODMcomplexTypeDefinition-MetaDataVersion',
        propertyInfos: [{
            name: 'standards',
            elementName: {
              localPart: 'Standards',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionStandards'
          }, {
            name: 'annotatedCRF',
            elementName: {
              localPart: 'AnnotatedCRF',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionAnnotatedCRF'
          }, {
            name: 'supplementalDoc',
            elementName: {
              localPart: 'SupplementalDoc',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionSupplementalDoc'
          }, {
            name: 'valueListDef',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'ValueListDef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionValueListDef'
          }, {
            name: 'whereClauseDef',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'WhereClauseDef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionWhereClauseDef'
          }, {
            name: 'include',
            elementName: 'Include',
            typeInfo: '.ODMcomplexTypeDefinitionInclude'
          }, {
            name: 'protocol',
            elementName: 'Protocol',
            typeInfo: '.ODMcomplexTypeDefinitionProtocol'
          }, {
            name: 'studyEventDef',
            minOccurs: 0,
            collection: true,
            elementName: 'StudyEventDef',
            typeInfo: '.ODMcomplexTypeDefinitionStudyEventDef'
          }, {
            name: 'formDef',
            minOccurs: 0,
            collection: true,
            elementName: 'FormDef',
            typeInfo: '.ODMcomplexTypeDefinitionFormDef'
          }, {
            name: 'itemGroupDef',
            minOccurs: 0,
            collection: true,
            elementName: 'ItemGroupDef',
            typeInfo: '.ODMcomplexTypeDefinitionItemGroupDef'
          }, {
            name: 'itemDef',
            minOccurs: 0,
            collection: true,
            elementName: 'ItemDef',
            typeInfo: '.ODMcomplexTypeDefinitionItemDef'
          }, {
            name: 'codeList',
            minOccurs: 0,
            collection: true,
            elementName: 'CodeList',
            typeInfo: '.ODMcomplexTypeDefinitionCodeList'
          }, {
            name: 'imputationMethod',
            minOccurs: 0,
            collection: true,
            elementName: 'ImputationMethod',
            typeInfo: '.ODMcomplexTypeDefinitionImputationMethod'
          }, {
            name: 'presentation',
            minOccurs: 0,
            collection: true,
            elementName: 'Presentation',
            typeInfo: '.ODMcomplexTypeDefinitionPresentation'
          }, {
            name: 'conditionDef',
            minOccurs: 0,
            collection: true,
            elementName: 'ConditionDef',
            typeInfo: '.ODMcomplexTypeDefinitionConditionDef'
          }, {
            name: 'methodDef',
            minOccurs: 0,
            collection: true,
            elementName: 'MethodDef',
            typeInfo: '.ODMcomplexTypeDefinitionMethodDef'
          }, {
            name: 'commentDef',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'CommentDef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionCommentDef'
          }, {
            name: 'leaf',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'leaf',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionLeaf'
          }, {
            name: 'defineVersion',
            required: true,
            attributeName: {
              localPart: 'DefineVersion',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'commentOID',
            attributeName: {
              localPart: 'CommentOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'description',
            attributeName: {
              localPart: 'Description'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionAnnotatedCRF',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-AnnotatedCRF'
        },
        propertyInfos: [{
            name: 'documentRef',
            required: true,
            collection: true,
            elementName: {
              localPart: 'DocumentRef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionDocumentRef'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionMeasurementUnitRef',
        typeName: 'ODMcomplexTypeDefinition-MeasurementUnitRef',
        propertyInfos: [{
            name: 'measurementUnitOID',
            required: true,
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionLegalReason',
        typeName: 'ODMcomplexTypeDefinition-LegalReason',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'DSAKeyValueType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'DSAKeyValueType'
        },
        propertyInfos: [{
            name: 'p',
            required: true,
            elementName: {
              localPart: 'P',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'q',
            required: true,
            elementName: {
              localPart: 'Q',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'g',
            elementName: {
              localPart: 'G',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'y',
            required: true,
            elementName: {
              localPart: 'Y',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'j',
            elementName: {
              localPart: 'J',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'seed',
            required: true,
            elementName: {
              localPart: 'Seed',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'pgenCounter',
            required: true,
            elementName: {
              localPart: 'PgenCounter',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionEmail',
        typeName: 'ODMcomplexTypeDefinition-Email',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionLocationRef',
        typeName: 'ODMcomplexTypeDefinition-LocationRef',
        propertyInfos: [{
            name: 'locationOID',
            required: true,
            attributeName: {
              localPart: 'LocationOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SignatureValueType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'SignatureValueType'
        },
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Base64Binary',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionStateProv',
        typeName: 'ODMcomplexTypeDefinition-StateProv',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionAuditRecord',
        typeName: 'ODMcomplexTypeDefinition-AuditRecord',
        propertyInfos: [{
            name: 'userRef',
            required: true,
            elementName: 'UserRef',
            typeInfo: '.ODMcomplexTypeDefinitionUserRef'
          }, {
            name: 'locationRef',
            required: true,
            elementName: 'LocationRef',
            typeInfo: '.ODMcomplexTypeDefinitionLocationRef'
          }, {
            name: 'dateTimeStamp',
            required: true,
            elementName: 'DateTimeStamp',
            typeInfo: '.ODMcomplexTypeDefinitionDateTimeStamp'
          }, {
            name: 'reasonForChange',
            elementName: 'ReasonForChange',
            typeInfo: '.ODMcomplexTypeDefinitionReasonForChange'
          }, {
            name: 'sourceID',
            elementName: 'SourceID',
            typeInfo: '.ODMcomplexTypeDefinitionSourceID'
          }, {
            name: 'editPoint',
            attributeName: {
              localPart: 'EditPoint'
            },
            type: 'attribute'
          }, {
            name: 'usedImputationMethod',
            attributeName: {
              localPart: 'UsedImputationMethod'
            },
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'ID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionCheckValue',
        typeName: 'ODMcomplexTypeDefinition-CheckValue',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionCodeListRef',
        typeName: 'ODMcomplexTypeDefinition-CodeListRef',
        propertyInfos: [{
            name: 'codeListOID',
            required: true,
            attributeName: {
              localPart: 'CodeListOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionSubClass',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-SubClass'
        },
        propertyInfos: [{
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'parentClass',
            attributeName: {
              localPart: 'ParentClass'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionLastName',
        typeName: 'ODMcomplexTypeDefinition-LastName',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionSubjectData',
        typeName: 'ODMcomplexTypeDefinition-SubjectData',
        propertyInfos: [{
            name: 'auditRecord',
            elementName: 'AuditRecord',
            typeInfo: '.ODMcomplexTypeDefinitionAuditRecord'
          }, {
            name: 'signature',
            elementName: 'Signature',
            typeInfo: '.ODMcomplexTypeDefinitionSignature'
          }, {
            name: 'investigatorRef',
            elementName: 'InvestigatorRef',
            typeInfo: '.ODMcomplexTypeDefinitionInvestigatorRef'
          }, {
            name: 'siteRef',
            elementName: 'SiteRef',
            typeInfo: '.ODMcomplexTypeDefinitionSiteRef'
          }, {
            name: 'annotation',
            minOccurs: 0,
            collection: true,
            elementName: 'Annotation',
            typeInfo: '.ODMcomplexTypeDefinitionAnnotation'
          }, {
            name: 'studyEventData',
            minOccurs: 0,
            collection: true,
            elementName: 'StudyEventData',
            typeInfo: '.ODMcomplexTypeDefinitionStudyEventData'
          }, {
            name: 'subjectKey',
            required: true,
            attributeName: {
              localPart: 'SubjectKey'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionLoginName',
        typeName: 'ODMcomplexTypeDefinition-LoginName',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionPager',
        typeName: 'ODMcomplexTypeDefinition-Pager',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'CanonicalizationMethodType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'CanonicalizationMethodType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            type: 'anyElement'
          }, {
            name: 'algorithm',
            required: true,
            attributeName: {
              localPart: 'Algorithm'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemGroupData',
        typeName: 'ODMcomplexTypeDefinition-ItemGroupData',
        propertyInfos: [{
            name: 'auditRecord',
            elementName: 'AuditRecord',
            typeInfo: '.ODMcomplexTypeDefinitionAuditRecord'
          }, {
            name: 'signature',
            elementName: 'Signature',
            typeInfo: '.ODMcomplexTypeDefinitionSignature'
          }, {
            name: 'annotation',
            minOccurs: 0,
            collection: true,
            elementName: 'Annotation',
            typeInfo: '.ODMcomplexTypeDefinitionAnnotation'
          }, {
            name: 'itemDataGroup',
            minOccurs: 0,
            collection: true,
            elementName: 'ItemData',
            typeInfo: '.ODMcomplexTypeDefinitionItemData'
          }, {
            name: 'itemDataStarGroup',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'ItemDataURI',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataURI'
              }, {
                elementName: 'ItemDataAny',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataAny'
              }, {
                elementName: 'ItemDataBoolean',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataBoolean'
              }, {
                elementName: 'ItemDataString',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataString'
              }, {
                elementName: 'ItemDataInteger',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataInteger'
              }, {
                elementName: 'ItemDataFloat',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataFloat'
              }, {
                elementName: 'ItemDataDouble',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataDouble'
              }, {
                elementName: 'ItemDataDate',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataDate'
              }, {
                elementName: 'ItemDataTime',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataTime'
              }, {
                elementName: 'ItemDataDatetime',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataDatetime'
              }, {
                elementName: 'ItemDataHexBinary',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataHexBinary'
              }, {
                elementName: 'ItemDataBase64Binary',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataBase64Binary'
              }, {
                elementName: 'ItemDataHexFloat',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataHexFloat'
              }, {
                elementName: 'ItemDataBase64Float',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataBase64Float'
              }, {
                elementName: 'ItemDataPartialDate',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataPartialDate'
              }, {
                elementName: 'ItemDataPartialTime',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataPartialTime'
              }, {
                elementName: 'ItemDataPartialDatetime',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataPartialDatetime'
              }, {
                elementName: 'ItemDataDurationDatetime',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataDurationDatetime'
              }, {
                elementName: 'ItemDataIntervalDatetime',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataIntervalDatetime'
              }, {
                elementName: 'ItemDataIncompleteDatetime',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataIncompleteDatetime'
              }, {
                elementName: 'ItemDataIncompleteDate',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataIncompleteDate'
              }, {
                elementName: 'ItemDataIncompleteTime',
                typeInfo: '.ODMcomplexTypeDefinitionItemDataIncompleteTime'
              }],
            type: 'elements'
          }, {
            name: 'itemGroupOID',
            required: true,
            attributeName: {
              localPart: 'ItemGroupOID'
            },
            type: 'attribute'
          }, {
            name: 'itemGroupRepeatKey',
            attributeName: {
              localPart: 'ItemGroupRepeatKey'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionAlias',
        typeName: 'ODMcomplexTypeDefinition-Alias',
        propertyInfos: [{
            name: 'context',
            required: true,
            attributeName: {
              localPart: 'Context'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataAny',
        typeName: 'ODMcomplexTypeDefinition-ItemDataAny',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'isNull',
            attributeName: {
              localPart: 'IsNull'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'KeyValueType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'KeyValueType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'DSAKeyValue',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.DSAKeyValueType'
              }, {
                elementName: {
                  localPart: 'RSAKeyValue',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.RSAKeyValueType'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataIncompleteDate',
        typeName: 'ODMcomplexTypeDefinition-ItemDataIncompleteDate',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDef',
        typeName: 'ODMcomplexTypeDefinition-ItemDef',
        propertyInfos: [{
            name: 'description',
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'question',
            elementName: 'Question',
            typeInfo: '.ODMcomplexTypeDefinitionQuestion'
          }, {
            name: 'externalQuestion',
            elementName: 'ExternalQuestion',
            typeInfo: '.ODMcomplexTypeDefinitionExternalQuestion'
          }, {
            name: 'measurementUnitRef',
            minOccurs: 0,
            collection: true,
            elementName: 'MeasurementUnitRef',
            typeInfo: '.ODMcomplexTypeDefinitionMeasurementUnitRef'
          }, {
            name: 'rangeCheck',
            minOccurs: 0,
            collection: true,
            elementName: 'RangeCheck',
            typeInfo: '.ODMcomplexTypeDefinitionRangeCheck'
          }, {
            name: 'codeListRef',
            elementName: 'CodeListRef',
            typeInfo: '.ODMcomplexTypeDefinitionCodeListRef'
          }, {
            name: 'role',
            minOccurs: 0,
            collection: true,
            elementName: 'Role',
            typeInfo: '.ODMcomplexTypeDefinitionRole'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'itemDefElementExtension',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'Origin',
                  namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
                },
                typeInfo: '.DEFINEcomplexTypeDefinitionOrigin'
              }, {
                elementName: {
                  localPart: 'ValueListRef',
                  namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
                },
                typeInfo: '.DEFINEcomplexTypeDefinitionValueListRef'
              }],
            type: 'elements'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'dataType',
            required: true,
            attributeName: {
              localPart: 'DataType'
            },
            type: 'attribute'
          }, {
            name: 'length',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'Length'
            },
            type: 'attribute'
          }, {
            name: 'significantDigits',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'SignificantDigits'
            },
            type: 'attribute'
          }, {
            name: 'sasFieldName',
            attributeName: {
              localPart: 'SASFieldName'
            },
            type: 'attribute'
          }, {
            name: 'sdsVarName',
            attributeName: {
              localPart: 'SDSVarName'
            },
            type: 'attribute'
          }, {
            name: 'origin',
            attributeName: {
              localPart: 'Origin'
            },
            type: 'attribute'
          }, {
            name: 'comment',
            attributeName: {
              localPart: 'Comment'
            },
            type: 'attribute'
          }, {
            name: 'displayFormat',
            attributeName: {
              localPart: 'DisplayFormat',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'commentOID',
            attributeName: {
              localPart: 'CommentOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionConditionDef',
        typeName: 'ODMcomplexTypeDefinition-ConditionDef',
        propertyInfos: [{
            name: 'description',
            required: true,
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'formalExpression',
            minOccurs: 0,
            collection: true,
            elementName: 'FormalExpression',
            typeInfo: '.ODMcomplexTypeDefinitionFormalExpression'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionMeasurementUnit',
        typeName: 'ODMcomplexTypeDefinition-MeasurementUnit',
        propertyInfos: [{
            name: 'symbol',
            required: true,
            elementName: 'Symbol',
            typeInfo: '.ODMcomplexTypeDefinitionSymbol'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionProtocolName',
        typeName: 'ODMcomplexTypeDefinition-ProtocolName',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionSignatureRef',
        typeName: 'ODMcomplexTypeDefinition-SignatureRef',
        propertyInfos: [{
            name: 'signatureOID',
            required: true,
            attributeName: {
              localPart: 'SignatureOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataPartialTime',
        typeName: 'ODMcomplexTypeDefinition-ItemDataPartialTime',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionCommentDef',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-CommentDef'
        },
        propertyInfos: [{
            name: 'description',
            required: true,
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'documentRef',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'DocumentRef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionDocumentRef'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataBoolean',
        typeName: 'ODMcomplexTypeDefinition-ItemDataBoolean',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Boolean',
            type: 'value'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionPDFPageRef',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-PDFPageRef'
        },
        propertyInfos: [{
            name: 'pageRefs',
            attributeName: {
              localPart: 'PageRefs'
            },
            type: 'attribute'
          }, {
            name: 'firstPage',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'FirstPage'
            },
            type: 'attribute'
          }, {
            name: 'lastPage',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'LastPage'
            },
            type: 'attribute'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }, {
            name: 'title',
            attributeName: {
              localPart: 'Title'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionClass',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-Class'
        },
        propertyInfos: [{
            name: 'subClass',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'SubClass',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionSubClass'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionDecode',
        typeName: 'ODMcomplexTypeDefinition-Decode',
        propertyInfos: [{
            name: 'translatedText',
            required: true,
            collection: true,
            elementName: 'TranslatedText',
            typeInfo: '.ODMcomplexTypeDefinitionTranslatedText'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionAnnotation',
        typeName: 'ODMcomplexTypeDefinition-Annotation',
        propertyInfos: [{
            name: 'comment',
            elementName: 'Comment',
            typeInfo: '.ODMcomplexTypeDefinitionComment'
          }, {
            name: 'flag',
            minOccurs: 0,
            collection: true,
            elementName: 'Flag',
            typeInfo: '.ODMcomplexTypeDefinitionFlag'
          }, {
            name: 'seqNum',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'SeqNum'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'ID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionSourceID',
        typeName: 'ODMcomplexTypeDefinition-SourceID',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'SignaturePropertyType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'SignaturePropertyType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'target',
            required: true,
            attributeName: {
              localPart: 'Target'
            },
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataHexBinary',
        typeName: 'ODMcomplexTypeDefinition-ItemDataHexBinary',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'HexBinary',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RSAKeyValueType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'RSAKeyValueType'
        },
        propertyInfos: [{
            name: 'modulus',
            required: true,
            elementName: {
              localPart: 'Modulus',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'exponent',
            required: true,
            elementName: {
              localPart: 'Exponent',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFullName',
        typeName: 'ODMcomplexTypeDefinition-FullName',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionSymbol',
        typeName: 'ODMcomplexTypeDefinition-Symbol',
        propertyInfos: [{
            name: 'translatedText',
            required: true,
            collection: true,
            elementName: 'TranslatedText',
            typeInfo: '.ODMcomplexTypeDefinitionTranslatedText'
          }]
      }, {
        localName: 'SPKIDataType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'SPKIDataType'
        },
        propertyInfos: [{
            name: 'spkiSexpAndAny',
            required: true,
            collection: true,
            mixed: false,
            elementName: {
              localPart: 'SPKISexp',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            type: 'elementRef'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemData',
        typeName: 'ODMcomplexTypeDefinition-ItemData',
        propertyInfos: [{
            name: 'auditRecord',
            elementName: 'AuditRecord',
            typeInfo: '.ODMcomplexTypeDefinitionAuditRecord'
          }, {
            name: 'signature',
            elementName: 'Signature',
            typeInfo: '.ODMcomplexTypeDefinitionSignature'
          }, {
            name: 'measurementUnitRef',
            elementName: 'MeasurementUnitRef',
            typeInfo: '.ODMcomplexTypeDefinitionMeasurementUnitRef'
          }, {
            name: 'annotation',
            minOccurs: 0,
            collection: true,
            elementName: 'Annotation',
            typeInfo: '.ODMcomplexTypeDefinitionAnnotation'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'isNull',
            attributeName: {
              localPart: 'IsNull'
            },
            type: 'attribute'
          }, {
            name: 'value',
            attributeName: {
              localPart: 'Value'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataDatetime',
        typeName: 'ODMcomplexTypeDefinition-ItemDataDatetime',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'DateTime',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionValueListRef',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-ValueListRef'
        },
        propertyInfos: [{
            name: 'valueListOID',
            required: true,
            attributeName: {
              localPart: 'ValueListOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionPicture',
        typeName: 'ODMcomplexTypeDefinition-Picture',
        propertyInfos: [{
            name: 'pictureFileName',
            required: true,
            attributeName: {
              localPart: 'PictureFileName'
            },
            type: 'attribute'
          }, {
            name: 'imageType',
            attributeName: {
              localPart: 'ImageType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemGroupRef',
        typeName: 'ODMcomplexTypeDefinition-ItemGroupRef',
        propertyInfos: [{
            name: 'orderNumber',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'OrderNumber'
            },
            type: 'attribute'
          }, {
            name: 'mandatory',
            required: true,
            attributeName: {
              localPart: 'Mandatory'
            },
            type: 'attribute'
          }, {
            name: 'collectionExceptionConditionOID',
            attributeName: {
              localPart: 'CollectionExceptionConditionOID'
            },
            type: 'attribute'
          }, {
            name: 'itemGroupOID',
            required: true,
            attributeName: {
              localPart: 'ItemGroupOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionCodeList',
        typeName: 'ODMcomplexTypeDefinition-CodeList',
        propertyInfos: [{
            name: 'description',
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'codeListItem',
            required: true,
            collection: true,
            elementName: 'CodeListItem',
            typeInfo: '.ODMcomplexTypeDefinitionCodeListItem'
          }, {
            name: 'externalCodeList',
            required: true,
            elementName: 'ExternalCodeList',
            typeInfo: '.ODMcomplexTypeDefinitionExternalCodeList'
          }, {
            name: 'enumeratedItem',
            required: true,
            collection: true,
            elementName: 'EnumeratedItem',
            typeInfo: '.ODMcomplexTypeDefinitionEnumeratedItem'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'dataType',
            required: true,
            attributeName: {
              localPart: 'DataType'
            },
            type: 'attribute'
          }, {
            name: 'sasFormatName',
            attributeName: {
              localPart: 'SASFormatName'
            },
            type: 'attribute'
          }, {
            name: 'standardOID',
            attributeName: {
              localPart: 'StandardOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'isNonStandard',
            attributeName: {
              localPart: 'IsNonStandard',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'commentOID',
            attributeName: {
              localPart: 'CommentOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataIntervalDatetime',
        typeName: 'ODMcomplexTypeDefinition-ItemDataIntervalDatetime',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionArchiveLayout',
        typeName: 'ODMcomplexTypeDefinition-ArchiveLayout',
        propertyInfos: [{
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'pdfFileName',
            required: true,
            attributeName: {
              localPart: 'PdfFileName'
            },
            type: 'attribute'
          }, {
            name: 'presentationOID',
            attributeName: {
              localPart: 'PresentationOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionDisplayName',
        typeName: 'ODMcomplexTypeDefinition-DisplayName',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionDateTimeStamp',
        typeName: 'ODMcomplexTypeDefinition-DateTimeStamp',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'DateTime',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataIncompleteDatetime',
        typeName: 'ODMcomplexTypeDefinition-ItemDataIncompleteDatetime',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionSiteRef',
        typeName: 'ODMcomplexTypeDefinition-SiteRef',
        propertyInfos: [{
            name: 'locationOID',
            required: true,
            attributeName: {
              localPart: 'LocationOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODM',
        typeName: null,
        propertyInfos: [{
            name: 'study',
            minOccurs: 0,
            collection: true,
            elementName: 'Study',
            typeInfo: '.ODMcomplexTypeDefinitionStudy'
          }, {
            name: 'adminData',
            minOccurs: 0,
            collection: true,
            elementName: 'AdminData',
            typeInfo: '.ODMcomplexTypeDefinitionAdminData'
          }, {
            name: 'referenceData',
            minOccurs: 0,
            collection: true,
            elementName: 'ReferenceData',
            typeInfo: '.ODMcomplexTypeDefinitionReferenceData'
          }, {
            name: 'clinicalData',
            minOccurs: 0,
            collection: true,
            elementName: 'ClinicalData',
            typeInfo: '.ODMcomplexTypeDefinitionClinicalData'
          }, {
            name: 'association',
            minOccurs: 0,
            collection: true,
            elementName: 'Association',
            typeInfo: '.ODMcomplexTypeDefinitionAssociation'
          }, {
            name: 'signature',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'Signature',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureType'
          }, {
            name: 'context',
            required: true,
            attributeName: {
              localPart: 'Context',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'description',
            attributeName: {
              localPart: 'Description'
            },
            type: 'attribute'
          }, {
            name: 'fileType',
            required: true,
            attributeName: {
              localPart: 'FileType'
            },
            type: 'attribute'
          }, {
            name: 'granularity',
            attributeName: {
              localPart: 'Granularity'
            },
            type: 'attribute'
          }, {
            name: 'archival',
            attributeName: {
              localPart: 'Archival'
            },
            type: 'attribute'
          }, {
            name: 'fileOID',
            required: true,
            attributeName: {
              localPart: 'FileOID'
            },
            type: 'attribute'
          }, {
            name: 'creationDateTime',
            required: true,
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'CreationDateTime'
            },
            type: 'attribute'
          }, {
            name: 'priorFileOID',
            attributeName: {
              localPart: 'PriorFileOID'
            },
            type: 'attribute'
          }, {
            name: 'asOfDateTime',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'AsOfDateTime'
            },
            type: 'attribute'
          }, {
            name: 'odmVersion',
            attributeName: {
              localPart: 'ODMVersion'
            },
            type: 'attribute'
          }, {
            name: 'originator',
            attributeName: {
              localPart: 'Originator'
            },
            type: 'attribute'
          }, {
            name: 'sourceSystem',
            attributeName: {
              localPart: 'SourceSystem'
            },
            type: 'attribute'
          }, {
            name: 'sourceSystemVersion',
            attributeName: {
              localPart: 'SourceSystemVersion'
            },
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'ID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionAdminData',
        typeName: 'ODMcomplexTypeDefinition-AdminData',
        propertyInfos: [{
            name: 'user',
            minOccurs: 0,
            collection: true,
            elementName: 'User',
            typeInfo: '.ODMcomplexTypeDefinitionUser'
          }, {
            name: 'location',
            minOccurs: 0,
            collection: true,
            elementName: 'Location',
            typeInfo: '.ODMcomplexTypeDefinitionLocation'
          }, {
            name: 'signatureDef',
            minOccurs: 0,
            collection: true,
            elementName: 'SignatureDef',
            typeInfo: '.ODMcomplexTypeDefinitionSignatureDef'
          }, {
            name: 'studyOID',
            attributeName: {
              localPart: 'StudyOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionRole',
        typeName: 'ODMcomplexTypeDefinition-Role',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'X509IssuerSerialType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'X509IssuerSerialType'
        },
        propertyInfos: [{
            name: 'x509IssuerName',
            required: true,
            elementName: {
              localPart: 'X509IssuerName',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            }
          }, {
            name: 'x509SerialNumber',
            required: true,
            elementName: {
              localPart: 'X509SerialNumber',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Integer'
          }]
      }, {
        localName: 'SignaturePropertiesType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'SignaturePropertiesType'
        },
        propertyInfos: [{
            name: 'signatureProperty',
            required: true,
            collection: true,
            elementName: {
              localPart: 'SignatureProperty',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignaturePropertyType'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionReferenceData',
        typeName: 'ODMcomplexTypeDefinition-ReferenceData',
        propertyInfos: [{
            name: 'itemGroupData',
            minOccurs: 0,
            collection: true,
            elementName: 'ItemGroupData',
            typeInfo: '.ODMcomplexTypeDefinitionItemGroupData'
          }, {
            name: 'auditRecords',
            minOccurs: 0,
            collection: true,
            elementName: 'AuditRecords',
            typeInfo: '.ODMcomplexTypeDefinitionAuditRecords'
          }, {
            name: 'signatures',
            minOccurs: 0,
            collection: true,
            elementName: 'Signatures',
            typeInfo: '.ODMcomplexTypeDefinitionSignatures'
          }, {
            name: 'annotations',
            minOccurs: 0,
            collection: true,
            elementName: 'Annotations',
            typeInfo: '.ODMcomplexTypeDefinitionAnnotations'
          }, {
            name: 'studyOID',
            required: true,
            attributeName: {
              localPart: 'StudyOID'
            },
            type: 'attribute'
          }, {
            name: 'metaDataVersionOID',
            required: true,
            attributeName: {
              localPart: 'MetaDataVersionOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ManifestType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'ManifestType'
        },
        propertyInfos: [{
            name: 'reference',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Reference',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ReferenceType'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionProtocol',
        typeName: 'ODMcomplexTypeDefinition-Protocol',
        propertyInfos: [{
            name: 'description',
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'studyEventRef',
            minOccurs: 0,
            collection: true,
            elementName: 'StudyEventRef',
            typeInfo: '.ODMcomplexTypeDefinitionStudyEventRef'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFlag',
        typeName: 'ODMcomplexTypeDefinition-Flag',
        propertyInfos: [{
            name: 'flagValue',
            required: true,
            elementName: 'FlagValue',
            typeInfo: '.ODMcomplexTypeDefinitionFlagValue'
          }, {
            name: 'flagType',
            elementName: 'FlagType',
            typeInfo: '.ODMcomplexTypeDefinitionFlagType'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataString',
        typeName: 'ODMcomplexTypeDefinition-ItemDataString',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionArchiveLayoutRef',
        typeName: 'ODMcomplexTypeDefinition-ArchiveLayoutRef',
        propertyInfos: [{
            name: 'archiveLayoutOID',
            required: true,
            attributeName: {
              localPart: 'ArchiveLayoutOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionCountry',
        typeName: 'ODMcomplexTypeDefinition-Country',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ReferenceType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'ReferenceType'
        },
        propertyInfos: [{
            name: 'transforms',
            elementName: {
              localPart: 'Transforms',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.TransformsType'
          }, {
            name: 'digestMethod',
            required: true,
            elementName: {
              localPart: 'DigestMethod',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.DigestMethodType'
          }, {
            name: 'digestValue',
            required: true,
            elementName: {
              localPart: 'DigestValue',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }, {
            name: 'uri',
            attributeName: {
              localPart: 'URI'
            },
            type: 'attribute'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionPhone',
        typeName: 'ODMcomplexTypeDefinition-Phone',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionWhereClauseRef',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-WhereClauseRef'
        },
        propertyInfos: [{
            name: 'whereClauseOID',
            required: true,
            attributeName: {
              localPart: 'WhereClauseOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionLocation',
        typeName: 'ODMcomplexTypeDefinition-Location',
        propertyInfos: [{
            name: 'metaDataVersionRef',
            required: true,
            collection: true,
            elementName: 'MetaDataVersionRef',
            typeInfo: '.ODMcomplexTypeDefinitionMetaDataVersionRef'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'locationType',
            attributeName: {
              localPart: 'LocationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFirstName',
        typeName: 'ODMcomplexTypeDefinition-FirstName',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFax',
        typeName: 'ODMcomplexTypeDefinition-Fax',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataInteger',
        typeName: 'ODMcomplexTypeDefinition-ItemDataInteger',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionGlobalVariables',
        typeName: 'ODMcomplexTypeDefinition-GlobalVariables',
        propertyInfos: [{
            name: 'studyName',
            required: true,
            elementName: 'StudyName',
            typeInfo: '.ODMcomplexTypeDefinitionStudyName'
          }, {
            name: 'studyDescription',
            required: true,
            elementName: 'StudyDescription',
            typeInfo: '.ODMcomplexTypeDefinitionStudyDescription'
          }, {
            name: 'protocolName',
            required: true,
            elementName: 'ProtocolName',
            typeInfo: '.ODMcomplexTypeDefinitionProtocolName'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionUser',
        typeName: 'ODMcomplexTypeDefinition-User',
        propertyInfos: [{
            name: 'loginName',
            elementName: 'LoginName',
            typeInfo: '.ODMcomplexTypeDefinitionLoginName'
          }, {
            name: 'displayName',
            elementName: 'DisplayName',
            typeInfo: '.ODMcomplexTypeDefinitionDisplayName'
          }, {
            name: 'fullName',
            elementName: 'FullName',
            typeInfo: '.ODMcomplexTypeDefinitionFullName'
          }, {
            name: 'firstName',
            elementName: 'FirstName',
            typeInfo: '.ODMcomplexTypeDefinitionFirstName'
          }, {
            name: 'lastName',
            elementName: 'LastName',
            typeInfo: '.ODMcomplexTypeDefinitionLastName'
          }, {
            name: 'organization',
            elementName: 'Organization',
            typeInfo: '.ODMcomplexTypeDefinitionOrganization'
          }, {
            name: 'address',
            minOccurs: 0,
            collection: true,
            elementName: 'Address',
            typeInfo: '.ODMcomplexTypeDefinitionAddress'
          }, {
            name: 'email',
            minOccurs: 0,
            collection: true,
            elementName: 'Email',
            typeInfo: '.ODMcomplexTypeDefinitionEmail'
          }, {
            name: 'picture',
            elementName: 'Picture',
            typeInfo: '.ODMcomplexTypeDefinitionPicture'
          }, {
            name: 'pager',
            elementName: 'Pager',
            typeInfo: '.ODMcomplexTypeDefinitionPager'
          }, {
            name: 'fax',
            minOccurs: 0,
            collection: true,
            elementName: 'Fax',
            typeInfo: '.ODMcomplexTypeDefinitionFax'
          }, {
            name: 'phone',
            minOccurs: 0,
            collection: true,
            elementName: 'Phone',
            typeInfo: '.ODMcomplexTypeDefinitionPhone'
          }, {
            name: 'locationRef',
            minOccurs: 0,
            collection: true,
            elementName: 'LocationRef',
            typeInfo: '.ODMcomplexTypeDefinitionLocationRef'
          }, {
            name: 'certificate',
            minOccurs: 0,
            collection: true,
            elementName: 'Certificate',
            typeInfo: '.ODMcomplexTypeDefinitionCertificate'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'userType',
            attributeName: {
              localPart: 'UserType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataDurationDatetime',
        typeName: 'ODMcomplexTypeDefinition-ItemDataDurationDatetime',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFormalExpression',
        typeName: 'ODMcomplexTypeDefinition-FormalExpression',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'context',
            attributeName: {
              localPart: 'Context'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionImputationMethod',
        typeName: 'ODMcomplexTypeDefinition-ImputationMethod',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionSupplementalDoc',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-SupplementalDoc'
        },
        propertyInfos: [{
            name: 'documentRef',
            required: true,
            collection: true,
            elementName: {
              localPart: 'DocumentRef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionDocumentRef'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionOrigin',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-Origin'
        },
        propertyInfos: [{
            name: 'description',
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'documentRef',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'DocumentRef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionDocumentRef'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }, {
            name: 'source',
            attributeName: {
              localPart: 'Source'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionSignatures',
        typeName: 'ODMcomplexTypeDefinition-Signatures',
        propertyInfos: [{
            name: 'signature',
            minOccurs: 0,
            collection: true,
            elementName: 'Signature',
            typeInfo: '.ODMcomplexTypeDefinitionSignature'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataDouble',
        typeName: 'ODMcomplexTypeDefinition-ItemDataDouble',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionClinicalData',
        typeName: 'ODMcomplexTypeDefinition-ClinicalData',
        propertyInfos: [{
            name: 'subjectData',
            minOccurs: 0,
            collection: true,
            elementName: 'SubjectData',
            typeInfo: '.ODMcomplexTypeDefinitionSubjectData'
          }, {
            name: 'auditRecords',
            minOccurs: 0,
            collection: true,
            elementName: 'AuditRecords',
            typeInfo: '.ODMcomplexTypeDefinitionAuditRecords'
          }, {
            name: 'signatures',
            minOccurs: 0,
            collection: true,
            elementName: 'Signatures',
            typeInfo: '.ODMcomplexTypeDefinitionSignatures'
          }, {
            name: 'annotations',
            minOccurs: 0,
            collection: true,
            elementName: 'Annotations',
            typeInfo: '.ODMcomplexTypeDefinitionAnnotations'
          }, {
            name: 'studyOID',
            required: true,
            attributeName: {
              localPart: 'StudyOID'
            },
            type: 'attribute'
          }, {
            name: 'metaDataVersionOID',
            required: true,
            attributeName: {
              localPart: 'MetaDataVersionOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionKeySet',
        typeName: 'ODMcomplexTypeDefinition-KeySet',
        propertyInfos: [{
            name: 'studyOID',
            required: true,
            attributeName: {
              localPart: 'StudyOID'
            },
            type: 'attribute'
          }, {
            name: 'subjectKey',
            attributeName: {
              localPart: 'SubjectKey'
            },
            type: 'attribute'
          }, {
            name: 'studyEventOID',
            attributeName: {
              localPart: 'StudyEventOID'
            },
            type: 'attribute'
          }, {
            name: 'studyEventRepeatKey',
            attributeName: {
              localPart: 'StudyEventRepeatKey'
            },
            type: 'attribute'
          }, {
            name: 'formOID',
            attributeName: {
              localPart: 'FormOID'
            },
            type: 'attribute'
          }, {
            name: 'formRepeatKey',
            attributeName: {
              localPart: 'FormRepeatKey'
            },
            type: 'attribute'
          }, {
            name: 'itemGroupOID',
            attributeName: {
              localPart: 'ItemGroupOID'
            },
            type: 'attribute'
          }, {
            name: 'itemGroupRepeatKey',
            attributeName: {
              localPart: 'ItemGroupRepeatKey'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'oid',
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionExternalCodeList',
        typeName: 'ODMcomplexTypeDefinition-ExternalCodeList',
        propertyInfos: [{
            name: 'dictionary',
            attributeName: {
              localPart: 'Dictionary'
            },
            type: 'attribute'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'Version'
            },
            type: 'attribute'
          }, {
            name: 'href',
            attributeName: {
              localPart: 'href'
            },
            type: 'attribute'
          }, {
            name: 'ref',
            attributeName: {
              localPart: 'ref'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionCodeListItem',
        typeName: 'ODMcomplexTypeDefinition-CodeListItem',
        propertyInfos: [{
            name: 'decode',
            required: true,
            elementName: 'Decode',
            typeInfo: '.ODMcomplexTypeDefinitionDecode'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'codeListItemElementExtension',
            minOccurs: 0,
            collection: true,
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'extendedValue',
            attributeName: {
              localPart: 'ExtendedValue',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'codedValue',
            required: true,
            attributeName: {
              localPart: 'CodedValue'
            },
            type: 'attribute'
          }, {
            name: 'rank',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'Rank'
            },
            type: 'attribute'
          }, {
            name: 'orderNumber',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'OrderNumber'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionStudyEventData',
        typeName: 'ODMcomplexTypeDefinition-StudyEventData',
        propertyInfos: [{
            name: 'auditRecord',
            elementName: 'AuditRecord',
            typeInfo: '.ODMcomplexTypeDefinitionAuditRecord'
          }, {
            name: 'signature',
            elementName: 'Signature',
            typeInfo: '.ODMcomplexTypeDefinitionSignature'
          }, {
            name: 'annotation',
            minOccurs: 0,
            collection: true,
            elementName: 'Annotation',
            typeInfo: '.ODMcomplexTypeDefinitionAnnotation'
          }, {
            name: 'formData',
            minOccurs: 0,
            collection: true,
            elementName: 'FormData',
            typeInfo: '.ODMcomplexTypeDefinitionFormData'
          }, {
            name: 'studyEventOID',
            required: true,
            attributeName: {
              localPart: 'StudyEventOID'
            },
            type: 'attribute'
          }, {
            name: 'studyEventRepeatKey',
            attributeName: {
              localPart: 'StudyEventRepeatKey'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionStreetName',
        typeName: 'ODMcomplexTypeDefinition-StreetName',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataBase64Binary',
        typeName: 'ODMcomplexTypeDefinition-ItemDataBase64Binary',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Base64Binary',
            type: 'value'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionEnumeratedItem',
        typeName: 'ODMcomplexTypeDefinition-EnumeratedItem',
        propertyInfos: [{
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'enumeratedItemElementExtension',
            minOccurs: 0,
            collection: true,
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'codedValue',
            required: true,
            attributeName: {
              localPart: 'CodedValue'
            },
            type: 'attribute'
          }, {
            name: 'rank',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'Rank'
            },
            type: 'attribute'
          }, {
            name: 'orderNumber',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'OrderNumber'
            },
            type: 'attribute'
          }, {
            name: 'extendedValue',
            attributeName: {
              localPart: 'ExtendedValue',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFlagValue',
        typeName: 'ODMcomplexTypeDefinition-FlagValue',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'codeListOID',
            required: true,
            attributeName: {
              localPart: 'CodeListOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFormRef',
        typeName: 'ODMcomplexTypeDefinition-FormRef',
        propertyInfos: [{
            name: 'orderNumber',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'OrderNumber'
            },
            type: 'attribute'
          }, {
            name: 'mandatory',
            required: true,
            attributeName: {
              localPart: 'Mandatory'
            },
            type: 'attribute'
          }, {
            name: 'collectionExceptionConditionOID',
            attributeName: {
              localPart: 'CollectionExceptionConditionOID'
            },
            type: 'attribute'
          }, {
            name: 'formOID',
            required: true,
            attributeName: {
              localPart: 'FormOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionRangeCheck',
        typeName: 'ODMcomplexTypeDefinition-RangeCheck',
        propertyInfos: [{
            name: 'checkValue',
            required: true,
            collection: true,
            elementName: 'CheckValue',
            typeInfo: '.ODMcomplexTypeDefinitionCheckValue'
          }, {
            name: 'formalExpression',
            required: true,
            collection: true,
            elementName: 'FormalExpression',
            typeInfo: '.ODMcomplexTypeDefinitionFormalExpression'
          }, {
            name: 'measurementUnitRef',
            elementName: 'MeasurementUnitRef',
            typeInfo: '.ODMcomplexTypeDefinitionMeasurementUnitRef'
          }, {
            name: 'errorMessage',
            elementName: 'ErrorMessage',
            typeInfo: '.ODMcomplexTypeDefinitionErrorMessage'
          }, {
            name: 'comparator',
            attributeName: {
              localPart: 'Comparator'
            },
            type: 'attribute'
          }, {
            name: 'softHard',
            required: true,
            attributeName: {
              localPart: 'SoftHard'
            },
            type: 'attribute'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemRef',
        typeName: 'ODMcomplexTypeDefinition-ItemRef',
        propertyInfos: [{
            name: 'itemRefElementExtension',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'WhereClauseRef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionWhereClauseRef'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'keySequence',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'KeySequence'
            },
            type: 'attribute'
          }, {
            name: 'methodOID',
            attributeName: {
              localPart: 'MethodOID'
            },
            type: 'attribute'
          }, {
            name: 'imputationMethodOID',
            attributeName: {
              localPart: 'ImputationMethodOID'
            },
            type: 'attribute'
          }, {
            name: 'role',
            attributeName: {
              localPart: 'Role'
            },
            type: 'attribute'
          }, {
            name: 'roleCodeListOID',
            attributeName: {
              localPart: 'RoleCodeListOID'
            },
            type: 'attribute'
          }, {
            name: 'orderNumber',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'OrderNumber'
            },
            type: 'attribute'
          }, {
            name: 'mandatory',
            required: true,
            attributeName: {
              localPart: 'Mandatory'
            },
            type: 'attribute'
          }, {
            name: 'collectionExceptionConditionOID',
            attributeName: {
              localPart: 'CollectionExceptionConditionOID'
            },
            type: 'attribute'
          }, {
            name: 'isNonStandard',
            attributeName: {
              localPart: 'IsNonStandard',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'hasNoData',
            attributeName: {
              localPart: 'HasNoData',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionValueListDef',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-ValueListDef'
        },
        propertyInfos: [{
            name: 'description',
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'itemRef',
            required: true,
            collection: true,
            elementName: 'ItemRef',
            typeInfo: '.ODMcomplexTypeDefinitionItemRef'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionStandards',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-Standards'
        },
        propertyInfos: [{
            name: 'standard',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Standard',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionStandard'
          }]
      }, {
        localName: 'DigestMethodType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'DigestMethodType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'algorithm',
            required: true,
            attributeName: {
              localPart: 'Algorithm'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionReasonForChange',
        typeName: 'ODMcomplexTypeDefinition-ReasonForChange',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionFlagType',
        typeName: 'ODMcomplexTypeDefinition-FlagType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'codeListOID',
            required: true,
            attributeName: {
              localPart: 'CodeListOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionLeaf',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-leaf'
        },
        propertyInfos: [{
            name: 'title',
            required: true,
            elementName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: 'AnyType'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'ID'
            },
            type: 'attribute'
          }, {
            name: 'href',
            required: true,
            attributeName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SignatureType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'SignatureType'
        },
        propertyInfos: [{
            name: 'signedInfo',
            required: true,
            elementName: {
              localPart: 'SignedInfo',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignedInfoType'
          }, {
            name: 'signatureValue',
            required: true,
            elementName: {
              localPart: 'SignatureValue',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureValueType'
          }, {
            name: 'keyInfo',
            elementName: {
              localPart: 'KeyInfo',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.KeyInfoType'
          }, {
            name: 'object',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'Object',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ObjectType'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TransformType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'TransformType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            elementName: {
              localPart: 'XPath',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            type: 'elementRef'
          }, {
            name: 'algorithm',
            required: true,
            attributeName: {
              localPart: 'Algorithm'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataPartialDatetime',
        typeName: 'ODMcomplexTypeDefinition-ItemDataPartialDatetime',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionSignature',
        typeName: 'ODMcomplexTypeDefinition-Signature',
        propertyInfos: [{
            name: 'userRef',
            required: true,
            elementName: 'UserRef',
            typeInfo: '.ODMcomplexTypeDefinitionUserRef'
          }, {
            name: 'locationRef',
            required: true,
            elementName: 'LocationRef',
            typeInfo: '.ODMcomplexTypeDefinitionLocationRef'
          }, {
            name: 'signatureRef',
            required: true,
            elementName: 'SignatureRef',
            typeInfo: '.ODMcomplexTypeDefinitionSignatureRef'
          }, {
            name: 'dateTimeStamp',
            required: true,
            elementName: 'DateTimeStamp',
            typeInfo: '.ODMcomplexTypeDefinitionDateTimeStamp'
          }, {
            name: 'cryptoBindingManifest',
            elementName: 'CryptoBindingManifest',
            typeInfo: '.ODMcomplexTypeDefinitionCryptoBindingManifest'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'ID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionAuditRecords',
        typeName: 'ODMcomplexTypeDefinition-AuditRecords',
        propertyInfos: [{
            name: 'auditRecord',
            minOccurs: 0,
            collection: true,
            elementName: 'AuditRecord',
            typeInfo: '.ODMcomplexTypeDefinitionAuditRecord'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemGroupDef',
        typeName: 'ODMcomplexTypeDefinition-ItemGroupDef',
        propertyInfos: [{
            name: 'description',
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'itemRef',
            minOccurs: 0,
            collection: true,
            elementName: 'ItemRef',
            typeInfo: '.ODMcomplexTypeDefinitionItemRef'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'itemGroupDefElementExtension',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'Class',
                  namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
                },
                typeInfo: '.DEFINEcomplexTypeDefinitionClass'
              }, {
                elementName: {
                  localPart: 'leaf',
                  namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
                },
                typeInfo: '.DEFINEcomplexTypeDefinitionLeaf'
              }],
            type: 'elements'
          }, {
            name: 'structure',
            required: true,
            attributeName: {
              localPart: 'Structure',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'archiveLocationID',
            attributeName: {
              localPart: 'ArchiveLocationID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'standardOID',
            attributeName: {
              localPart: 'StandardOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'isNonStandard',
            attributeName: {
              localPart: 'IsNonStandard',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'hasNoData',
            attributeName: {
              localPart: 'HasNoData',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'commentOID',
            attributeName: {
              localPart: 'CommentOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'repeating',
            required: true,
            attributeName: {
              localPart: 'Repeating'
            },
            type: 'attribute'
          }, {
            name: 'isReferenceData',
            attributeName: {
              localPart: 'IsReferenceData'
            },
            type: 'attribute'
          }, {
            name: 'sasDatasetName',
            attributeName: {
              localPart: 'SASDatasetName'
            },
            type: 'attribute'
          }, {
            name: 'domain',
            attributeName: {
              localPart: 'Domain'
            },
            type: 'attribute'
          }, {
            name: 'origin',
            attributeName: {
              localPart: 'Origin'
            },
            type: 'attribute'
          }, {
            name: 'role',
            attributeName: {
              localPart: 'Role'
            },
            type: 'attribute'
          }, {
            name: 'purpose',
            attributeName: {
              localPart: 'Purpose'
            },
            type: 'attribute'
          }, {
            name: 'comment',
            attributeName: {
              localPart: 'Comment'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PGPDataType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'PGPDataType'
        },
        propertyInfos: [{
            name: 'content',
            required: true,
            collection: true,
            mixed: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'PGPKeyID',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
              }, {
                elementName: {
                  localPart: 'PGPKeyPacket',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'KeyInfoType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'KeyInfoType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'KeyName',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                }
              }, {
                elementName: {
                  localPart: 'RetrievalMethod',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.RetrievalMethodType'
              }, {
                elementName: {
                  localPart: 'KeyValue',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.KeyValueType'
              }, {
                elementName: {
                  localPart: 'MgmtData',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                }
              }, {
                elementName: {
                  localPart: 'SPKIData',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.SPKIDataType'
              }, {
                elementName: {
                  localPart: 'PGPData',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.PGPDataType'
              }, {
                elementName: {
                  localPart: 'X509Data',
                  namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.X509DataType'
              }],
            type: 'elementRefs'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TransformsType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'TransformsType'
        },
        propertyInfos: [{
            name: 'transform',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Transform',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.TransformType'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataURI',
        typeName: 'ODMcomplexTypeDefinition-ItemDataURI',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionStandard',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-Standard'
        },
        propertyInfos: [{
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }, {
            name: 'publishingSet',
            attributeName: {
              localPart: 'PublishingSet'
            },
            type: 'attribute'
          }, {
            name: 'version',
            required: true,
            attributeName: {
              localPart: 'Version'
            },
            type: 'attribute'
          }, {
            name: 'status',
            required: true,
            attributeName: {
              localPart: 'Status'
            },
            type: 'attribute'
          }, {
            name: 'commentOID',
            attributeName: {
              localPart: 'CommentOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionItemDataFloat',
        typeName: 'ODMcomplexTypeDefinition-ItemDataFloat',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Decimal',
            type: 'value'
          }, {
            name: 'itemOID',
            required: true,
            attributeName: {
              localPart: 'ItemOID'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'TransactionType'
            },
            type: 'attribute'
          }, {
            name: 'auditRecordID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AuditRecordID'
            },
            type: 'attribute'
          }, {
            name: 'signatureID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'SignatureID'
            },
            type: 'attribute'
          }, {
            name: 'annotationID',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'AnnotationID'
            },
            type: 'attribute'
          }, {
            name: 'measurementUnitOID',
            attributeName: {
              localPart: 'MeasurementUnitOID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionMethodDef',
        typeName: 'ODMcomplexTypeDefinition-MethodDef',
        propertyInfos: [{
            name: 'description',
            required: true,
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'formalExpression',
            minOccurs: 0,
            collection: true,
            elementName: 'FormalExpression',
            typeInfo: '.ODMcomplexTypeDefinitionFormalExpression'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'documentRef',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'DocumentRef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionDocumentRef'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionAddress',
        typeName: 'ODMcomplexTypeDefinition-Address',
        propertyInfos: [{
            name: 'streetName',
            minOccurs: 0,
            collection: true,
            elementName: 'StreetName',
            typeInfo: '.ODMcomplexTypeDefinitionStreetName'
          }, {
            name: 'city',
            elementName: 'City',
            typeInfo: '.ODMcomplexTypeDefinitionCity'
          }, {
            name: 'stateProv',
            elementName: 'StateProv',
            typeInfo: '.ODMcomplexTypeDefinitionStateProv'
          }, {
            name: 'country',
            elementName: 'Country',
            typeInfo: '.ODMcomplexTypeDefinitionCountry'
          }, {
            name: 'postalCode',
            elementName: 'PostalCode',
            typeInfo: '.ODMcomplexTypeDefinitionPostalCode'
          }, {
            name: 'otherText',
            elementName: 'OtherText',
            typeInfo: '.ODMcomplexTypeDefinitionOtherText'
          }]
      }, {
        localName: 'SignedInfoType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
          localPart: 'SignedInfoType'
        },
        propertyInfos: [{
            name: 'canonicalizationMethod',
            required: true,
            elementName: {
              localPart: 'CanonicalizationMethod',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.CanonicalizationMethodType'
          }, {
            name: 'signatureMethod',
            required: true,
            elementName: {
              localPart: 'SignatureMethod',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureMethodType'
          }, {
            name: 'reference',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Reference',
              namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ReferenceType'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionAnnotations',
        typeName: 'ODMcomplexTypeDefinition-Annotations',
        propertyInfos: [{
            name: 'annotation',
            minOccurs: 0,
            collection: true,
            elementName: 'Annotation',
            typeInfo: '.ODMcomplexTypeDefinitionAnnotation'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionWhereClauseDef',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-WhereClauseDef'
        },
        propertyInfos: [{
            name: 'rangeCheck',
            required: true,
            collection: true,
            elementName: 'RangeCheck',
            typeInfo: '.ODMcomplexTypeDefinitionRangeCheck'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'commentOID',
            attributeName: {
              localPart: 'CommentOID',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DEFINEcomplexTypeDefinitionDocumentRef',
        typeName: {
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1',
          localPart: 'DEFINEcomplexTypeDefinition-DocumentRef'
        },
        propertyInfos: [{
            name: 'pdfPageRef',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'PDFPageRef',
              namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
            },
            typeInfo: '.DEFINEcomplexTypeDefinitionPDFPageRef'
          }, {
            name: 'leafID',
            required: true,
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'leafID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionBasicDefinitions',
        typeName: 'ODMcomplexTypeDefinition-BasicDefinitions',
        propertyInfos: [{
            name: 'measurementUnit',
            minOccurs: 0,
            collection: true,
            elementName: 'MeasurementUnit',
            typeInfo: '.ODMcomplexTypeDefinitionMeasurementUnit'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionStudyName',
        typeName: 'ODMcomplexTypeDefinition-StudyName',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionStudyEventDef',
        typeName: 'ODMcomplexTypeDefinition-StudyEventDef',
        propertyInfos: [{
            name: 'description',
            elementName: 'Description',
            typeInfo: '.ODMcomplexTypeDefinitionDescription'
          }, {
            name: 'formRef',
            minOccurs: 0,
            collection: true,
            elementName: 'FormRef',
            typeInfo: '.ODMcomplexTypeDefinitionFormRef'
          }, {
            name: 'alias',
            minOccurs: 0,
            collection: true,
            elementName: 'Alias',
            typeInfo: '.ODMcomplexTypeDefinitionAlias'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'repeating',
            required: true,
            attributeName: {
              localPart: 'Repeating'
            },
            type: 'attribute'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }, {
            name: 'category',
            attributeName: {
              localPart: 'Category'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionStudy',
        typeName: 'ODMcomplexTypeDefinition-Study',
        propertyInfos: [{
            name: 'globalVariables',
            required: true,
            elementName: 'GlobalVariables',
            typeInfo: '.ODMcomplexTypeDefinitionGlobalVariables'
          }, {
            name: 'basicDefinitions',
            elementName: 'BasicDefinitions',
            typeInfo: '.ODMcomplexTypeDefinitionBasicDefinitions'
          }, {
            name: 'metaDataVersion',
            minOccurs: 0,
            collection: true,
            elementName: 'MetaDataVersion',
            typeInfo: '.ODMcomplexTypeDefinitionMetaDataVersion'
          }, {
            name: 'oid',
            required: true,
            attributeName: {
              localPart: 'OID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionMetaDataVersionRef',
        typeName: 'ODMcomplexTypeDefinition-MetaDataVersionRef',
        propertyInfos: [{
            name: 'studyOID',
            required: true,
            attributeName: {
              localPart: 'StudyOID'
            },
            type: 'attribute'
          }, {
            name: 'metaDataVersionOID',
            required: true,
            attributeName: {
              localPart: 'MetaDataVersionOID'
            },
            type: 'attribute'
          }, {
            name: 'effectiveDate',
            required: true,
            typeInfo: 'Date',
            attributeName: {
              localPart: 'EffectiveDate'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ODMcomplexTypeDefinitionComment',
        typeName: 'ODMcomplexTypeDefinition-Comment',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'sponsorOrSite',
            attributeName: {
              localPart: 'SponsorOrSite'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'YesOrNo',
        values: ['Yes', 'No']
      }, {
        type: 'enumInfo',
        localName: 'TransactionType',
        values: ['Insert', 'Update', 'Remove', 'Upsert', 'Context']
      }, {
        type: 'enumInfo',
        localName: 'StandardPublishingSet',
        values: ['ADaM', 'CDASH', 'DEFINE-XML', 'SDTM', 'SEND']
      }, {
        type: 'enumInfo',
        localName: 'OriginSource',
        values: ['Investigator', 'Sponsor', 'Subject', 'Vendor']
      }, {
        type: 'enumInfo',
        localName: 'ODMContext',
        values: ['Other', 'Submission']
      }, {
        type: 'enumInfo',
        localName: 'Granularity',
        values: ['All', 'Metadata', 'AdminData', 'ReferenceData', 'AllClinicalData', 'SingleSite', 'SingleSubject']
      }, {
        type: 'enumInfo',
        localName: 'CommentType',
        values: ['Sponsor', 'Site']
      }, {
        type: 'enumInfo',
        localName: 'YesOnly',
        values: ['Yes']
      }, {
        type: 'enumInfo',
        localName: 'PDFPageType',
        values: ['NamedDestination', 'PhysicalRef']
      }, {
        type: 'enumInfo',
        localName: 'ItemGroupSubClass',
        values: ['ADVERSE EVENT', 'MEDICAL DEVICE TIME-TO-EVENT', 'NON-COMPARTMENTAL ANALYSIS', 'TIME-TO-EVENT']
      }, {
        type: 'enumInfo',
        localName: 'StandardType',
        values: ['CT', 'IG']
      }, {
        type: 'enumInfo',
        localName: 'UserType',
        values: ['Sponsor', 'Investigator', 'Lab', 'Other']
      }, {
        type: 'enumInfo',
        localName: 'SoftOrHard',
        values: ['Soft', 'Hard']
      }, {
        type: 'enumInfo',
        localName: 'ItemGroupClass',
        values: ['ADAM OTHER', 'BASIC DATA STRUCTURE', 'DEVICE LEVEL ANALYSIS DATASET', 'EVENTS', 'FINDINGS', 'FINDINGS ABOUT', 'INTERVENTIONS', 'MEDICAL DEVICE BASIC DATA STRUCTURE', 'MEDICAL DEVICE OCCURRENCE DATA STRUCTURE', 'OCCURRENCE DATA STRUCTURE', 'RELATIONSHIP', 'SPECIAL PURPOSE', 'STUDY REFERENCE', 'SUBJECT LEVEL ANALYSIS DATASET', 'TRIAL DESIGN']
      }, {
        type: 'enumInfo',
        localName: 'OriginType',
        values: ['Assigned', 'Collected', 'Derived', 'Not Available', 'Other', 'Predecessor', 'Protocol']
      }, {
        type: 'enumInfo',
        localName: 'StandardName',
        values: ['ADaMIG', 'CDISC\/NCI', 'SDTMIG', 'SDTMIG-AP', 'SDTMIG-MD', 'SENDIG', 'SENDIG-AR', 'SENDIG-DART']
      }, {
        type: 'enumInfo',
        localName: 'StandardStatus',
        values: ['Draft', 'Final', 'Provisional']
      }, {
        type: 'enumInfo',
        localName: 'EditPointType',
        values: ['Monitoring', 'DataManagement', 'DBAudit']
      }, {
        type: 'enumInfo',
        localName: 'SignMethod',
        values: ['Digital', 'Electronic']
      }, {
        type: 'enumInfo',
        localName: 'EventType',
        values: ['Scheduled', 'Unscheduled', 'Common']
      }, {
        type: 'enumInfo',
        localName: 'DataType',
        values: ['integer', 'float', 'date', 'datetime', 'time', 'text', 'string', 'double', 'URI', 'boolean', 'hexBinary', 'base64Binary', 'hexFloat', 'base64Float', 'partialDate', 'partialTime', 'partialDatetime', 'durationDatetime', 'intervalDatetime', 'incompleteDatetime', 'incompleteDate', 'incompleteTime']
      }, {
        type: 'enumInfo',
        localName: 'CLDataType',
        values: ['integer', 'float', 'text', 'string']
      }, {
        type: 'enumInfo',
        localName: 'Comparator',
        values: ['LT', 'LE', 'GT', 'GE', 'EQ', 'NE', 'IN', 'NOTIN']
      }, {
        type: 'enumInfo',
        localName: 'YesOnly',
        values: ['Yes']
      }, {
        type: 'enumInfo',
        localName: 'FileType',
        values: ['Snapshot', 'Transactional']
      }, {
        type: 'enumInfo',
        localName: 'MethodType',
        values: ['Computation', 'Imputation', 'Transpose', 'Other']
      }, {
        type: 'enumInfo',
        localName: 'LocationType',
        values: ['Sponsor', 'Site', 'CRO', 'Lab', 'Other']
      }],
    elementInfos: [{
        elementName: 'Organization',
        typeInfo: '.ODMcomplexTypeDefinitionOrganization'
      }, {
        elementName: {
          localPart: 'Origin',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionOrigin'
      }, {
        elementName: 'UserRef',
        typeInfo: '.ODMcomplexTypeDefinitionUserRef'
      }, {
        elementName: {
          localPart: 'Transform',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.TransformType'
      }, {
        elementName: {
          localPart: 'SignedInfo',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.SignedInfoType'
      }, {
        elementName: {
          localPart: 'DocumentRef',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionDocumentRef'
      }, {
        elementName: 'LoginName',
        typeInfo: '.ODMcomplexTypeDefinitionLoginName'
      }, {
        elementName: {
          localPart: 'SignatureProperty',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.SignaturePropertyType'
      }, {
        elementName: 'ItemDataHexBinary',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataHexBinary'
      }, {
        elementName: {
          localPart: 'X509SKI',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: 'Base64Binary',
        scope: '.X509DataType'
      }, {
        elementName: 'StudyDescription',
        typeInfo: '.ODMcomplexTypeDefinitionStudyDescription'
      }, {
        elementName: 'MethodDef',
        typeInfo: '.ODMcomplexTypeDefinitionMethodDef'
      }, {
        elementName: 'StateProv',
        typeInfo: '.ODMcomplexTypeDefinitionStateProv'
      }, {
        elementName: {
          localPart: 'CommentDef',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionCommentDef'
      }, {
        elementName: 'LastName',
        typeInfo: '.ODMcomplexTypeDefinitionLastName'
      }, {
        elementName: 'CryptoBindingManifest',
        typeInfo: '.ODMcomplexTypeDefinitionCryptoBindingManifest'
      }, {
        elementName: 'DateTimeStamp',
        typeInfo: '.ODMcomplexTypeDefinitionDateTimeStamp'
      }, {
        elementName: {
          localPart: 'PGPData',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.PGPDataType'
      }, {
        elementName: 'Alias',
        typeInfo: '.ODMcomplexTypeDefinitionAlias'
      }, {
        elementName: {
          localPart: 'Signature',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.SignatureType'
      }, {
        elementName: 'FullName',
        typeInfo: '.ODMcomplexTypeDefinitionFullName'
      }, {
        elementName: 'ItemData',
        typeInfo: '.ODMcomplexTypeDefinitionItemData'
      }, {
        elementName: 'ItemDataTime',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataTime'
      }, {
        elementName: {
          localPart: 'X509Certificate',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: 'Base64Binary',
        scope: '.X509DataType'
      }, {
        elementName: 'AuditRecords',
        typeInfo: '.ODMcomplexTypeDefinitionAuditRecords'
      }, {
        elementName: {
          localPart: 'Class',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionClass'
      }, {
        elementName: 'ItemDataBoolean',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataBoolean'
      }, {
        elementName: {
          localPart: 'root',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: 'AnyType'
      }, {
        elementName: 'SignatureDef',
        typeInfo: '.ODMcomplexTypeDefinitionSignatureDef'
      }, {
        elementName: 'SignatureRef',
        typeInfo: '.ODMcomplexTypeDefinitionSignatureRef'
      }, {
        elementName: {
          localPart: 'SubClass',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionSubClass'
      }, {
        elementName: 'Phone',
        typeInfo: '.ODMcomplexTypeDefinitionPhone'
      }, {
        elementName: 'SubjectData',
        typeInfo: '.ODMcomplexTypeDefinitionSubjectData'
      }, {
        elementName: 'Role',
        typeInfo: '.ODMcomplexTypeDefinitionRole'
      }, {
        elementName: 'ItemDataFloat',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataFloat'
      }, {
        elementName: 'ItemDataIncompleteTime',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataIncompleteTime'
      }, {
        elementName: {
          localPart: 'X509Data',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.X509DataType'
      }, {
        elementName: {
          localPart: 'SignatureValue',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.SignatureValueType'
      }, {
        elementName: {
          localPart: 'KeyName',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        }
      }, {
        elementName: 'ArchiveLayoutRef',
        typeInfo: '.ODMcomplexTypeDefinitionArchiveLayoutRef'
      }, {
        elementName: {
          localPart: 'XPath',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        scope: '.TransformType'
      }, {
        elementName: 'MetaDataVersion',
        typeInfo: '.ODMcomplexTypeDefinitionMetaDataVersion'
      }, {
        elementName: 'BasicDefinitions',
        typeInfo: '.ODMcomplexTypeDefinitionBasicDefinitions'
      }, {
        elementName: 'ExternalQuestion',
        typeInfo: '.ODMcomplexTypeDefinitionExternalQuestion'
      }, {
        elementName: 'LocationRef',
        typeInfo: '.ODMcomplexTypeDefinitionLocationRef'
      }, {
        elementName: 'ItemDataIntervalDatetime',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataIntervalDatetime'
      }, {
        elementName: 'Country',
        typeInfo: '.ODMcomplexTypeDefinitionCountry'
      }, {
        elementName: 'Presentation',
        typeInfo: '.ODMcomplexTypeDefinitionPresentation'
      }, {
        elementName: 'StreetName',
        typeInfo: '.ODMcomplexTypeDefinitionStreetName'
      }, {
        elementName: {
          localPart: 'SPKISexp',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: 'Base64Binary',
        scope: '.SPKIDataType'
      }, {
        elementName: 'FormDef',
        typeInfo: '.ODMcomplexTypeDefinitionFormDef'
      }, {
        elementName: 'FormData',
        typeInfo: '.ODMcomplexTypeDefinitionFormData'
      }, {
        elementName: 'ItemDataIncompleteDatetime',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataIncompleteDatetime'
      }, {
        elementName: {
          localPart: 'SPKIData',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.SPKIDataType'
      }, {
        elementName: 'Signature',
        typeInfo: '.ODMcomplexTypeDefinitionSignature'
      }, {
        elementName: 'ItemRef',
        typeInfo: '.ODMcomplexTypeDefinitionItemRef'
      }, {
        elementName: {
          localPart: 'SignatureMethod',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.SignatureMethodType'
      }, {
        elementName: 'FormRef',
        typeInfo: '.ODMcomplexTypeDefinitionFormRef'
      }, {
        elementName: {
          localPart: 'X509SubjectName',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        scope: '.X509DataType'
      }, {
        elementName: 'ArchiveLayout',
        typeInfo: '.ODMcomplexTypeDefinitionArchiveLayout'
      }, {
        elementName: 'Address',
        typeInfo: '.ODMcomplexTypeDefinitionAddress'
      }, {
        elementName: {
          localPart: 'X509IssuerSerial',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.X509IssuerSerialType',
        scope: '.X509DataType'
      }, {
        elementName: 'Location',
        typeInfo: '.ODMcomplexTypeDefinitionLocation'
      }, {
        elementName: 'Decode',
        typeInfo: '.ODMcomplexTypeDefinitionDecode'
      }, {
        elementName: 'Signatures',
        typeInfo: '.ODMcomplexTypeDefinitionSignatures'
      }, {
        elementName: {
          localPart: 'Reference',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.ReferenceType'
      }, {
        elementName: {
          localPart: 'DSAKeyValue',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.DSAKeyValueType'
      }, {
        elementName: 'Question',
        typeInfo: '.ODMcomplexTypeDefinitionQuestion'
      }, {
        elementName: 'FlagType',
        typeInfo: '.ODMcomplexTypeDefinitionFlagType'
      }, {
        elementName: {
          localPart: 'MgmtData',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        }
      }, {
        elementName: {
          localPart: 'SignatureProperties',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.SignaturePropertiesType'
      }, {
        elementName: 'StudyName',
        typeInfo: '.ODMcomplexTypeDefinitionStudyName'
      }, {
        elementName: 'CodeListRef',
        typeInfo: '.ODMcomplexTypeDefinitionCodeListRef'
      }, {
        elementName: {
          localPart: 'ValueListRef',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionValueListRef'
      }, {
        elementName: 'ItemDataDate',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataDate'
      }, {
        elementName: {
          localPart: 'DigestMethod',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.DigestMethodType'
      }, {
        elementName: 'MeasurementUnit',
        typeInfo: '.ODMcomplexTypeDefinitionMeasurementUnit'
      }, {
        elementName: {
          localPart: 'DigestValue',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: 'Base64Binary'
      }, {
        elementName: {
          localPart: 'KeyValue',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.KeyValueType'
      }, {
        elementName: 'Annotation',
        typeInfo: '.ODMcomplexTypeDefinitionAnnotation'
      }, {
        elementName: 'GlobalVariables',
        typeInfo: '.ODMcomplexTypeDefinitionGlobalVariables'
      }, {
        elementName: 'ItemGroupData',
        typeInfo: '.ODMcomplexTypeDefinitionItemGroupData'
      }, {
        elementName: {
          localPart: 'RSAKeyValue',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.RSAKeyValueType'
      }, {
        elementName: 'Flag',
        typeInfo: '.ODMcomplexTypeDefinitionFlag'
      }, {
        elementName: 'ItemDataPartialDatetime',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataPartialDatetime'
      }, {
        elementName: {
          localPart: 'WhereClauseDef',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionWhereClauseDef'
      }, {
        elementName: {
          localPart: 'AnnotatedCRF',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionAnnotatedCRF'
      }, {
        elementName: 'ItemDataDatetime',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataDatetime'
      }, {
        elementName: 'Annotations',
        typeInfo: '.ODMcomplexTypeDefinitionAnnotations'
      }, {
        elementName: {
          localPart: 'Standards',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionStandards'
      }, {
        elementName: 'Comment',
        typeInfo: '.ODMcomplexTypeDefinitionComment'
      }, {
        elementName: 'DisplayName',
        typeInfo: '.ODMcomplexTypeDefinitionDisplayName'
      }, {
        elementName: {
          localPart: 'HMACOutputLength',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: 'Integer',
        scope: '.SignatureMethodType'
      }, {
        elementName: {
          localPart: 'PDFPageRef',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionPDFPageRef'
      }, {
        elementName: 'CheckValue',
        typeInfo: '.ODMcomplexTypeDefinitionCheckValue'
      }, {
        elementName: 'ItemDataBase64Float',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataBase64Float'
      }, {
        elementName: {
          localPart: 'Transforms',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.TransformsType'
      }, {
        elementName: 'ErrorMessage',
        typeInfo: '.ODMcomplexTypeDefinitionErrorMessage'
      }, {
        elementName: {
          localPart: 'leaf',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionLeaf'
      }, {
        elementName: 'TranslatedText',
        typeInfo: '.ODMcomplexTypeDefinitionTranslatedText'
      }, {
        elementName: 'ItemDataInteger',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataInteger'
      }, {
        elementName: {
          localPart: 'WhereClauseRef',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionWhereClauseRef'
      }, {
        elementName: 'Association',
        typeInfo: '.ODMcomplexTypeDefinitionAssociation'
      }, {
        elementName: {
          localPart: 'PGPKeyPacket',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: 'Base64Binary',
        scope: '.PGPDataType'
      }, {
        elementName: 'ImputationMethod',
        typeInfo: '.ODMcomplexTypeDefinitionImputationMethod'
      }, {
        elementName: {
          localPart: 'KeyInfo',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.KeyInfoType'
      }, {
        elementName: 'ItemDataURI',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataURI'
      }, {
        elementName: 'CodeList',
        typeInfo: '.ODMcomplexTypeDefinitionCodeList'
      }, {
        elementName: {
          localPart: 'X509CRL',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: 'Base64Binary',
        scope: '.X509DataType'
      }, {
        elementName: 'FirstName',
        typeInfo: '.ODMcomplexTypeDefinitionFirstName'
      }, {
        elementName: 'City',
        typeInfo: '.ODMcomplexTypeDefinitionCity'
      }, {
        elementName: 'ConditionDef',
        typeInfo: '.ODMcomplexTypeDefinitionConditionDef'
      }, {
        elementName: {
          localPart: 'SupplementalDoc',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionSupplementalDoc'
      }, {
        elementName: 'Protocol',
        typeInfo: '.ODMcomplexTypeDefinitionProtocol'
      }, {
        elementName: 'Email',
        typeInfo: '.ODMcomplexTypeDefinitionEmail'
      }, {
        elementName: 'ClinicalData',
        typeInfo: '.ODMcomplexTypeDefinitionClinicalData'
      }, {
        elementName: 'KeySet',
        typeInfo: '.ODMcomplexTypeDefinitionKeySet'
      }, {
        elementName: 'StudyEventRef',
        typeInfo: '.ODMcomplexTypeDefinitionStudyEventRef'
      }, {
        elementName: 'ItemDataDouble',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataDouble'
      }, {
        elementName: 'ItemDataDurationDatetime',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataDurationDatetime'
      }, {
        elementName: 'ExternalCodeList',
        typeInfo: '.ODMcomplexTypeDefinitionExternalCodeList'
      }, {
        elementName: {
          localPart: 'Object',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.ObjectType'
      }, {
        elementName: 'ItemGroupRef',
        typeInfo: '.ODMcomplexTypeDefinitionItemGroupRef'
      }, {
        elementName: {
          localPart: 'RetrievalMethod',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.RetrievalMethodType'
      }, {
        elementName: 'Include',
        typeInfo: '.ODMcomplexTypeDefinitionInclude'
      }, {
        elementName: 'SiteRef',
        typeInfo: '.ODMcomplexTypeDefinitionSiteRef'
      }, {
        elementName: 'FormalExpression',
        typeInfo: '.ODMcomplexTypeDefinitionFormalExpression'
      }, {
        elementName: {
          localPart: 'PGPKeyID',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: 'Base64Binary',
        scope: '.PGPDataType'
      }, {
        elementName: 'InvestigatorRef',
        typeInfo: '.ODMcomplexTypeDefinitionInvestigatorRef'
      }, {
        elementName: {
          localPart: 'ValueListDef',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionValueListDef'
      }, {
        elementName: 'Certificate',
        typeInfo: '.ODMcomplexTypeDefinitionCertificate'
      }, {
        elementName: 'MetaDataVersionRef',
        typeInfo: '.ODMcomplexTypeDefinitionMetaDataVersionRef'
      }, {
        elementName: 'Study',
        typeInfo: '.ODMcomplexTypeDefinitionStudy'
      }, {
        elementName: 'ItemDataPartialTime',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataPartialTime'
      }, {
        elementName: 'PostalCode',
        typeInfo: '.ODMcomplexTypeDefinitionPostalCode'
      }, {
        elementName: 'ODM',
        typeInfo: '.ODM'
      }, {
        elementName: 'ItemDef',
        typeInfo: '.ODMcomplexTypeDefinitionItemDef'
      }, {
        elementName: 'EnumeratedItem',
        typeInfo: '.ODMcomplexTypeDefinitionEnumeratedItem'
      }, {
        elementName: 'ItemDataHexFloat',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataHexFloat'
      }, {
        elementName: 'ReferenceData',
        typeInfo: '.ODMcomplexTypeDefinitionReferenceData'
      }, {
        elementName: 'OtherText',
        typeInfo: '.ODMcomplexTypeDefinitionOtherText'
      }, {
        elementName: 'LegalReason',
        typeInfo: '.ODMcomplexTypeDefinitionLegalReason'
      }, {
        elementName: {
          localPart: 'Standard',
          namespaceURI: 'http:\/\/www.cdisc.org\/ns\/def\/v2.1'
        },
        typeInfo: '.DEFINEcomplexTypeDefinitionStandard'
      }, {
        elementName: 'ProtocolName',
        typeInfo: '.ODMcomplexTypeDefinitionProtocolName'
      }, {
        elementName: 'Description',
        typeInfo: '.ODMcomplexTypeDefinitionDescription'
      }, {
        elementName: 'Symbol',
        typeInfo: '.ODMcomplexTypeDefinitionSymbol'
      }, {
        elementName: 'ItemDataString',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataString'
      }, {
        elementName: {
          localPart: 'Manifest',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.ManifestType'
      }, {
        elementName: 'ItemDataBase64Binary',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataBase64Binary'
      }, {
        elementName: 'ItemDataAny',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataAny'
      }, {
        elementName: 'ItemGroupDef',
        typeInfo: '.ODMcomplexTypeDefinitionItemGroupDef'
      }, {
        elementName: 'SourceID',
        typeInfo: '.ODMcomplexTypeDefinitionSourceID'
      }, {
        elementName: 'Fax',
        typeInfo: '.ODMcomplexTypeDefinitionFax'
      }, {
        elementName: 'ItemDataPartialDate',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataPartialDate'
      }, {
        elementName: 'Pager',
        typeInfo: '.ODMcomplexTypeDefinitionPager'
      }, {
        elementName: 'AdminData',
        typeInfo: '.ODMcomplexTypeDefinitionAdminData'
      }, {
        elementName: 'MeasurementUnitRef',
        typeInfo: '.ODMcomplexTypeDefinitionMeasurementUnitRef'
      }, {
        elementName: 'CodeListItem',
        typeInfo: '.ODMcomplexTypeDefinitionCodeListItem'
      }, {
        elementName: 'User',
        typeInfo: '.ODMcomplexTypeDefinitionUser'
      }, {
        elementName: 'StudyEventData',
        typeInfo: '.ODMcomplexTypeDefinitionStudyEventData'
      }, {
        elementName: 'ReasonForChange',
        typeInfo: '.ODMcomplexTypeDefinitionReasonForChange'
      }, {
        elementName: 'StudyEventDef',
        typeInfo: '.ODMcomplexTypeDefinitionStudyEventDef'
      }, {
        elementName: 'AuditRecord',
        typeInfo: '.ODMcomplexTypeDefinitionAuditRecord'
      }, {
        elementName: 'Picture',
        typeInfo: '.ODMcomplexTypeDefinitionPicture'
      }, {
        elementName: 'ItemDataIncompleteDate',
        typeInfo: '.ODMcomplexTypeDefinitionItemDataIncompleteDate'
      }, {
        elementName: {
          localPart: 'CanonicalizationMethod',
          namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
        },
        typeInfo: '.CanonicalizationMethodType'
      }, {
        elementName: 'FlagValue',
        typeInfo: '.ODMcomplexTypeDefinitionFlagValue'
      }, {
        elementName: 'RangeCheck',
        typeInfo: '.ODMcomplexTypeDefinitionRangeCheck'
      }, {
        elementName: 'Meaning',
        typeInfo: '.ODMcomplexTypeDefinitionMeaning'
      }]
  };
  return {
    define2_1_0: define2_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], define2_1_0_Module_Factory);
}
else {
  var define2_1_0_Module = define2_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.define2_1_0 = define2_1_0_Module.define2_1_0;
  }
  else {
    var define2_1_0 = define2_1_0_Module.define2_1_0;
  }
}