/* eslint-disable react/no-unescaped-entities */
// TermsOfService.js
import React from "react";

export default function TermsOfService() {
  return (
    <div className="container mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg shadow-lg mt-20 mb-36 p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-800">Terms of Service</h1>
      <p className="text-lg leading-relaxed mb-8">
        Welcome to our image hosting platform. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our platform.
      </p>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">1. Acceptance of Terms</h2>
        <p className="text-lg leading-relaxed">
          By accessing or using our website, you agree to be bound by these terms of service, our privacy policy, and any additional terms and conditions that may apply to specific sections of the website or services. If you do not agree to these terms, you must not use our services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">2. User Responsibilities</h2>
        <p className="text-lg leading-relaxed mb-4">
          As a user of our platform, you are responsible for:
        </p>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>Providing accurate and truthful information during account registration.</li>
          <li>Ensuring that the content you upload does not violate any laws, copyrights, or third-party rights.</li>
          <li>Maintaining the confidentiality of your account credentials and being responsible for all activities conducted through your account.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">3. Prohibited Activities</h2>
        <p className="text-lg leading-relaxed mb-4">
          You agree not to use our platform for any of the following purposes:
        </p>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>Uploading, storing, or sharing content that is illegal, harmful, or obscene.</li>
          <li>Engaging in fraudulent activities or impersonating other individuals.</li>
          <li>Attempting to disrupt or interfere with the platform's functionality or security.</li>
          <li>Using automated tools to access or misuse the platform without authorization.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">4. Content Ownership and Usage</h2>
        <p className="text-lg leading-relaxed mb-4">
          You retain ownership of any content you upload to our platform. By uploading content, you grant us a limited, non-exclusive, royalty-free license to store, display, and share the content as required to provide our services. We do not claim ownership of your content.
        </p>
        <p className="text-lg leading-relaxed">
          You are solely responsible for ensuring that you have the necessary rights and permissions to upload and share the content.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">5. Uploaded Content and Path Responsibility</h2>
        <p className="text-lg leading-relaxed">
          For privacy and security reasons, we do not store or retain the upload paths of files after they are generated and shared with you. 
          It is your sole responsibility to record and securely save the provided paths after uploading. 
          If the path is lost, we will not be able to recover or provide access to the uploaded content.
        </p>
        <p className="text-lg leading-relaxed">
          By using our service, you acknowledge and accept this limitation. We recommend carefully storing your upload paths to ensure continued access to your content.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">6. Third-Party Cloud Storage</h2>
        <p className="text-lg leading-relaxed">
          All uploaded images are hosted on third-party cloud storage platforms. While we strive to ensure data security, we cannot guarantee the absolute safety of your files due to potential risks beyond our control. By using our platform, you acknowledge and accept these risks.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">7. Service Availability</h2>
        <p className="text-lg leading-relaxed">
          We aim to provide uninterrupted service but do not guarantee continuous access to our platform. We reserve the right to modify, suspend, or terminate the service at any time without prior notice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">8. Limitation of Liability</h2>
        <p className="text-lg leading-relaxed">
          To the fullest extent permitted by law, we shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our platform. This includes, but is not limited to, data loss, unauthorized access, or service disruptions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">9. Termination</h2>
        <p className="text-lg leading-relaxed">
          We reserve the right to terminate or suspend your account if you violate these terms of service or engage in activities that harm the platform, other users, or our reputation. Termination may occur without prior notice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">10. Modifications to Terms</h2>
        <p className="text-lg leading-relaxed">
          We may update these terms of service from time to time. The latest version will always be available on this page. Continued use of our platform constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">11. Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions or concerns regarding these terms of service, please contact us at: <strong>support@imagecloud.us.kg</strong>
        </p>
      </section>
    </div>
  );
}
