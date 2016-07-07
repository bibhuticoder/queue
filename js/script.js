var q = new Queue(10);

$("#btnRefresh").click(function () {
    refresh();
});

$("#btnEnqueue").click(function () {
    enqueue();
});

$("#btnDequeue").click(function () {

    if (q.dequeue() != null) {
        drawToScreen();
    }

});

$("#toEnqueue").keydown(function (e) {
    if (e.keyCode === 13) {
        enqueue();
    }
    console.log(e.keyCode);
});

function refresh() {
    q = new Queue(parseInt($("#max").val()));
    drawToScreen();
}

function drawToScreen() {

    // get elements in the quque
    var elements = q.data;
    var boxType = "";
    $("#screen").html("");
    var html = "";
    // print the elements to screen
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element == 'null') {
            boxType = 'box-normal';
            element = "...";
        } else if (element == 'done') {
            boxType = 'box-done';
            element = "...";
        } else {
            boxType = 'box-filled';
        }

        if (i === q.rear) boxType += ' box-rear';
        else if (i === q.front) boxType += ' box-front';

        html += '<div class="box ' + boxType + '">' + element + '</div>';
    }

    $("#screen").html(html);

    $("#rear").text("Rear : " + q.rear);
    $("#front").text("Front : " + q.front);


}

function enqueue() {
    if ($("#toEnqueue").val() != '') q.enqueue($("#toEnqueue").val());
    drawToScreen();
}

drawToScreen();