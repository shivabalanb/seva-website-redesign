import Image from "next/image";
import Navbar from "./components/navbar";
import { CaretDoubleDown } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div>
      <div
        className="relative shadow-md  bg-cover bg-center h-[800px] rounded-b-3xl flex flex-col  items-center text-center  py-32"
        style={{ backgroundImage: "url('splash.jpg')" }}
      >
        <p
          className="text-7xl font-bold  text-yellow-0 "
          // style={{ textShadow: "2px 2px 4px rgba(0, 134, 225, 0.4)" }}
          //text-transparent bg-clip-text bg-gradient-to-r from-yellow-0  via-[#fef3c7f7] to-yellow-0
        >
          Seva Charities
        </p>
        <p
          className=" text-white font-light text-3xl"
          // style={{ textShadow: "2px 2px 4px rgba(0, 134, 225, 0.4)" }}
        >
          {/* A LITTLE LOVE, A BIG DIFFERENCE! */}A little love, a big
          difference!
        </p>
        <CaretDoubleDown
          className="absolute  bottom-0 mb-5 text-yellow-0"
          size={32}
        />
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        sagittis nisl. Nunc urna sem, laoreet at vehicula non, viverra id massa.
        Nam et lectus id turpis congue dapibus at sit amet mauris. Aliquam vitae
        mollis odio. Duis turpis est, commodo in sagittis a, volutpat nec arcu.
        Quisque metus nunc, lacinia sed faucibus tempor, aliquet sit amet
        tellus. Ut ac diam bibendum, lobortis lorem eu, congue ante. Aenean
        condimentum tellus id accumsan rutrum. Donec interdum pulvinar eros, sed
        tincidunt libero lacinia eu. Phasellus ex tellus, feugiat eu
        sollicitudin et, commodo sit amet dolor. Nunc et ex enim. Morbi ligula
        massa, molestie euismod malesuada eu, sagittis eu est. Donec et velit
        nulla. Sed at dolor sit amet elit sodales pharetra. Pellentesque
        ullamcorper pulvinar augue, facilisis efficitur erat pellentesque et.
        Praesent diam risus, accumsan eget quam sed, iaculis congue ex. Nulla
        viverra enim purus. Duis dui enim, tempor sit amet hendrerit vel,
        condimentum at nisl. Phasellus semper vehicula mauris eget auctor.
        Maecenas libero dui, iaculis sit amet lorem vel, commodo tincidunt
        sapien. Maecenas eu turpis bibendum, rutrum sapien sed, placerat leo.
        Donec fringilla, orci sit amet hendrerit consectetur, dui tortor egestas
        sem, vitae egestas magna orci at est. Proin id est suscipit, tristique
        odio ut, ultrices purus. Proin at mauris id tellus maximus sollicitudin.
        Donec vitae placerat nunc, interdum suscipit augue. Maecenas eget tortor
        eros. Curabitur viverra, metus eget elementum viverra, libero ligula
        ornare orci, at placerat purus ipsum sed eros. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean hendrerit finibus diam et porttitor. Pellentesque nec ante ac
        felis ultrices gravida quis mollis risus. Sed enim orci, interdum nec
        mauris a, suscipit vehicula leo. Aliquam ac lectus vel neque rhoncus
        rutrum. Sed nulla metus, laoreet nec mi sit amet, porta consectetur mi.
        Sed pulvinar porta augue et suscipit. Sed et lacus non massa
        sollicitudin pharetra at ac lorem. Quisque lobortis orci sed sem auctor,
        non porttitor ipsum euismod. In ultrices, elit at finibus varius, tellus
        dolor efficitur justo, bibendum convallis nunc velit eleifend libero.
        Curabitur eu molestie quam. Aliquam egestas pellentesque condimentum.
        Aenean tellus enim, ullamcorper ac eros eu, condimentum tristique ante.
        Morbi condimentum maximus neque, quis rhoncus felis hendrerit varius.
        Vivamus luctus viverra tempus. Pellentesque a tincidunt lectus. Aenean
        in lorem eget justo finibus fringilla. Etiam malesuada metus id
        consequat pretium. Etiam dapibus turpis hendrerit vulputate placerat.
        Praesent pretium massa ut ante commodo ullamcorper. Integer ex massa,
        dictum quis condimentum eget, maximus fermentum nunc. Sed a diam
        laoreet, aliquet enim vel, laoreet nisl.
      </div>
    </div>
  );
}
