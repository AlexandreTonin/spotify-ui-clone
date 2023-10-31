const MainPlaylist = (props:any) => {
    return (
        <div className='bg-zinc-800 flex items-center gap-2 rounded overflow-hidden'>
            <img src={props.playlistCover} alt="" className="w-20" />
            {props.mainPlaylistName}
        </div>
    )
}

export default MainPlaylist