import { Button } from '@vechaiui/button'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import programmer from '../public/lottie/programmer.json'
import email from '../public/lottie/email-verification.json'
import location from '../public/lottie/location-pin.json'
import phone from '../public/lottie/phone-icon-animation.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-12">
        <div className=" p-4">
          <h2 className="text-left text-6xl font-bold mt-5">
            <span className="text-left text-sm ">Bakare Abiola alias! </span>
            Starcode
          </h2>
          <h2 className="text-left text-xl font-bold leading-8 mt-5">
            Developer by day work with Batman by night.
          </h2>
          <h2 className="text-left text-xl font-bold leading-8">
            In love with both the frontend and the backend of things{' '}
          </h2>
          <Button
            variant="solid"
            size="lg"
            color="primary"
            className="mt-8 px-12 text-bold"
          >
            Hire me
          </Button>
          <div class="max-w-sm mt-5 bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
            <div className="px-4 inline-flex items-center">
              <Player
                autoplay
                loop
                src={email}
                style={{ height: '64px', width: '64px' }}
              />
              <h2 className="ml-4">iamstarcode@gmail.com</h2>
            </div>
          </div>
          <div class="max-w-sm mt-5 bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
            <div className="px-4 inline-flex items-center">
              <Player
                autoplay
                loop
                src={phone}
                style={{ height: '64px', width: '64px' }}
              />
              <h2 className="ml-4">+2348184991004</h2>
            </div>
          </div>
          <div class="max-w-sm mt-5 bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
            <div className="px-4 inline-flex items-center">
              <Player
                autoplay
                loop
                src={location}
                style={{ height: '64px', width: '64px' }}
              />
              <h2 className="ml-4">Gotham city</h2>
            </div>
          </div>
        </div>
        <div className="">
          <Player
            autoplay
            loop
            src={programmer}
            style={{ height: '400px', width: '400px' }}
          >
            <Controls
              visible={false}
              buttons={['play', 'repeat', 'frame', 'debug']}
            />
          </Player>
        </div>
        <div class="inline-flex flex-wrap gap-3 max-w-[25rem]">

          <button
            id="facebook"
            class="bg-white p-2 sticky duration-500 border-2 border-blue-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 "
          >
          <a href="https://twitter.com/i_am_starcode" target="_blank"> <FontAwesomeIcon icon={faTwitter} /></a> 
          </button>

          <button
            id="instagram"
            class=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 "
          >
            <i class="fab fa-instagram"></i>
          </button>

          <button
            id="whatsapp"
            class="bg-white duration-500    w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white"
          >
            <i class="fab fa-whatsapp"></i>
          </button>

          <button
            id="youtube"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl"
          >
            <i class="fab fa-youtube"></i>
          </button>

          <button
            id="snapchat"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-yellow-300 border-yellow-300 hover:bg-yellow-300 hover:text-white text-2xl"
          >
            <i class="fab fa-snapchat-ghost"></i>
          </button>

          <button
            id="linkedin"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl"
          >
            <i class="fab fa-linkedin-in"></i>
          </button>

          <button
            id="tiktok"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl"
          >
            <i class="fab fa-tiktok"></i>
          </button>

          <button
            id="telegram"
            class="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl"
          >
            <i class="fab fa-telegram-plane"></i>
          </button>

          <button
            id="pinterest"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl"
          >
            <i class="fab fa-pinterest-p"></i>
          </button>

          <button
            id="spotify"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-green-500 border-green-500 hover:bg-green-500 hover:text-white text-2xl"
          >
            <i class="fab fa-spotify"></i>
          </button>

          <button
            id="discord"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl"
          >
            <i class="fab fa-discord"></i>
          </button>

          <button
            id="reddit"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white text-2xl"
          >
            <i class="fab fa-reddit-alien"></i>
          </button>

          <button
            id="googleplus"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl"
          >
            <i class="fab fa-google-plus-g"></i>
          </button>

          <button
            id="skype"
            class="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl"
          >
            <i class="fab fa-skype"></i>
          </button>

          <button
            id="line"
            class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-green-400 border-green-400 hover:bg-green-400 hover:text-white text-2xl"
          >
            <i class="fab fa-line"></i>
          </button>
        </div>
      </div>
    </>
  )
}
