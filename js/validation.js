
function formValidation(form){

var errors = [];
var symbols = /^[\w\u0100-\u017F]+$/;


if (form.firstName.value == "" || form.firstName.value.length < 3 ) {
	errors.push("-Neįvedėte savo vardo");
}
else if(!symbols.test(form.firstName.value)) {
	errors.push("-Netinkami simboliai varde");
	}

if (form.lastName.value == "" || form.lastName.value.length < 3 ) {
	errors.push("-Neįvedėte savo pavardės");
}
else if(!symbols.test(form.lastName.value)) {
	errors.push("-Netinkami simboliai pavardėje");
	}

if (form.message.value.length < 10) {
	errors.push("-Neįvedėte žinutės");
}

if (errors.length > 0) {

	var errorMessage = "Klaidos:\n\n"
	for (var i = 0; i < errors.length; i++) {
		errorMessage += errors[i] + "\n";
	}
	alert(errorMessage);
	return false;
}

	return true;
}


function blockNumber(numb) {
    numb.value = numb.value.replace(/[0-9]/g, "");
}
