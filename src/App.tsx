import homeicon from './assets/home-iconn.svg'
import searchicon from './assets/search-icon.svg'
import libraryicon from './assets/library-icon.svg'
import addicon from './assets/add-icon.svg'
import rarrowicon from './assets/arrow-right-icon.svg'
import californication from './assets/californication.jpg'
import loop from './assets/loop-icon.svg'
import shuffle from './assets/shuffle-icon.svg'
import pause from './assets/pause-icon.svg'
import skipback from './assets/skipback.svg'
import skipfwd from './assets/skipfwrd.svg'
import boombox from './assets/boombox.svg'
import volume from './assets/volume.svg'
import fullscreen from './assets/fullscreen.svg'
import mic from './assets/micro.svg'
import queue from './assets/queue.svg'
import chevronr from './assets/rchevron.svg'
import chevronl from './assets/lchevron.svg'

function App() {

  return (
    <div className="w-screen h-screen bg-black p-2 flex flex-col">
      <div className="flex gap-2 grow">
        <aside className="text-white w-80 flex flex-col gap-2">
          <div className="bg-[#121212] h-28 rounded flex flex-col px-4 py-2">
            <a href="#" className="flex flex-1 items-center text-lg font-semibold">
              <img src={homeicon} alt="" className="w-8 mr-3" />
              Início
            </a>
            <a href="#" className="flex flex-1 items-center text-lg font-semibold">
              <img src={searchicon} alt="" className="w-8 mr-3" />
              Buscar
            </a>
          </div>

          <div className="bg-[#121212] grow rounded px-4 py-4 flex flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center">
                  <img src={libraryicon} alt="" className="w-8 mr-3" />
                  Sua biblioteca
                </a>

                <div className="flex">
                  <img src={addicon} alt="" className="w-5 mr-3" />
                  <img src={rarrowicon} alt="" className="w-5 mr-3" />
                </div>
              </div>
              <div className="filtro pb-4 flex gap-3 overflow-x-scroll">
                <a href="" className="text-xs rounded-full flex items-center bg-[#2d2d2d] min-w-fit px-2 py-1">Playlists</a>
                <a href="" className="text-xs rounded-full flex items-center bg-[#2d2d2d] min-w-fit px-2 py-1">Podcasts e programas</a>
                <a href="" className="text-xs rounded-full flex items-center bg-[#2d2d2d] min-w-fit px-2 py-1">Álbuns</a>
                <a href="" className="text-xs rounded-full flex items-center bg-[#2d2d2d] min-w-fit px-2 py-1">Artistas</a>
                <a href="" className="text-xs rounded-full flex items-center bg-[#2d2d2d] min-w-fit px-2 py-1">Downloads</a>
                <a href="" className="text-xs rounded-full flex items-center bg-[#2d2d2d] min-w-fit px-2 py-1">Favoritos</a>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4 grow">
              <a href="#" className="flex items-center">
                <div className="album w-12 h-full rounded mr-3">
                </div>
                <div>
                  <p>Red Hot Chilli Peppers</p>
                  <p className="text-gray-400">Playlist • Alexandre Tonin</p>
                </div>
              </a>

              <a href="#" className="flex items-center">
                <div className="album w-12 h-full rounded mr-3">
                </div>
                <div>
                  <p>Red Hot Chilli Peppers</p>
                  <p className="text-gray-400">Playlist • Alexandre Tonin</p>
                </div>
              </a>

              <a href="#" className="flex items-center">
                <div className="album w-12 h-full rounded mr-3">
                </div>
                <div>
                  <p>Red Hot Chilli Peppers</p>
                  <p className="text-gray-400">Playlist • Alexandre Tonin</p>
                </div>
              </a>

              <a href="#" className="flex items-center">
                <div className="album w-12 h-full rounded mr-3">
                </div>
                <div>
                  <p>Red Hot Chilli Peppers</p>
                  <p className="text-gray-400">Playlist • Alexandre Tonin</p>
                </div>
              </a>

              <a href="#" className="flex items-center">
                <div className="album w-12 h-full rounded mr-3">
                </div>
                <div>
                  <p>Red Hot Chilli Peppers</p>
                  <p className="text-gray-400">Playlist • Alexandre Tonin</p>
                </div>
              </a>

            </div>
          </div>
        </aside>

        <main className="text-white bg-[#121212] grow rounded px-6 py-4">
          <div className='flex gap-2'>
            <img src={chevronl} alt="" className='w-8 p-1 bg-black rounded-full' />
            <img src={chevronr} alt="" className='w-8 p-1 bg-black rounded-full' />
          </div>

          <h1 className='font-bold text-2xl mt-4'>Boa tarde!</h1>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className='bg-zinc-800 flex items-center gap-2 rounded overflow-hidden'>
              <img src={californication} alt="" className="w-20" />
              Playlist 1
            </div>
            <div className='bg-zinc-800 flex items-center gap-2 rounded overflow-hidden'>
              <img src={californication} alt="" className="w-20" />
              Playlist 2
            </div>
            <div className='bg-zinc-800 flex items-center gap-2 rounded overflow-hidden'>
              <img src={californication} alt="" className="w-20" />
              Playlist 3
            </div>
            <div className='bg-zinc-800 flex items-center gap-2 rounded overflow-hidden'>
              <img src={californication} alt="" className="w-20" />
              Playlist 4
            </div>
            <div className='bg-zinc-800 flex items-center gap-2 rounded overflow-hidden'>
              <img src={californication} alt="" className="w-20" />
              Playlist 5
            </div>
            <div className='bg-zinc-800 flex items-center gap-2 rounded overflow-hidden'>
              <img src={californication} alt="" className="w-20" />
              Playlist 6
            </div>
          </div>

          <h1 className='font-bold text-2xl mt-4'>Tocados recentemente</h1>

          <div className='flex mt-6 gap-4'>
            <div className="h-60 grow bg-zinc-900 flex flex-col rounded p-4 gap-2"><img src={californication} className='rounded' /><div><p className='font-bold xs'>Californication</p><p className='text-zinc-400 text-xs'>de Red Hot Chilli Peppers</p></div></div>
            <div className="h-60 grow bg-zinc-900 flex flex-col rounded p-4 gap-2"><img src={californication} className='rounded' /><div><p className='font-bold xs'>Californication</p><p className='text-zinc-400 text-xs'>de Red Hot Chilli Peppers</p></div></div>
            <div className="h-60 grow bg-zinc-900 flex flex-col rounded p-4 gap-2"><img src={californication} className='rounded' /><div><p className='font-bold xs'>Californication</p><p className='text-zinc-400 text-xs'>de Red Hot Chilli Peppers</p></div></div>
            <div className="h-60 grow bg-zinc-900 flex flex-col rounded p-4 gap-2"><img src={californication} className='rounded' /><div><p className='font-bold xs'>Californication</p><p className='text-zinc-400 text-xs'>de Red Hot Chilli Peppers</p></div></div>
            <div className="h-60 grow bg-zinc-900 flex flex-col rounded p-4 gap-2"><img src={californication} className='rounded' /><div><p className='font-bold xs'>Californication</p><p className='text-zinc-400 text-xs'>de Red Hot Chilli Peppers</p></div></div>
            <div className="h-60 grow bg-zinc-900 flex flex-col rounded p-4 gap-2"><img src={californication} className='rounded' /><div><p className='font-bold xs'>Californication</p><p className='text-zinc-400 text-xs'>de Red Hot Chilli Peppers</p></div></div>
            <div className="h-60 grow bg-zinc-900 flex flex-col rounded p-4 gap-2"><img src={californication} className='rounded' /><div><p className='font-bold xs'>Californication</p><p className='text-zinc-400 text-xs'>de Red Hot Chilli Peppers</p></div></div>
          </div>
        </main>
      </div>

      <footer className="text-white mt-2 items-center bg-black h-16 flex px-4 justify-between">
        <div className="flex gap-2 items-center">
          <img src={californication} alt="" className="w-12" />
          <div>
            <p>Californication</p>
            <p className="text-xs text-zinc-400">Red Hot Chilli Peppers</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 justify-center">
            <img src={shuffle} alt="" className="w-6 opacity-70" />
            <img src={skipfwd} alt="" className="w-6 opacity-70" />
            <img src={pause} alt="" className="w-10 opacity-90" />
            <img src={skipback} alt="" className="w-6 opacity-70" />
            <img src={loop} alt="" className="w-6 opacity-70" />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <p className="text-xs text-zinc-400">01:15</p>
              <div className="flex h-1 bg-zinc-500 rounded w-96"><div className="flex h-1 bg-white rounded w-48"></div></div>
              <p className="text-xs text-zinc-400">02:30</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={mic} alt="" className="w-5 opacity-70" />
          <img src={queue} alt="" className="w-5 opacity-70" />
          <img src={boombox} alt="" className="w-5 opacity-70" />
          <img src={volume} alt="" className="w-5 opacity-70" />
          <div className="flex h-1 bg-zinc-500 rounded w-24"><div className="flex h-1 bg-white rounded w-48"></div></div>
          <img src={fullscreen} alt="" className="w-5 opacity-70" />
        </div>
      </footer>
    </div>
  )
}

export default App