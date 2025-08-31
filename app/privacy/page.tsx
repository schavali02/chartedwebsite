"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <section id="privacy" className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Privacy Policy
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Your Privacy Matters</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl prose prose-gray dark:prose-invert">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Introduction</h3>
                <p className="text-muted-foreground">
                  This Privacy Policy describes how Charted ("we," "us," or "our") collects, uses, and shares your
                  personal information when you use our mobile application and related services. All iOS apps must provide
                  a publicly accessible Privacy Policy URL in App Store Connect.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
                <p className="text-muted-foreground mb-4">We collect the following categories of data:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Account Information:</strong> Name, email address, and password when you register.
                  </li>
                  <li>
                    <strong>Third-Party Authentication Data:</strong> OAuth tokens and profile data from Spotify, Apple
                    Music, and other connected services.
                  </li>
                  <li>
                    <strong>User Content:</strong> Playlists, posts, comments, and engagement metrics you create.
                  </li>
                  <li>
                    <strong>Payment & Financial Information:</strong> Subscription payments, Stripe account identifiers
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Device identifiers, IP addresses, crash logs, and analytics on how you
                    interact with the app.
                  </li>
                  <li>
                    <strong>Support & Communication Data:</strong> Any information you submit when contacting our support
                    team.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
                <p className="text-muted-foreground mb-4">We use your data to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and maintain core functionality (authentication, playlist sharing, social features).</li>
                  <li>Process subscriptions and payouts, and manage billing.</li>
                  <li>Analyze usage to improve and personalize your experience.</li>
                  <li>Communicate updates, promotions, and support responses.</li>
                  <li>Detect and prevent fraud, abuse, or technical issues.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">How We Share Your Information</h3>
                <p className="text-muted-foreground mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Service Providers:</strong> Stripe (payment processing), analytics platforms, hosting
                    providers, and customer support tools.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or to protect our legal rights.
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Only with your explicit consent, for features like collaborative
                    playlists or integrations.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Security of Your Information</h3>
                <p className="text-muted-foreground">
                  We implement technical and administrative safeguards—such as encryption in transit and at rest, access
                  controls, and regular security reviews—to protect your data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Children's Privacy</h3>
                <p className="text-muted-foreground">
                  Charted is not intended for users under 13 years old. We do not knowingly collect data from anyone under
                  13; if we become aware of such collection, we will delete that information promptly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Your Choices and Rights</h3>
                <p className="text-muted-foreground">
                  Depending on your jurisdiction, you may have the right to access, correct, or delete your personal
                  information, and to object to or restrict certain processing. To exercise these rights, contact us at{" "}
                  <span className="text-primary font-medium">
                    privacy[at]chartedapp[dot]org
                  </span>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h3>
                <p className="text-muted-foreground">
                  We may update this policy to reflect changes in our practices or legal requirements. The "Last updated"
                  date at the top indicates when revisions occur, and material changes will be communicated via in-app
                  notice or email.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-muted-foreground">
                  If you have questions or concerns about this Privacy Policy, please contact:
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong>Charted Privacy Team</strong>
                  <br />
                  Email:{" "}
                  <span className="text-primary font-medium">
                    app[dot]companyname[at]gmail[dot]com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
