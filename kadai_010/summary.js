$(function(){
  // #targetの文字の色を変える
  $('#change-color').on('click', function(){
    $('#target').css('color', '#ff0000');
  });
  // #targetの文字が切り替わる
  $('#change-text').on('click', function(){
    $('#target').text('おつかれさま！');
  });
  // #targetのフェードアウトで文字が消える
  $('#fade-out').on('click', function(){
    $('#target'). fadeOut();
  });
  // #targetのフェードインで文字が現れる
  $('#fade-in').on('click', function(){
    $('#target'). fadeIn();
  });
});