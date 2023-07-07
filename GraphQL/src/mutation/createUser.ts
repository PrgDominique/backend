import { UserName } from '../model.js'

export const createUser = async (name: String, age: Number) => {
  try {
    const username = await new UserName({ name, age })
    await username.save()
    return username
  } catch (error) {
    throw new Error('Failed to create user.')
  }
}
