import { Request, Response, NextFunction } from 'express'

export function requestLogger(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  console.info(
    `[${new Date().toISOString()}][REQUEST] ${req.method} ${
      req.url
    } ${JSON.stringify(req.query)} from '${req.ip}' with body: ${JSON.stringify(
      req.body,
    )}`,
  )
  return next()
}
