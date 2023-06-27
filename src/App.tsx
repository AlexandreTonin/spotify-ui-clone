import { Home } from "./components/main/home"
import { Player } from "./components/player/player"
import { Sidebar } from "./components/sidebar/sidebar"
import homeicon from './assets/home-iconn.svg'
import searchicon from './assets/search-icon.svg'
import libraryicon from './assets/library-icon.svg'
import addicon from './assets/add-icon.svg'
import rarrowicon from './assets/arrow-right-icon.svg'
import album from './assets/rhcp-album.jpeg'

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

        <main className="text-white bg-[#121212] grow rounded">

        </main>
      </div>

      <footer className="text-white mt-2 items-center bg-black h-16 flex px-4 justify-between">
        <div className="flex-1">
          adasdasdasdasdasdasdasdas
        </div>
        <div className="flex-1 flex justify-center">
          <p>oi</p>
          <p>da</p>
          <p>das</p>
        </div>
        <div className="flex-1 flex justify-end">
          ccccaaaaaaaaaaaa
        </div>
      </footer>
    </div>
  )
}

export default App
