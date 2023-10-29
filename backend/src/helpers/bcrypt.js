const bcrypt = require('bcrypt');

const encrypt = async (textplain) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(textplain, salt);
    return hash;
  };
const compare = async (paswswordPlain,hashPassword) =>{
    return await bcrypt.compare(paswswordPlain,hashPassword)
}
module.exports = {encrypt,compare}