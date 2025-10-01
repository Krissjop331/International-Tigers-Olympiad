'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'; // Обратите внимание на новый импорт
import { useState } from 'react'
import { loginUser } from '../../../api'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault()
        setErrorMessage('') // Сброс сообщения об ошибке

        // Валидация ввода
        if (!email || !password) {
            setErrorMessage('Пожалуйста, заполните все поля.')
            return
        }

        try {
            const response = await loginUser ({ email, password })
            if (response && response.token) {
                // Сохранение токена в куки
                Cookies.set('authToken', response.token, { expires: 7 }) // Кука будет действительна 7 дней
                // Успешный вход, перенаправление на админку
                router.push('/admin')
            } else {
                // Обработка ошибок от сервера
                setErrorMessage(response.message || 'Ошибка входа. Попробуйте еще раз.')
            }
        } catch (error) {
            setErrorMessage('Произошла ошибка. Пожалуйста, попробуйте позже.')
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-[#fffbf2]'>
            <div className='bg-white p-8 rounded-lg shadow-md w-96'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Вход в админку</h2>
                {errorMessage && <p className='text-red-500 mb-4'>{errorMessage}</p>}
                <form onSubmit={handleLogin}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Пароль</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600'
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}