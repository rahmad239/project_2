const Location = require("../model/Location");

Location.remove({}).then(()=>{
    promise.all([ 
        Location.create({
            title: "Arenal, Costa Rica"
            body: " Today we had a chance to drive through the Arenal area. There are lush trees and live landscape everywhere."
        }),
        Location.create({
            title: "Negril, Jamaica"
            body: " Today we went to Ricks Cafe and did clif diving. Awesome EXPERIENCE!"
        }),
    ]) .then(() => {
        console.log("done"); 
        process.exit();
    });
}) 
