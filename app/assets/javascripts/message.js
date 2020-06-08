$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
      
      `<div class="message">
          <div class="main-chat__messages__left-box">
            <div class="main-chat__messages__left-box__name">
              ${message.user_name}
            </div>
            <div class="main-chat__messages__left-box__message">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__messages__right-box">
            <p class="main-chat__messages__right-box">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="message">
          <div class="main-chat__messages__left-box">
            <div class="main-chat__messages__left-box__name">
              ${message.user_name}
            </div>
            <div class="main-chat__messages__left-box__message">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__messages__right-box">
            <p class="main-chat__messages__right-box">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }  
  



  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__messages').append(html);
      $('form')[0].reset();
      $('.main-chat__messages').animate({ scrollTop: $('.main-chat__messages')[0].scrollHeight},50);
      $(".new_message__submit").prop("disabled", false);
    })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
    });
  });
});