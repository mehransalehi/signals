export default function NavigateButton({ Icon, label}) {
    return <div className="card bg-white flex flex-row justify-center items-center shadow-sm hover:translate-y-[-2px] transition-all p-4">
        <Icon className="w-[20px] h-[20px] me-2" />
        <h2 className="text-sm font-bold">{label}</h2>
    </div>
}