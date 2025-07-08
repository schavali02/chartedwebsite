"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function TermsConditions() {
  const handleEmailClick = () => {
    const email = "app" + "." + "charted" + "@" + "gmail" + "." + "com"
    window.location.href = "mailto:" + email
  }

  return (
    <section id="terms" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Terms & Conditions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl prose prose-gray dark:prose-invert">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground">
                By downloading, installing, or using Charted ("the Service"), you agree to these Terms of Service. If
                you do not agree, please do not use the Service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">2. Definitions</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>"User Content":</strong> Any playlists, posts, comments, or other content you submit.
                </li>
                <li>
                  <strong>"Subscription":</strong> A recurring payment plan for premium features.
                </li>
                <li>
                  <strong>"We," "us," "our":</strong> Charted and its affiliates.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">3. Use of the Service</h3>
              <p className="text-muted-foreground">
                You must be at least 13 years old (or have parental consent where required). You agree to comply with
                all applicable laws and these Terms when using Charted.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">4. Subscriptions and Payments</h3>
              <p className="text-muted-foreground">
                Subscriptions auto-renew until cancelled. You authorize us and our payment processor (Stripe) to charge
                your chosen payment method. Refunds and cancellations are governed by our Subscription Policy, available
                on request.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">5. User Content</h3>
              <p className="text-muted-foreground">
                You retain ownership of your User Content but grant Charted a worldwide, royalty-free license to use,
                display, and distribute it for Service operations. You represent and warrant that you own or have the
                rights to your content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">6. Intellectual Property</h3>
              <p className="text-muted-foreground">
                All intellectual property in the Service—software, designs, logos, and trademarks—is owned by Charted.
                You agree not to copy, modify, or distribute our IP except as expressly permitted.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">7. Prohibited Conduct</h3>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violate laws or third-party rights;</li>
                <li>Upload harmful, infringing, or unlawful content;</li>
                <li>Attempt to disrupt or hack the Service;</li>
                <li>Engage in fraudulent activities.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">8. Termination</h3>
              <p className="text-muted-foreground">
                We may suspend or terminate your access for violations of these Terms or other policies, with or without
                notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">9. Disclaimers of Warranty</h3>
              <p className="text-muted-foreground">
                The Service is provided "as is" without warranties of any kind. We disclaim all implied warranties,
                including merchantability or fitness for a particular purpose.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">10. Limitation of Liability</h3>
              <p className="text-muted-foreground">
                Charted is not liable for indirect, incidental, or consequential damages arising from your use of the
                Service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">12. Changes to Terms</h3>
              <p className="text-muted-foreground">
                We may revise these Terms; the "Last updated" date will reflect changes. Material updates will be
                communicated via the Service or email.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">13. Contact Information</h3>
              <p className="text-muted-foreground">For questions about these Terms, contact:</p>
              <p className="text-muted-foreground mt-2">
                <strong>Charted Support</strong>
                <br />
                Email:{" "}
                <button onClick={handleEmailClick} className="text-primary hover:underline cursor-pointer font-medium">
                  app[dot]companyname[at]gmail[dot]com
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
