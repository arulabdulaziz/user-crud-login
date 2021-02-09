module.exports = function(err, req, res, next){
  let statusCode = 500
  let message = "Internal Server Error!"
  switch(err.name){
    case "SequelizeValidationError":
      statusCode = 400
      message = err.errors[0].message
      break;
    case "SequelizeDatabaseError": //constraint allowNull :false
      if(err.parent.code === '23502'){
        statusCode = 400
        message = err.errors[0].message
      }
      break;
    case "SequelizeUniqueConstraintError":
      statusCode = 400
      message = `${err.errors[0].value} already exists`
      break;
  }
  res.status(statusCode).json({message})
}