exports.onInitialClientRender = () => {
  Snipcart.subscribe('cart.opened', function() {
    Snipcart.unsubscribe('cart.opened')

    var html = $('#cart-content-text').html()
    $(html).insertBefore($('#snipcart-footer'))

    $('.agbs-link').click(() => {
      window.dispatchEvent(new CustomEvent('modal-open', { detail: 'agbs' }))
    })
  })
  Snipcart.subscribe('page.changed', function() {
    $("td.snip-customfields input[type='text']").prop('disabled', true)
  })
  Snipcart.subscribe('page.validating', function(ev, data) {
    if (ev.type === 'order-infos') {
      var regex = /^\d{4}$/
      if (!regex.test(data[0].value) || data[0].value < 1900) {
        ev.addError('Jahrgang', 'Bitte eine gültiges Geburtsjahr eingeben.')
      }
      if (data[0].value > 1999) {
        ev.addError('Jahrgang', 'Mit einem Jahrgang jünger als 1999 darf leider nicht bestellt werden. Siehe AGBs.')
      }
    }
  })
}
