$(document).ready(function () {
  $("#loginForm").validate({
    rules: {
      email: { required: true, email: true },
      password: { required: true, minlength: 6 },
    },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        url: "api.html",
        type: "POST",
        data: $(form).serialize(),
        success: function (response) {
          $.notify("Form submitted successfully!", "success");
        },
        error: function () {
          $.notify("An error occurred while submitting the form.", "error");
        },
      });
      return false;
    },
  });
});
