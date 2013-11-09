jquery-plugin-serializeFilledForm
=================================

jQuery Plugin that only serializes inputs in a form that have values.

### Usage

```javascript
var serialized = $('#my-form').serializeFilledForm();

// don't decode URI
var serialized = $('#my-form').serializeFilledForm({ decode: false });

// ignore inputs with the class "ignore"
var serialized = $('#my-form').serializeFilledForm({ invalidClass: 'ignore' });



