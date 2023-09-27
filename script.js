function countdown(num, callback) {
    if (num > 0) {
        console.log(num);
        setTimeout(function () {
            countdown(num - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function () {
    console.log("Happy Independence Day");
});
