const moment = require("moment-timezone");

const sleep = async (milliseconds) => {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
}

exports.getTimeInfo  =  new Promise ((resolve, reject) => {
    //await PrintNearestStore(session, lat, lon);
    console.log("Date " + moment.tz("Asia/Bangkok").format("YYYY-MM-DD THH:mm:ss.SSSZ"));
    
    
    var start_time = moment.tz("Asia/Bangkok").format("YYYY-MM-DD THH:mm:ss.SSSZ");
    //put code here
        resolve({
            start: start_time,
            end:  moment.tz("Asia/Bangkok").format("YYYY-MM-DD THH:mm:ss.SSSZ"),
        });
    
}).catch((e) => {
    console.log("That did not go well.");
    throw e;
});