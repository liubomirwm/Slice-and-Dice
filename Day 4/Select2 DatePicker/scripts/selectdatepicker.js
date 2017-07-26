$(document).ready(function() {
  $("#select-location").select2();
  $('#date').datepicker({
    format: 'mm/dd/yyyy',
    todayHighlight: true,
    autoclose: true,
  })
});
