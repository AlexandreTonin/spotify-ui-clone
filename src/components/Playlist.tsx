
const Playlist = (props:any) => {
    return (
        <a href="#" className="flex items-center">
            <div className={`${props.cover} album w-12 h-full rounded mr-3`}>
            </div>
            <div>
                <p>{props.playlistName}</p>
                <p className="text-gray-400">Playlist • Alexandre Tonin</p>
            </div>
        </a>
    )
}

export default Playlist