

exports.success = function (req, res, message, status){
    res.status(status || 200 ).send
    ({
        error: '',
        body: message});
}

exports.error = function (req, res, message, status,details){
    res.status(status || 400 ).send
    ({
        error: message,
        body: ''});
        console.log(details);
}
