import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FetchData } from '../../res/FetchData'
import { PswSchema, UserNameSchema } from '../../schema/schema'
import { messStore } from '../../store/messStore'
import type { UserData } from '../../types/types'

function Login() {
	const [load, setLoad] = useState(false)
	//

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	const handleClick = () => {
		setLoad(true)
	}

	const submit = (data: UserData) => {
		FetchData(data).then(() => setLoad(false))
	}

	return (
		<div>
			{messStore.isOpen && (
				<motion.div
					initial={{ opacity: 0, scaleY: 0, x: 20 }}
					animate={{ opacity: 1, scaleY: 1, x: 0 }}
					className={`w-[240px] h-[60px]
						rounded-2xl fixed flex justify-center items-center m-8 
			${messStore.success ? 'success' : 'success_false'}`}
				>
					{messStore.message}
				</motion.div>
			)}

			<div className='mcc w-[100vw] h-[100vh]'>
				<motion.form
					onSubmit={handleSubmit(submit)}
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 10 }}
					className='w-[400px] h-[390px] sm:border
			border-[#444] rounded-2xl'
				>
					<h2 className='text-center pt-21 pb-10 text-[24px]'>Login</h2>

					{/* Username */}
					<div className='mx-auto w-[80%]'>
						<input
							type='text'
							placeholder='Enter username...'
							className='border w-[100%] py-5 px-8
						rounded-4xl border-[#4b4b4b]
						outline-0 focus:border-[#959494]'
							{...register('username', UserNameSchema)}
						/>
						{errors.username?.message && (
							<p
								className='text-center text-red-700
						mt-2'
							>
								{errors.username?.message}
							</p>
						)}
					</div>

					{/* Psw */}

					<div
						className='mx-auto w-[80%]
				mt-5'
					>
						<input
							type='text'
							placeholder='Enter password...'
							className='border w-[100%] py-5 px-8
						rounded-4xl border-[#4b4b4b]
						outline-0 focus:border-[#959494]'
							{...register('password', PswSchema)}
						/>
						{errors.password?.message && (
							<p
								className='text-center text-red-700
						mt-2'
							>
								{errors.password?.message}
							</p>
						)}
					</div>

					<div className='w-[80%] mx-auto'>
						<button
							onClick={handleClick}
							className='w-[100%] mt-5
					bg-gray-800 active:bg-gray-700 py-5 rounded-4xl'
						>
							{load ? 'loading...' : 'Submit'}
						</button>
					</div>
				</motion.form>
			</div>
		</div>
	)
}

export default observer(Login)
