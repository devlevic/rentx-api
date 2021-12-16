import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<void> {
    const { file } = request

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
    await importCategoryUseCase.execute(file)

    return response.status(201).end()
  }
}

export { ImportCategoryController }
