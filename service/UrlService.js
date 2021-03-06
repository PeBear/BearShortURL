const BearTool = require("../common/helper/BearTool");
const urlRepo = require("../repository/UrlRepo");
const shortId = require("shortid");

module.exports.hashUrl = async (req) => {
  let record = {
    url: null,
    hash: null,
    createAt: new Date().getMilliseconds,
  };
  record.url = req.body.txtOriginalUrl;
  let urlToHash = record.url + shortId.generate();
  record.hash = BearTool.generateShortURL(urlToHash);

  const result = await urlRepo.insert(record);
  if (result) {
    // return "localhost:1234/" + record.hash;
    return "https://bear-short-url.herokuapp.com/" + record.hash;
  } else {
    return null;
  }
};

module.exports.getOriginalUrl = async (req) => {
  let record = {
    hash: null,
  };
  record.hash = req.params.id;
  const result = await urlRepo.findUrl(record);
  if (result != null) {
    return result.url;
  } else {
    return null;
  }
};
