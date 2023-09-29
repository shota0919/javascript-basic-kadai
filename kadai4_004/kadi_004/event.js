$(function() {
$('window').on('load', () => {});{
  console.log("loadイベントが発生しました");
}
});




$(function() {
  $(document).on('load scroll', (e) => {
    if(e.type === 'scroll'){
      console.log("scrollイベントが発生しました");
    }
  });

  });