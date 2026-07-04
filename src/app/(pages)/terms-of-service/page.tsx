import Link from 'next/link'
// import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'

export default function TermsOfService() {
  return (
    <div className=" relative w-full min-h-screen ">

      <Link
        href="/"
        className="fixed top-6 left-6 z-50 inline-flex items-center p-3 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-lg backdrop-blur-md"
        style={{ pointerEvents: 'auto' }}
      >
        ←  Home
      </Link>


      <main className="relative z-10 w-[90vw] max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-hand-neutral-500 to-hand-neutral-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>


        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>By accessing and using the HAND (Human Action For Need and Development) website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>These Terms of Service apply to all visitors, users, and others who access or use our services. If you disagree with any part of these terms, then you may not access our services.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 2 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>HAND provides an online platform that connects donors, volunteers, and communities to support humanitarian efforts worldwide. Our services include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Online donation processing</li>
                  <li>Volunteer opportunity coordination</li>
                  <li>Project information and updates</li>
                  <li>Educational resources and content</li>
                  <li>Community engagement tools</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 3 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>To access certain features of our service, you may be required to create an account. You must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
                <p>We reserve the right to terminate accounts that violate these terms or engage in fraudulent activities.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 4 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Donations and Payments</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>All donations are processed through secure third-party payment processors. By making a donation, you agree that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Donations are final and non-refundable (except as required by law)</li>
                  <li>You are authorized to use the payment method provided</li>
                  <li>You understand how your donation will be used</li>
                  <li>Tax receipts will be provided for qualified donations</li>
                </ul>
                <p>We are committed to transparency in how donations are used to support our humanitarian programs.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />


            {/* Section 5 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Volunteer Participation</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Volunteers participate at their own risk and agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Follow all volunteer guidelines and codes of conduct</li>
                  <li>Complete required training and background checks</li>
                  <li>Maintain confidentiality of sensitive information</li>
                  <li>Represent HAND appropriately in all interactions</li>
                </ul>
                <p>HAND reserves the right to remove volunteers who violate these terms or engage in inappropriate conduct.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 6 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Content and Intellectual Property</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Our website contains content including text, images, videos, and logos that are protected by intellectual property laws. You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Create derivative works based on our content</li>
                  <li>Scrape or automate access to our website</li>
                </ul>
                <p>User-generated content must not violate intellectual property rights or contain inappropriate material.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 7 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Activities</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>You agree not to engage in any of the following prohibited activities:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Impersonating HAND staff or other organizations</li>
                  <li>Harassing, threatening, or abusing other users</li>
                  <li>Transmitting malware or engaging in hacking activities</li>
                  <li>Using our services for commercial purposes without permission</li>
                  <li>Submitting false or misleading information</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 8 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers and Limitations</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Our services are provided &quot;as is&quot; without warranties of any kind. We disclaim all warranties, express or implied, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Accuracy, completeness, or timeliness of information</li>
                  <li>Security or freedom from harmful components</li>
                  <li>Continuous or uninterrupted service availability</li>
                </ul>
                <p>Our liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />
            {/* Section 9 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any violation of these terms.</p>
                <p>Upon termination, your right to use our services will cease immediately, but provisions regarding intellectual property, disclaimers, and limitations of liability will survive.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 10 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
                <p>Any disputes arising from these terms will be resolved through binding arbitration in accordance with the rules of [Arbitration Organization].</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 11 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.</p>
                <p>Your continued use of our services after changes are posted constitutes acceptance of the modified terms.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />
            {/* Section 12 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> Hello@handngo.org</p>
                  <p><strong>Phone:</strong> +91 70367 77677</p>
                  <p><strong>Address:</strong> Villa No : 178, Chitrapuri Row House Rd, Chitrapuri Colony, Hyderabad, Telangana 500104</p>
                </div>
              </div>
            </div>
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
