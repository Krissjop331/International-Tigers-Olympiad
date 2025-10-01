'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../../components/navbar'

export default function AdminUsers() {
	const [activeTab, setActiveTab] = useState('users')
	const [showSidebar, setShowSidebar] = useState(true)
	const [users, setUsers] = useState([
		{
			id: 1,
			full_name: 'John Doe',
			email: 'john@example.com',
			city: 'City A',
			school: 'School A',
			country: 'Country A',
		},
		{
			id: 2,
			full_name: 'Jane Smith',
			email: 'jane@example.com',
			city: 'City B',
			school: 'School B',
			country: 'Country B',
		},
		{
			id: 3,
			full_name: 'Alice Johnson',
			email: 'alice@example.com',
			city: 'City C',
			school: 'School C',
			country: 'Country C',
		},
	])

	const handleDeleteUser = userId => {
		console.log(`Deleted user with ID: ${userId}`)
	}

	return (
		<div className='min-h-screen flex flex-col bg-[#fffbf2]'>
			<Navbar />
			<div className='flex flex-1 overflow-hidden'>
				<div
					className={`bg-white w-64 shadow-md z-10 flex-shrink-0 border-r border-gray-200 ${
						showSidebar ? 'block' : 'hidden'
					}`}
				>
					<div className='p-6 flex items-center justify-center border-b border-gray-200'>
						<Image
							src='/image/lapa.png'
							alt='Tigers Paw'
							width={40}
							height={40}
						/>
						<h2 className='text-lg font-bold'>Admin Panel</h2>
					</div>
					<nav className='mt-6'>
						<div className='px-4 mb-2 text-xs text-gray-500 uppercase tracking-wider'>
							Main
						</div>
						<a
							onClick={() => setActiveTab('users')}
							className='flex items-center px-6 py-3 text-black cursor-pointer'
						>
							Users
						</a>
						<Link
							href='/create-user'
							className='flex items-center px-6 py-3 text-black cursor-pointer'
						>
							Create User
						</Link>
					</nav>
				</div>

				<div className='flex-1 overflow-auto bg-gray-50'>
					<div className='bg-white shadow-sm border-b border-gray-200'>
						<div className='h-16 flex items-center justify-between px-6'>
							<h1 className='ml-4 text-xl font-semibold'>
								{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
							</h1>
						</div>
					</div>

					{activeTab === 'users' && (
						<div className='p-6'>
							<h2 className='text-lg font-semibold mb-4'>Users</h2>
							<div className='overflow-x-auto'>
								<table className='min-w-full divide-y divide-gray-200'>
									<thead>
										<tr>
											<th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												ID
											</th>
											<th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Full Name
											</th>
											<th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Email
											</th>
											<th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												City
											</th>
											<th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												School
											</th>
											<th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Country
											</th>
											<th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Actions
											</th>
										</tr>
									</thead>
									<tbody className='divide-y divide-gray-200'>
										{users.map((user, index) => (
											<tr
												key={user.id}
												className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
											>
												<td className='px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900'>
													{user.id}
												</td>
												<td className='px-4 py-3 whitespace-nowrap text-sm text-gray-700'>
													{user.full_name}
												</td>
												<td className='px-4 py-3 whitespace-nowrap text-sm text-gray-700'>
													{user.email}
												</td>
												<td className='px-4 py-3 whitespace-nowrap text-sm text-gray-700'>
													{user.city}
												</td>
												<td className='px-4 py-3 whitespace-nowrap text-sm text-gray-700'>
													{user.school}
												</td>
												<td className='px-4 py-3 whitespace-nowrap text-sm text-gray-700'>
													{user.country}
												</td>
												<td className='px-4 py-3 whitespace-nowrap text-sm'>
													<Link
														href={`/edit/${user.id}`}
														className='text-blue-500 hover:underline'
													>
														Edit
													</Link>
													<button
														onClick={() => handleDeleteUser(user.id)}
														className='text-red-500 hover:underline ml-4'
													>
														Delete
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
