import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Adopt-a-Paw</h1>
        <p className="text-xl mb-8">Giving dogs a new leash on life with 3D printed prosthetics</p>
        <Link
          href="/how-it-works"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Learn How It Works
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              At Adopt-a-Paw, we believe every dog deserves the chance to run, play, and live life to the fullest. Our
              mission is to provide affordable, custom-made 3D printed prosthetic limbs to dogs in need.
            </p>
            <p>
              Founded in 2025 and operating from Athens, Greece, we combine cutting-edge technology with compassionate
              care to make a difference in the lives of our furry friends.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/placeholder.svg"
              alt="Happy dog with prosthetic limb"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Current Project: Komis' Journey</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-auto">
            <Image src="/placeholder.svg" alt="Komis" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div>
            <p className="mb-4">
              Meet Komis, an 8-year-old local Greek dog from Volos. At age 3, Komis lost his leg due to a hunter's shot.
              Despite facing numerous challenges, including the Greek floods, Komis now has a loving family in Melissia.
            </p>
            <p className="mb-4">
              We're currently working on creating a custom prosthetic for Komis to improve his quality of life.
            </p>
            <Link href="/komis-journey" className="text-blue-500 hover:underline">
              Follow Komis' Journey
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
        <Link
          href="/donate"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Donate Now
        </Link>
      </section>
    </div>
  )
}

