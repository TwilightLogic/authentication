import bcrypt from 'bcryptjs'
import { InsertUser } from '@/db/schema/schema'
import { createUser } from '@/db/queries/insertQueries'
import { SignupFormSchema, FormState } from '@/lib/definitions'

export async function signup(state: FormState, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 2. Parse data for insertion into database
  const { name, email, password } = validatedFields.data
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10)

  // Debug: Print db object and other information
  console.log('Validated Fields:', validatedFields)
  console.log('Hashed Password:', hashedPassword)

  // 3. Prepare user data
  const user: InsertUser = {
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  // 4. Insert the user into the database
  await createUser(user)

  // TODO
  // 5. Create session
  // 6. Redirect user
}
