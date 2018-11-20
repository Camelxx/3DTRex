var stage = document.getElementById('stage');

document.body.addEventListener('mousemove', _.debounce(function (e) {
    var xOrigin = stage.offsetWidth / 2;
    var yOrigin = stage.offsetHeight / 2;
    var xRot = (e.clientY - yOrigin) / yOrigin * -15 + 10;
    var yRot = (e.clientX - xOrigin) / xOrigin * 20;
    stage.style.transform = 'rotateX(' + xRot + 'deg) rotateY(' + yRot + 'deg)';
}), 500);