if ($('#form-map').length) {
    var formMail = new MyForm($('#form-map'), '/send-form.php');
    formMail.init();
}
if ($('#form-zip').length) {
    var formMail = new MyForm($('#form-zip'));
    formMail.init();
}