import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="full-width max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best journal app, period.</h1>
        <p className="text-2xl text-white/70 mb-4">
          This is the best app for tracing your mood throue your life. All you
          has to do be honest
        </p>
        <div>
          <Link href={'/sign-in'}  prefetch={false}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
