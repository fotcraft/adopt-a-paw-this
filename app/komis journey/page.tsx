import Image from "next/image"

export default function KomisJourney() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Komis' Journey</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image src="/placeholder.svg" alt="Komis" width={600} height={400} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Meet Komis</h2>
          <p className="mb-4">
            Komis is an 8-year-old local Greek dog from Volos with a heart-wrenching yet inspiring story. At the young
            age of 3, Komis fell victim to a hunter's shot, resulting in the loss of his leg, half his teeth, and part
            of his hearing. Despite these setbacks, Komis' spirit remained unbroken.
          </p>
          <p className="mb-4">
            His journey took another challenging turn when he found himself at the Volos animal shelter during the
            devastating Greek floods. However, fate had better plans for Komis. He was eventually relocated to Melissia,
            where he found a loving family to call his own.
          </p>
          <p>
            Now, although surrounded by love, Komis' quality of life is steadily declining due to his missing leg. This
            is where Adopt-a-Paw steps in, ready to give Komis a new lease on life with a custom-made prosthetic limb.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Komis' Prosthetic Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/placeholder.svg"
              alt="Initial Assessment"
              width={300}
              height={200}
              className="rounded-lg mb-2"
            />
            <h3 className="font-semibold">Initial Assessment</h3>
            <p>Komis visits our clinic for measurements and evaluation.</p>
          </div>
          <div className="text-center">
            <Image src="/placeholder.svg" alt="3D Modeling" width={300} height={200} className="rounded-lg mb-2" />
            <h3 className="font-semibold">3D Modeling</h3>
            <p>Creating a digital model of Komis' custom prosthetic.</p>
          </div>
          <div className="text-center">
            <Image src="/placeholder.svg" alt="Final Fitting" width={300} height={200} className="rounded-lg mb-2" />
            <h3 className="font-semibold">Final Fitting</h3>
            <p>Komis tries on his new prosthetic leg for the first time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

