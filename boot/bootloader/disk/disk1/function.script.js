function nextdisk() {
    localStorage.setItem('booturlIndex', localStorage.getItem('booturlIndex') + 1);
    window.location.href = 'bootloader/boot.html';
}
function restart() {
    window.location.href = 'bootloader/boot.html';
}
function shutDown() {
    if (localStorage.getItem('booturlKeep') === 'true') {}else{localStorage.removeItem('booturl');}
    localStorage.removeItem('booturlIndex');
    location.reload();
}