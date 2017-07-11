if ($('#form__map').length) {
    var formMail = new MyForm($('#form__map'), '/send-form.php');
    formMail.init();
}
if ($('#form__press').length) {
    var formMail = new MyForm($('#form__press'));
    formMail.init();
}