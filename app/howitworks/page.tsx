import { PawPrintIcon, ScanIcon, PrinterIcon, HeartIcon } from "lucide-react"

export default function HowItWorks() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">How It Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
            <PawPrintIcon className="h-12 w-12 text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">1. Identify a Dog in Need</h2>
          <p>We work with veterinarians and shelters to find dogs who could benefit from a prosthetic limb.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
            <ScanIcon className="h-12 w-12 text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">2. Create the Cast</h2>
          <p>We use fiberglass tape and specialized tools to create a precise mold of the dog's limb.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
            <PrinterIcon className="h-12 w-12 text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">3. 3D Printing Magic</h2>
          <p>
            The cast is 3D scanned and we use industry-grade 3D printers to craft the prosthetic using flexible plastic
            and nylon.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
            <HeartIcon className="h-12 w-12 text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">4. Fitting and Follow-up</h2>
          <p>We fit the prosthetic and provide ongoing support to ensure the dog adapts well to their new limb.</p>
        </div>
      </div>
    </>
  )
}