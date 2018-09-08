if(process.env.NODE_ENV==="production")
{

module.exports = require("./prod_keys.js");

}

else 
{
	module.exports = require("./dev_keys.js");
}