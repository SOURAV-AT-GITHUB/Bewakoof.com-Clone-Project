const cron = require("node-cron");
const OTPModel = require("./models/otp.model");

cron.schedule("0 */4 * * *", async () => {
  try {
    const fourHoursAgo = new Date();
    fourHoursAgo.setHours(fourHoursAgo.getHours() - 4);

    const result = await OTPModel.deleteMany({
      createdAt: { $lt: fourHoursAgo },
    });
    console.log(`Deleted ${result.deletedCount} OTPs older than 4 hours`);
  } catch (err) {
    console.log("Error deleting OTPs:", err.message);
  }
});
