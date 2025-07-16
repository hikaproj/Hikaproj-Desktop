// localStorage.removeItem('booturl');
var booturl = localStorage.getItem('booturl') || ['disk/disk0/index.html','disk/disk1/index.html','disk/disk0/index.html','https://www.google.com/webhp'];
/*====================================================
============== localStorage == booturl ===============
配列で保存！！
localStorage.getItem('booturl')で取得
localStorage.removeItem('booturl')で削除
形式 = ['disk/disk0/index.html','disk/disk1/index.html']
======================================================
*/
var booturlIndex = localStorage.getItem('booturlIndex') || 0;
var nextbooturl = booturl[booturlIndex];
/*====================================================
======================================================
ブートシステムの手順
① boot.htmlを読み込む
② booturl(localStorage)の配列を取得
③ booturl内の一つ目のURLにアクセス
④ 転送先ページで処理の終了後、booturlIndexの値を1増やす
⑤ boot.htmlに戻る
⑥ booturl(localStorage)の配列を取得
⑦ booturl内のbooturlIndex(localStorage)のURLにアクセス
⑧ ④に戻る
======================================================
====================================================*/
if (nextbooturl) {
  // booturlが存在する場合、指定されたURLにアクセス
  document.location.href = nextbooturl;
} else {
  // booturlが存在しない場合、booturlIndexを削除
  localStorage.removeItem('booturlIndex');
  location.reload();
}

/* URLがバグるので、<script>history.pushState(null, null, '../redirect.index.html');</script>はこのスクリプトの読み込みの後に必ず記述すること!! */