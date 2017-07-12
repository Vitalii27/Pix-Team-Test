if ($('#form__map').length) {
    var formMail = new MyForm($('#form-map'), '/send-form.php');
    formMail.init();
}
if ($('#form__press').length) {
    var formMail = new MyForm($('#form-zip'));
    formMail.init();
}