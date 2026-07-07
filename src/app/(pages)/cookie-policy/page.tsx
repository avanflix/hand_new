import Link from 'next/link'
import Footer from '@/components/ui/Footer'

export default function CookiePolicy() {
  return (
    <div className=" relative w-full min-h-screen ">
      <div className="relative">
        <Link
          href="/"
          className="fixed top-6 left-6 z-50 inline-flex items-center p-3 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-lg backdrop-blur-md"
          style={{ pointerEvents: 'auto' }}
        >
          ←  Home
        </Link>
      </div>

      <main className="relative z-10 w-[90vw] max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-hand-neutral-500 to-hand-neutral-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn how we use cookies to improve your experience on our website.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.</p>
                <p>Cookies are not harmful and cannot access information on your computer beyond what you choose to share with us.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 2 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className='pl-10'>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Basic website functionality</li>
                  </ul>
                </div>


                <div className='pl-10'>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p>These cookies help us understand how visitors interact with our website by collecting anonymous information about your browsing patterns.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Pages visited and time spent</li>
                    <li>Traffic sources</li>
                    <li>Device and browser information</li>
                  </ul>
                </div>

                <div className="pl-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p>These cookies remember your preferences and settings to enhance your experience on our website.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Language preferences</li>
                    <li>Form data retention</li>
                    <li>Customized content display</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />



            {/* Section 3 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We may use third-party services that place their own cookies on your device. These include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Payment Processors:</strong> For secure donation processing</li>
                  <li><strong>Analytics Services:</strong> To understand website usage patterns</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                </ul>
                <p>These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />


            {/* Section 4 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Cookies</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Website Performance:</strong> Monitor and improve website speed and functionality</li>
                  <li><strong>User Experience:</strong> Remember your preferences and settings</li>
                  <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
                  <li><strong>Analytics:</strong> Understand how our website is used to make improvements</li>
                  <li><strong>Marketing:</strong> Show relevant content and measure campaign effectiveness</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />
            {/* Section 5 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>You have several options for managing cookies:</p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>
                  <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Receive notifications before cookies are set</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie Consent Tools</h3>
                  <p>Some browsers and extensions provide cookie management tools that give you more granular control over cookie settings.</p>
                </div>

                <div className="bg-hand-secondary-50 border border-hand-secondary-200 rounded-lg p-4">
                  <p className="text-hand-secondary-800">
                    <strong>Note:</strong> Disabling cookies may affect the functionality of our website and limit your ability to access certain features.
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 6 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie Retention</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Cookies have different lifespans depending on their purpose:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain until deleted or expired (typically 30 days to 2 years)</li>
                  <li><strong>Essential Cookies:</strong> May have longer retention periods for security purposes</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />
            {/* Section 7 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will post the updated policy on this page and update the &quot;Last Updated&quot; date.</p>
                <p>We encourage you to review this policy periodically to stay informed about our cookie practices.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />
            {/* Section 8 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> Hello@handngo.org</p>
                  {/* <p><strong>Phone:</strong> +91 70367 77677</p> */}
                  <p><strong>Address:</strong> Villa No : 178, Chitrapuri Row House Rd, Chitrapuri Colony, Hyderabad, Telangana 500104</p>
                </div>
                <p>You can also visit our <a href="/privacy-policy" className="text-hand-neutral-600 hover:underline">Privacy Policy</a> for more information about how we handle your data.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
