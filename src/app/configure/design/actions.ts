'use server'

import { db } from '@/db'
import { CaseColor, CaseFinish, CaseMaterial, MacModel } from '@prisma/client'

export type SaveConfigArgs = {
  color: CaseColor
  finish: CaseFinish
  material: CaseMaterial
  model: MacModel
  configId: string
}

export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: { color, finish, material, model },
  })
}