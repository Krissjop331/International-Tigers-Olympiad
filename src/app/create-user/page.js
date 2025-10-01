'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { registerUser } from '../../../api'
import Navbar from '../../components/navbar'

export default function CreateUser() {
	const [userData, setUserData] = useState({
		full_name: '',
		email: '',
		password: '',
		city: '',
		school: '',
		country: '',
	})
	const [error, setError] = useState(null)
	const router = useRouter()

	const handleChange = e => {
		const { name, value } = e.target
		setUserData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await registerUser(userData)
			if (response) {
				router.push('/admin') // Redirect to admin users page
			}
		} catch (e) {
			setError('Error creating user')
		}
	}

	return (
		<div className='min-h-screen flex flex-col bg-[#fffbf2]'>
			<Navbar />
			<div className='flex-1 p-6 flex items-center justify-center'>
				<div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md text-black'>
					<h1 className='text-2xl font-semibold mb-6 text-center'>
						Create User
					</h1>
					{error && <p className='text-red-500 text-center mb-4'>{error}</p>}
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<label className='block mb-2 text-sm font-medium'>
								Full Name
							</label>
							<input
								type='text'
								name='full_name'
								value={userData.full_name}
								onChange={handleChange}
								className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
								required
							/>
						</div>
						<div className='mb-4'>
							<label className='block mb-2 text-sm font-medium'>Email</label>
							<input
								type='email'
								name='email'
								value={userData.email}
								onChange={handleChange}
								className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
								required
							/>
						</div>
						<div className='mb-4'>
							<label className='block mb-2 text-sm font-medium'>Password</label>
							<input
								type='password'
								name='password'
								value={userData.password}
								onChange={handleChange}
								className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
								required
							/>
						</div>
						<div className='mb-4'>
							<label className='block mb-2 text-sm font-medium'>City</label>
							<input
								type='text'
								name='city'
								value={userData.city}
								onChange={handleChange}
								className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<div className='mb-4'>
							<label className='block mb-2 text-sm font-medium'>School</label>
							<input
								type='text'
								name='school'
								value={userData.school}
								onChange={handleChange}
								className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<div className='mb-4'>
							<label className='block mb-2 text-sm font-medium'>Country</label>
							<input
								type='text'
								name='country'
								value={userData.country}
								onChange={handleChange}
								className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<button
							type='submit'
							className='bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition duration-200'
						>
							Create User
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
