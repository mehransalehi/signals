export default function Loading({ text }: { text: string | undefined }) {
    return <div className='fixed w-full h-full bg-black z-50 opacity-50 flex justify-center items-center'>
        <span className="loading loading-ring loading-lg text-primary w-[100px]"></span>
    </div>
}