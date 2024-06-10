import {login, signup} from './actions'

export default function LoginPage() {
    return (
        <div className={'w-full p-20'}>
            <form className={'flex flex-col'}>
                <label htmlFor="email">Email:</label>
                <input className={'text-gray-700'} id="email" name="email" type="email" required/>
                <label htmlFor="password">Password:</label>
                <input className={'text-gray-700'}  id="password" name="password" type="password" required/>
                <div className={'flex gap-2'}>
                    <button formAction={login}>Log in</button>
                    <button formAction={signup}>Sign up</button>
                </div>

            </form>
        </div>

    )
}
