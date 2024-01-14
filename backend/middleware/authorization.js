const authorization = (string) => {
  return (req, res, next) => {
    console.log("token >>>> ",req.token);
    console.log("role:>>>",req.token.role);
    if (!req.token.role.permissions.includes(string)) {
      return res.status(403).json({
        success: false,
        message: `Unauthorized`,
      });
    }
    next();
  };
};

module.exports = authorization;
