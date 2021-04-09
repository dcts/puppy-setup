const axios = require("axios");

(async () => {
  const response = await axios.get("https://www.instagram.com/p/BnXEF9QHH_I/");
  console.log(response.data);
})();
