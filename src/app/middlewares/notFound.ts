import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction): any => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Api not found!',
    error: '',
  });
};

export default notFound;
