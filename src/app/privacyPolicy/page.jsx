// PrivacyPolicy.js
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg shadow-lg mt-20 mb-36 p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-800">Privacy Policy</h1>
      <p className="text-lg leading-relaxed mb-8">
        Welcome to our image hosting platform. Your privacy is critically important to us, and we are committed to protecting your personal information. This privacy policy outlines how we collect, use, and protect your information.
      </p>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">1. Information We Collect</h2>
        <p className="text-lg leading-relaxed mb-4">
          When you use our services, we may collect the following types of information:
        </p>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li><strong>Personal Information:</strong> Such as your name, email address, and details you provide when creating an account.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our platform, including uploaded files, log data, and device details.</li>
          <li><strong>Cookies:</strong> Used to enhance your user experience and analyze traffic patterns.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">2. How We Use Your Information</h2>
        <p className="text-lg leading-relaxed mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>Provide, maintain, and improve our services.</li>
          <li>Communicate with you regarding updates, notifications, and support.</li>
          <li>Analyze trends and monitor user activity to enhance platform performance.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">3. Uploaded Files and Path Responsibility</h2>
        <p className="text-lg leading-relaxed mb-4">
          For privacy and security reasons, we do not retain or store the upload paths of files after they are generated. It is your responsibility to securely record and store the provided paths. 
          If the path is lost, we will not be able to recover the uploaded content.
        </p>
        <p className="text-lg leading-relaxed">
          By using our platform, you accept this limitation and acknowledge that you are responsible for managing your file paths.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">4. Sharing Your Information</h2>
        <p className="text-lg leading-relaxed mb-4">
          We do not sell, rent, or share your personal information with third parties except in the following cases:
        </p>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>To comply with legal obligations or enforce our terms of service.</li>
          <li>To trusted partners who assist in operating our services under strict confidentiality agreements.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">5. Third-Party Cloud Storage</h2>
        <p className="text-lg leading-relaxed mb-4">
          All uploaded images are hosted securely on third-party cloud storage platforms. While we take reasonable measures to ensure the security of your data, we cannot guarantee absolute protection from external risks.
        </p>
        <p className="text-lg leading-relaxed">
          By using our platform, you acknowledge and accept the risks associated with third-party cloud services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">6. Your Rights</h2>
        <p className="text-lg leading-relaxed mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>Access the personal information we have collected about you.</li>
          <li>Request corrections or updates to your information.</li>
          <li>Request the deletion of your data, where applicable.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          To exercise these rights, please contact us at <strong>support@imagecloud.us.kg</strong>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">7. Security</h2>
        <p className="text-lg leading-relaxed">
          We implement robust security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no system can guarantee absolute security. We encourage users to take precautions to protect their accounts and data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">8. Changes to This Policy</h2>
        <p className="text-lg leading-relaxed">
          We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised date. We encourage you to review this page periodically.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">9. Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions about this privacy policy or how we handle your information, please contact us at: <strong>support@imagecloud.us.kg</strong>
        </p>
      </section>
    </div>
  );
}
