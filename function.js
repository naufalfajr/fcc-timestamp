const convertDateAndUnixTime = (time) => {
    let d = new Date(Number(time));
    console.log("d on func: "+d);
    if (d == "Invalid Date") {
        time = Number(time);
        d = new Date(time)
    };
    let unix = Date.parse(d);
    let result = {
        "unix": unix,
        "utc": d,
    };
    return result;
}

exports.convertDateAndUnixTime = convertDateAndUnixTime;