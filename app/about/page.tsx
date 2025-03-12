import Image from "next/image"

export default function About() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">About Adopt-a-Paw</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Adopt-a-Paw is a non-profit organization dedicated to improving the lives of dogs with limb disabilities
            through cutting-edge 3D printed prosthetics.
          </p>
          <p className="mb-4">
            Founded in 2025 and operating from Athens, Greece, our mission is to provide affordable, custom-made
            prosthetic limbs to dogs in need, giving them a chance to run, play, and live life to the fullest.
          </p>
          <p className="mb-4">
            With a team of skilled veterinarians, 3D printing specialists, and passionate animal lovers, we're committed
            to making a difference, one paw at a time.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Experienced veterinarians specializing in canine orthopedics</li>
            <li>Skilled 3D printing technicians and engineers</li>
            <li>Passionate animal welfare advocates</li>
            <li>Dedicated volunteers who assist in various aspects of our operations</li>
          </ul>
        </div>
        <div>
          <Image
            src="/placeholder.svg"
            alt="Dog with prosthetic limb"
            width={600}
            height={400}
            className="rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic">A happy pup enjoying life with their new prosthetic limb</p>
        </div>
      </div>
    </>
  )
}

