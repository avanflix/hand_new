import Link from 'next/link'
import Footer from '@/components/ui/Footer'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-hand-neutral-500 to-hand-neutral-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>



        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Make a donation through our website</li>
                  <li>Sign up for our newsletter or volunteer opportunities</li>
                  <li>Contact us through our website forms</li>
                  <li>Create an account or participate in our programs</li>
                </ul>
                <p><strong>Personal Information:</strong> Name, email address, phone number, mailing address, payment information (processed securely through third-party providers)</p>
                <p><strong>Automatically Collected Information:</strong> IP address, browser type, device information, pages visited, and usage patterns</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 2 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process donations and provide tax receipts</li>
                  <li>Communicate about our programs and impact</li>
                  <li>Provide volunteer opportunities and updates</li>
                  <li>Improve our website and services</li>
                  <li>Send newsletters and updates (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 3 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who help us operate our website and process donations</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Consent:</strong> With your explicit consent</li>
                </ul>
                <p>All third-party service providers are contractually obligated to maintain the confidentiality and security of your information.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 4 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure payment processing through certified providers</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 5 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We use cookies and similar technologies to enhance your browsing experience. For more detailed information about our cookie practices, please see our <a href="/cookie-policy" className="text-hand-neutral-600 hover:underline">Cookie Policy</a>.</p>
                <p>You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 6 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p>To exercise these rights, please contact us at Hello@handngo.org</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 7 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 8 */}
            <div className="pb-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-8" />

            {/* Section 9 */}
            <div className="pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> contact@hand.org.in</p>
                  {/* <p><strong>Phone:</strong> +91 70367 77677</p> */}
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
            className="inline-flex items-center px-6 py-3 bg-hand-neutral-600 text-white rounded-lg hover:bg-hand-neutral-700 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
