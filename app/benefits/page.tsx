import Image from "next/image"

export default function Benefits() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Benefits of Prosthetic Limbs for Dogs</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/placeholder.svg"
            alt="Dog with prosthetic limb"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="mb-4">
            While dogs often appear to adapt well after losing a limb, the long-term effects on their health and quality
            of life can be significant. Prosthetic limbs offer numerous benefits that go beyond mere mobility:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved mobility and independence</li>
            <li>Reduced strain on remaining limbs</li>
            <li>Better spinal alignment</li>
            <li>Increased activity levels and exercise</li>
            <li>Enhanced quality of life</li>
            <li>Prevention of muscle atrophy</li>
            <li>Improved cardiovascular health</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Long-term Health Benefits</h2>
        <p className="mb-4">
          Prosthetic limbs can significantly improve a dog's long-term health prospects. By restoring a more natural
          gait, prosthetics help distribute weight evenly across all limbs, reducing the risk of arthritis and joint
          problems in the remaining limbs.
        </p>
        <p className="mb-4">
          Additionally, the use of prosthetics can help maintain proper spinal alignment, preventing back problems that
          often occur when a dog compensates for a missing limb over an extended period.
        </p>
        <p>
          Studies have shown that dogs with prosthetic limbs often experience a significant improvement in their overall
          quality of life, displaying increased activity levels and improved social interactions with both humans and
          other animals.
        </p>
      </div>
    </div>
  )
}

