"use strict";

var Validator = function(validationCall, errorCallBack) {
  this.validate = function() {
    if (!validationCall()) {
      return errorCallBack();
    }
  };
};

function AccountFormValidation() {
  this.fieldValidators = {};
  this.addField = function(fieldName) {
    this.fieldValidators[fieldName] = [];
  };
  this.addValidationToField = function(fieldName, validator) {
    if (this.fieldValidators[fieldName] == null) {
      this.addField(fieldName);
    } else {
      this.fieldValidators[fieldName].push(validator);
    }
  };
}
