// import logo from "../assets/images/logo-2000.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/img/logo_a.png"
            alt="Logo"
            className="w-24 h-24 md:w-24 md:h-24 mb-5"
          />
          <p className="text-gray-400 text-center md:text-left text-sm">
            OrangeThink offers reliable and secure image hosting solutions
            designed for individuals and businesses. Enjoy fast upload speeds,
            easy management, and sharing capabilities. Ideal for photographers,
            designers, and anyone in need of high-quality image storage.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacyPolicy"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="https://sitenavigation.ggff.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Navigation Site
              </a>
            </li>

            <li>
              <a
                href="https://www.shopslinker.com/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Shop Navigator
              </a>
            </li>
            <li>
              <a
                href="https://novels-cats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Novel-Cats
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold text-white pb-6">Contact Us</h3>
          <div className="text-gray-400">Email: support@imagecloud.us.kg</div>
          <div className="text-gray-400 mt-2">Phone: +1 (919) 886-5660</div>
          <div className="flex space-x-4 pt-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12v-9H9v-3h3v-2.71C12 7.78 13.794 6 16.172 6c1.053 0 1.956.076 2.22.11v2.57l-1.521.001c-1.194 0-1.422.567-1.422 1.397V12h2.845l-.372 3H15.45V24h7.226c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.013-.608 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.725 0-4.932 2.209-4.932 4.93 0 .39.045.765.127 1.124C7.69 8.094 4.064 6.13 1.64 3.161c-.427.729-.666 1.577-.666 2.475 0 1.708.87 3.213 2.188 4.099-.806-.026-1.566-.248-2.229-.616v.061c0 2.388 1.693 4.374 3.946 4.829-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.617 1.926 2.42 3.309 4.554 3.346-1.67 1.309-3.778 2.087-6.072 2.087-.39 0-.779-.022-1.17-.066 2.179 1.396 4.768 2.212 7.548 2.212 9.051 0 13.998-7.496 13.998-13.988 0-.209-.005-.42-.014-.63.961-.694 1.8-1.562 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.03.24 2.803.51.779.271 1.438.63 2.075 1.267.637.637.996 1.296 1.267 2.075.27.772.451 1.597.51 2.803.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.24 2.03-.51 2.803-.271.779-.63 1.438-1.267 2.075-.637.637-1.296.996-2.075 1.267-.772.27-1.597.451-2.803.51-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.03-.24-2.803-.51-.779-.271-1.438-.63-2.075-1.267-.637-.637-.996-1.296-1.267-2.075-.27-.772-.451-1.597-.51-2.803-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.206.24-2.03.51-2.803.271-.779.63-1.438 1.267-2.075.637-.637 1.296-.996 2.075-1.267.772-.27 1.597-.451 2.803-.51 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.755 0 8.336.012 7.052.07 5.768.128 4.78.327 3.987.66 3.184.994 2.516 1.356 1.854 2.017c-.66.661-1.023 1.33-1.357 2.133-.332.793-.531 1.781-.59 3.065-.057 1.284-.07 1.704-.07 4.984s.012 3.7.07 4.984c.059 1.284.258 2.272.59 3.065.334.803.697 1.472 1.357 2.133.662.661 1.33 1.023 2.133 1.357.793.332 1.781.531 3.065.59 1.284.057 1.704.07 4.984.07s3.7-.012 4.984-.07c1.284-.059 2.272-.258 3.065-.59.803-.334 1.472-.697 2.133-1.357.661-.662 1.023-1.33 1.357-2.133.332-.793.531-1.781.59-3.065.057-1.284.07-1.704.07-4.984s-.012-3.7-.07-4.984c-.059-1.284-.258-2.272-.59-3.065-.334-.803-.697-1.472-1.357-2.133-.661-.661-1.33-1.023-2.133-1.357-.793-.332-1.781-.531-3.065-.59C15.7.012 15.28 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-400 text-sm">
          &copy; 2024 OrangeThink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
