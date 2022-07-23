const fs = require("fs");

 async function checkFileExist() {
    try {
        await fs.promises.access(`${__dirname}/epa_1986.pdf`);
        // The check succeeded
        console.log("File present");
    } catch (error) {
        console.log("File not found continue polling again.")
        // The check failed
    }
}

var minutes = 10, the_interval = minutes * 60 * 1000;
setInterval(function() {
    checkFileExist();
  // do your stuff here
}, the_interval);

(async () => {
    await checkFileExist();
})();
