


const getStudentByIdService = require('../service/getStudentById');

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params; // Use req.params to get route parameters

        const result = await getStudentByIdService.getStudentById(id); // Pass id directly

        if (result.error) {
            return res.status(404).json({ message: result.error });
        }

        res.status(200).json({ student: result });
    } catch (error) {
        res.status(500).json({ message: "Error in fetching with this ID or the ID is not in Database, Please try another ID" });
    }
};

module.exports = { getStudentById };
