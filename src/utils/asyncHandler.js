const asyncHandler = (requestHandler) =>{
  return(re,res,next) =>{
    Promise.resolve(requestHandler(req,res,next))
    .catch((err) =>next(err))
  }
}

export {asyncHandler}