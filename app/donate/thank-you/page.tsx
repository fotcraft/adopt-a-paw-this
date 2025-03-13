import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Thank You for Your Donation!</CardTitle>
          <CardDescription className="text-center">
            Your contribution will help provide prosthetics for dogs in need.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <p className="mb-4">
              We have sent a receipt to your email address. Your generosity makes a real difference in the lives of dogs
              like Komis.
            </p>
            <p>Follow Komis journey to see how your donation helps!</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/komis-journey">Komis Journey</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

