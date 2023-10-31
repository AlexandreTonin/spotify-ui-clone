const RecentlyPlayed = (props:any) => {
    return (
        <div className="max-h-68 grow bg-zinc-900 flex flex-col rounded p-4 gap-4">
            <img src={props.cover} className='rounded h-48' /><div>
                <p className='font-bold xs'>{props.name}</p>
                <p className='text-zinc-400 text-xs'>de {props.group}</p>
            </div>
        </div>
    )
}

export default RecentlyPlayed