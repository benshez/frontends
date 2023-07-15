import { useState } from '#app'
import { User } from "~~/models/interfaces/user"

export default function () {
  return useState<User>('user', () => null as any)
}