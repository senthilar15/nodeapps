const express = require('express'),
      router = express.Router();

router.get('/',(request,response)=>{
  response.send('Home of user');
});

//some other endpoints to submit data
module.exports = router;