/*
  The router for getting data by store name
*/
import express, { Request, Response } from 'express'
import { sampleStoreData } from '../mockData/sampleStoreData'
// Global Config
export const grailedRouter = express.Router()
grailedRouter.use(express.json())

/**
 * Retrieve store data by name
 * @param req The api request object
 * @param res The api response object
 * @returns Store data
 */
grailedRouter.get('/data/:name', async (req: Request, res: Response) => {
  const _name = req?.params?.name

  try {
    res.status(200).send(sampleStoreData)
  } catch (error) {
    res.status(404).send(`Unable to find data for store with name: ${req.params.name}`)
  }
})
