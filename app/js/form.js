var MyForm = function(form, url) {
    this.form = form;
    this.url = url;
    this.init = function() {

        this.addListener(this.form);
    }
};

var gal = $('.form__block_btn_submit_check')
    // console.log(gal)


MyForm.prototype.addListener = function(form) {
    $(form).on('submit', $.proxy(this.submitForm, this));
};

MyForm.prototype.submitForm = function(e) {
    e.preventDefault();
    var $form = $(this.form),
        defObject = this.ajaxForm($form, this.url);

};

MyForm.prototype.ajaxForm = function(form, url) {
    if (!validation.validateForm(form)) {
        return false; // Возвращает false, если не проходит валидацию
    }
    // запрос
    var data = form.serialize(); // собираем данные из формы в объект data

    return $.ajax({
        // Возвращает Deferred Object
        type: 'POST',
        url: this.url,
        dataType: 'JSON',
        data: data
    }).fail(function(ans) {
        console.log('Проблемы в PHP');
        form.find('.error-mes').text('На сервере произошла ошибка').show();
    });
};