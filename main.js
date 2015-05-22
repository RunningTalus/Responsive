$("#menu").change(function onChange() {
  window.location = $(this).find("option:selected").val();
});