/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RtsXC5OAOli
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"

export function Component() {
  return (
    <div
    key="1"
    className="w-full h-full flex items-center justify-center bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat"
  >
    <Card className="mx-auto p-1 space-y-3 bg-white m-4">
  
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-center space-x-4">
          <PhoneIcon className="w-4 h-4" />
          <p className="text-sm text-gray-500">(123) 456-7890</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <MapPinIcon className="w-4 h-4" />
          <p className="text-sm text-gray-500">123 Main St, Anytown, USA</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <p className="text-sm text-gray-500">www.vetclinic.com</p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <div className="flex justify-center space-x-4">
            <Link className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center" href="#">
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link className="bg-blue-400 text-white rounded-full h-12 w-12 flex items-center justify-center" href="#">
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center" href="#">
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link className="bg-red-500 text-white rounded-full h-12 w-12 flex items-center justify-center" href="#">
              <YoutubeIcon className="w-6 h-6" />
            </Link>
            <Link
              className="bg-purple-500 text-white rounded-full h-12 w-12 flex items-center justify-center"
              href="#"
            >
              <TwitchIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <div>
            <h3 className="font-semibold text-gray-700">Question 1?</h3>
            <p className="text-sm text-gray-500">Answer to question 1.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Question 2?</h3>
            <p className="text-sm text-gray-500">Answer to question 2.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Question 3?</h3>
            <p className="text-sm text-gray-500">Answer to question 3.</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4">Price List</button>
        </div>
      </CardContent>
    </Card>
  </div>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function TwitchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
