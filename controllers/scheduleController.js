const Schedule = require("../models/scheduleModel");

// Controller function to handle the scheduling logic
createSchedule = async (req, res) => {
  const { date, time, wasteType, quantity } = req.body;

  // Validate if the required fields are provided
  if (!date || !time || !wasteType || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create a new schedule entry in the database
    const newSchedule = new Schedule({
      date,
      time,
      wasteType,
      quantity
    });

    // Save the schedule to the database
    const savedSchedule = await newSchedule.save();

    // Send success response
    res.status(200).json({ message: "Pickup scheduled successfully!", schedule: savedSchedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error scheduling pickup" });
  }
};

module.exports ={
    createSchedule
}
