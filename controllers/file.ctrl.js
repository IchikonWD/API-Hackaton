const asyncHandler = require('express-async-handler');
const testData = require('../data/Test_target.json');

//@desc    Test Route and return test data
//@route   GET /api/v1/file
//@access  Public

const testRoute = asyncHandler(async (req, res, next) => {
  res.json({
    success: true,
    message: 'File Endpoint working',
  });
});

//@desc: Get file and returns modified data
//@route: POST /api/v1/file
//@access: Public

const getFile = asyncHandler(async (req, res, next) => {
  try {
    const data = testData.reduce((acc, curr) => {
      acc += curr;
      return acc;
    });

    // const receivedFile = req.body;
    // const receivedFileData = receivedFile.reduce((acc, curr) => {
    //   acc += curr;
    //   return acc;
    // });
    // const sum = data + receivedFileData;

    // const finalResult = Math.power(sum, 2) / receivedFile.length;

    res.status(200).json({
      success: true,
      message: '200 OK - File Readed and Modified Successfully',
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: '500 Internal Server Error',
      err,
    });
  }
});

module.exports = {
  testRoute,
  getFile,
};
