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

const getFile = asyncHandler(async (req, res) => {
  try {
    const uploadedFile = req.body.data;
    const testingData = testData.map((item) => {
      return item;
    });
    const uploadedData = uploadedFile.map((item) => {
      return item;
    });

    // Subtract uploadedData in data
    const absSubtract = (arr1, arr2) => {
      return arr2.map(function (el, i) {
        return Math.abs(el - arr1[i]);
      });
    };
    const subtraction = absSubtract(testingData, uploadedData);

    const powCalc = (arr) => {
      return arr.map((item) => {
        return Math.pow(item, 2);
      });
    };
    const power = powCalc(subtraction);

    const reduced = power.reduce((a, b) => a + b, 0);
    const long = testData.length;
    const result = reduced / long;
    const data = result.toFixed(2);

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
