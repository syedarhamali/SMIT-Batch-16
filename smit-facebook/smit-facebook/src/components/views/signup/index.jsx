import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../../../config"
import { useNavigate } from "react-router"

function Signup() {
    const [userData, setUserData] = useState({ email: '', password: '' })
      const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userData)
        createUserWithEmailAndPassword(auth, userData.email, userData.password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            navigate("/dashboard")
            console.log("user" , user)
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
            });
    }



    return (
        <div className="flex flex-1 h-full">
            <main className="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-studio border-default">
                <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
                    <div className="mb-10">
                        <h1 className="mt-8 mb-2 lg:text-3xl">Get started</h1>
                        <h2 className="text-sm text-foreground-light">Create a new account</h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div
                            className="flex items-center relative"
                            data-sentry-component="LastSignInWrapper"
                            data-sentry-source-file="LastSignInWrapper.tsx"
                        >
                        </div>
                        <div
                            className="relative"
                            data-sentry-component="SignUpForm"
                            data-sentry-source-file="SignUpForm.tsx"
                        >
                            <div className="w-full py-1 transition-all duration-500 max-h-[1000px] opacity-100">
                                <form id="sign-up-form" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    <div>
                                        <div
                                            name="email"
                                            className="relative text-sm flex flex-col gap-2"
                                        >
                                            <div
                                                className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                                data-formlayout-id="labelContainer"
                                            >
                                                <label
                                                    className="text-sm text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors text-foreground flex gap-2 items-center break-all leading-normal"
                                                    htmlFor="email"
                                                    data-formlayout-id="formLabel"
                                                >
                                                    <span>Email</span>
                                                </label>
                                            </div>
                                            <div
                                                className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                                data-formlayout-id="dataContainer"
                                            >
                                                <div className="" data-formlayout-id="nonBoxInputContainer">
                                                    <input
                                                        id="email"
                                                        autoComplete="email"
                                                        name="email"
                                                        value={userData.email}
                                                        placeholder="you@example.com"
                                                        aria-describedby=":r9:-form-item-description"
                                                        aria-invalid="false"
                                                        className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-sm leading-4 px-3 py-2 h-[34px]"
                                                        defaultValue=""
                                                        onChange={(event) => setUserData({ ...userData, email: event.target.value })}
                                                    />
                                                </div>
                                                <div
                                                    className="mt-2"
                                                    style={{ opacity: 1, transform: "none" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            name="password"
                                            className="relative text-sm flex flex-col gap-2"
                                        >
                                            <div
                                                className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                                data-formlayout-id="labelContainer"
                                            >
                                                <label
                                                    className="text-sm text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors text-foreground flex gap-2 items-center break-all leading-normal"
                                                    htmlFor="password"
                                                    data-formlayout-id="formLabel"
                                                >
                                                    <span>Password</span>
                                                </label>
                                            </div>
                                            <div
                                                className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                                data-formlayout-id="dataContainer"
                                            >
                                                <div className="" data-formlayout-id="nonBoxInputContainer">
                                                    <div
                                                        className="relative"
                                                        id=":ra:-form-item"
                                                        aria-describedby=":ra:-form-item-description"
                                                        aria-invalid="false"
                                                    >
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            autoComplete="new-password"
                                                            placeholder="••••••••"
                                                            name="password"
                                                            className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-sm leading-4 px-3 py-2 h-[34px]"
                                                            defaultValue=""
                                                            value={userData.password}
                                                            onChange={(event) => setUserData({ ...userData, password: event.target.value })}

                                                        />
                                                        <button
                                                            data-size="tiny"
                                                            type="button"
                                                            title="Hide password"
                                                            aria-label="Hide password"
                                                            className="justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs py-1 h-[26px] absolute right-1 top-1 px-1.5"
                                                        >
                                                            <div className="[&_svg]:h-[14px] [&_svg]:w-[14px] text-foreground-lighter">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="lucide lucide-eye"
                                                                >
                                                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                                                    <circle cx={12} cy={12} r={3} />
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div
                                                    className="mt-2"
                                                    style={{ opacity: 1, transform: "none" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-h-[0px] transition-all duration-400 overflow-y-hidden">
                                        <div
                                            className="text-sm"
                                            data-sentry-component="PasswordConditionsHelper"
                                            data-sentry-source-file="PasswordConditionsHelper.tsx"
                                        >
                                            <div
                                                className="flex items-center gap-1 space-x-1.5 transition duration-200 text-foreground-lighter"
                                                data-sentry-component="PasswordCondition"
                                                data-sentry-source-file="PasswordConditionsHelper.tsx"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                                    />
                                                </svg>
                                                <p className="text-sm">Uppercase letter</p>
                                            </div>
                                            <div
                                                className="flex items-center gap-1 space-x-1.5 transition duration-200 text-foreground-lighter"
                                                data-sentry-component="PasswordCondition"
                                                data-sentry-source-file="PasswordConditionsHelper.tsx"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                                    />
                                                </svg>
                                                <p className="text-sm">Lowercase letter</p>
                                            </div>
                                            <div
                                                className="flex items-center gap-1 space-x-1.5 transition duration-200 text-foreground-lighter"
                                                data-sentry-component="PasswordCondition"
                                                data-sentry-source-file="PasswordConditionsHelper.tsx"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                                    />
                                                </svg>
                                                <p className="text-sm">Number</p>
                                            </div>
                                            <div
                                                className="flex items-center gap-1 space-x-1.5 transition duration-200 text-foreground-lighter"
                                                data-sentry-component="PasswordCondition"
                                                data-sentry-source-file="PasswordConditionsHelper.tsx"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                                    />
                                                </svg>
                                                <p className="text-sm">
                                                    Special character (e.g. !?&lt;&gt;@#$%)
                                                </p>
                                            </div>
                                            <div
                                                className="flex items-center gap-1 space-x-1.5 transition duration-200 text-foreground-lighter"
                                                data-sentry-component="PasswordCondition"
                                                data-sentry-source-file="PasswordConditionsHelper.tsx"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                                    />
                                                </svg>
                                                <p className="text-sm">8 characters or more</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-center">
                                        <div>
                                            <iframe
                                                aria-hidden="true"
                                                data-hcaptcha-widget-id="1pa759bxj75"
                                                data-hcaptcha-response=""
                                                src="https://newassets.hcaptcha.com/captcha/v1/4948b4d6847921d7bf0b86388c141311d7f03e2e/static/hcaptcha.html#frame=checkbox-invisible"
                                                style={{ display: "none" }}
                                            />
                                            <textarea
                                                id="g-recaptcha-response-1pa759bxj75"
                                                name="g-recaptcha-response"
                                                style={{ display: "none" }}
                                                defaultValue={""}
                                            />
                                            <textarea
                                                id="h-captcha-response-1pa759bxj75"
                                                name="h-captcha-response"
                                                style={{ display: "none" }}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        data-size="large"
                                        type="submit"
                                        form="sign-up-form"
                                        disabled=""
                                        className="relative space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 w-full flex items-center justify-center text-base px-4 py-2 h-[42px] opacity-50 "
                                    >
                                        {" "}
                                        <span className="truncate">Sign Up</span>{" "}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="my-8 self-center text-sm">
                        <span className="text-foreground-light">Already Have an account?</span>{" "}
                        <a
                            className="underline text-foreground hover:text-foreground-light transition"
                            data-sentry-element="Link"
                            data-sentry-source-file="sign-up.tsx"
                            href="/signin"
                        >
                            Sign In Now
                        </a>
                    </div>
                </div>
                <div className="sm:text-center">
                    <p className="text-xs text-foreground-lighter sm:mx-auto sm:max-w-sm">
                        By continuing, you agree to Supabase's{" "}
                        <a
                            className="underline hover:text-foreground-light"
                            href="https://supabase.com/terms"
                        >
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                            className="underline hover:text-foreground-light"
                            href="https://supabase.com/privacy"
                        >
                            Privacy Policy
                        </a>
                        , and to receive periodic emails with updates.
                    </p>
                </div>
            </main>
            <aside className="flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex">
                <div className="relative flex flex-col gap-6">
                    <div className="absolute select-none -top-12 -left-11">
                        <span className="text-[160px] leading-none text-foreground-muted/30">
                            “
                        </span>
                    </div>
                    <blockquote className="z-10 max-w-lg text-3xl">
                        Tried @supabase for the first time yesterday. Amazing tool! I was able
                        to get my Posgres DB up in no time and their documentation on operating
                        on the DB is super easy! 👏 Can't wait for Cloud functions to arrive!
                        It's gonna be a great Firebase alternative!
                    </blockquote>
                    <a
                        href="https://twitter.com/chinchang457/status/1363347740793524227"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4"
                    >
                        <img
                            src="https://supabase.com/images/twitter-profiles/LTw5OCnv_400x400.jpg"
                            alt="chinchang457"
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col">
                            <cite className="not-italic font-medium text-foreground-light whitespace-nowrap">
                                @chinchang457
                            </cite>
                        </div>
                    </a>
                </div>
            </aside>
        </div>

    )
}

export default Signup