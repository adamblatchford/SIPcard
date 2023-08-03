exports.main = async (context = {}, sendResponse) => {
    sendResponse({
      sections:  [
        {
          "type":"text",
          "format":"markdown",
          "text": "A table that displays deal data."
      }
      ],
    });
};
