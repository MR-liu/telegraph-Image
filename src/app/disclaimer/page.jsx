/* eslint-disable react/no-unescaped-entities */
// Disclaimer.js
import React from "react";

export default function Disclaimer() {
  return (
    <div className="container mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg shadow-lg mt-20 mb-36 p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-800">Disclaimer</h1>
      <p className="text-lg leading-relaxed mb-8">
        This disclaimer outlines the limitations of liability and responsibilities associated with using our image hosting platform. By accessing or using our platform, you agree to the terms outlined below.
      </p>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">1. General Use Disclaimer</h2>
        <p className="text-lg leading-relaxed">
          The services provided on this platform are offered "as is" and "as available." We make no guarantees regarding the accuracy, reliability, or availability of our services. Use the platform at your own risk, and ensure compliance with applicable laws and regulations in your region.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">2. Content Responsibility</h2>
        <p className="text-lg leading-relaxed mb-4">
          You are solely responsible for any content you upload, share, or store on our platform. This includes ensuring that your content does not violate any copyrights, trademarks, or other legal rights. We do not monitor or verify user-uploaded content, and we disclaim all liability for any issues arising from such content.
        </p>
        <p className="text-lg leading-relaxed">
          If your content is reported for violating laws or our terms of service, we reserve the right to remove it without prior notice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">3. Third-Party Cloud Storage</h2>
        <p className="text-lg leading-relaxed mb-4">
          Our platform uses third-party cloud storage to host uploaded files. While we strive to ensure secure data storage, we cannot guarantee the absolute safety of your files. Any risks related to the storage of your files are assumed by you.
        </p>
        <p className="text-lg leading-relaxed">
          We disclaim responsibility for data breaches, losses, or interruptions caused by third-party providers. Users are advised to avoid uploading sensitive or private content to our platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">4. Upload Path Management</h2>
        <p className="text-lg leading-relaxed">
          Our platform does not retain or store upload paths after they are provided. Users are solely responsible for recording and securely managing these paths. If a path is lost, we will not be able to recover or provide access to the uploaded content.
        </p>
        <p className="text-lg leading-relaxed">
          By using our services, you acknowledge and accept this limitation and agree to take responsibility for managing your own upload paths.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">5. Limitation of Liability</h2>
        <p className="text-lg leading-relaxed mb-4">
          To the fullest extent permitted by law, we disclaim all liability for any indirect, incidental, or consequential damages resulting from your use or inability to use our platform. This includes, but is not limited to:
        </p>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>Data loss or corruption.</li>
          <li>Unauthorized access to your files or account.</li>
          <li>Service interruptions or downtime.</li>
          <li>Errors caused by third-party providers.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Users are encouraged to take appropriate precautions to back up their content and secure their accounts.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">6. No Guarantee of Service</h2>
        <p className="text-lg leading-relaxed">
          We reserve the right to modify, suspend, or terminate any aspect of the platform at any time without prior notice. While we strive to maintain uninterrupted service, we cannot guarantee constant availability or error-free functionality.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">7. Indemnification</h2>
        <p className="text-lg leading-relaxed">
          You agree to indemnify and hold harmless our platform, its owners, and affiliates from any claims, damages, or expenses arising out of your use of the platform, your violation of these terms, or your infringement of any third-party rights.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">8. Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions about this disclaimer or our platform, please contact us at: <strong>support@imagecloud.us.kg</strong>.
        </p>
      </section>
    </div>
  );
}
