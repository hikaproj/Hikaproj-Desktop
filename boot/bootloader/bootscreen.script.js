localStorage.removeItem('booturlIndex');
if (localStorage.getItem('booturlKeep') === 'true') {}else{
  // booturlKeepがtrueの場合、booturlIndexを削除しない
  localStorage.removeItem('booturl');
}