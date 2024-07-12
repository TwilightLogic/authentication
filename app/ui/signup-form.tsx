'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { signup } from '@/app/actions/auth'

export function SignupForm() {
  const [state, action] = useActionState(signup, undefined)
  const { pending } = useFormStatus()

  return (
    <div className="bg-zinc-900 p-8 rounded-lg max-w-md w-full shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form action={action} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            placeholder="Name"
            className="mt-1 block w-full p-2 border border-gray-500 rounded-md shadow-sm focus:outline-none bg-black"
          />
        </div>
        {state?.errors?.name && <p>{state.errors.name}</p>}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 block w-full p-2 border border-gray-500 rounded-md shadow-sm focus:outline-none bg-black"
          />
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-400"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            className="mt-1 block w-full p-2 border border-gray-500 rounded-md shadow-sm focus:outline-none bg-black"
          />
        </div>
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          aria-disabled={pending}
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {pending ? 'Submitting...' : 'Sign up'}
        </button>
      </form>
    </div>
  )
}
