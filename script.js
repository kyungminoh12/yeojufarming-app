
function shareToInstagram() {
  alert("인스타그램 공유는 직접 스토리 업로드를 권장합니다. 이미지를 저장 후 업로드해주세요!");
}

function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}
