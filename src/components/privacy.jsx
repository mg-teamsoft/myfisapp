import React from "react";

const PrivacyPage = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.meta}>
          <strong>Effective Date:</strong> May 1, 2026
        </p>
        <p style={styles.meta}>
          <strong>Last Updated:</strong> May 1, 2026
        </p>

        <section style={styles.section}>
          <p>
            My Fiş App (“we,” “our,” or “us”) respects your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how My Fiş App collects, uses, stores, and protects your
            information when you use the mobile application and related
            services.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>1. Information We Collect</h2>
          <p>Depending on how you use the app, we may collect:</p>
          <ul style={styles.list}>
            <li>Receipt images you upload</li>
            <li>Receipt information extracted from uploaded images</li>
            <li>Information you manually enter into the app</li>
            <li>Technical and usage information required to operate the app</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>2. How We Use Your Information</h2>
          <ul style={styles.list}>
            <li>To upload, store, and display receipt images</li>
            <li>To extract text from receipts using AWS Textract</li>
            <li>To parse receipt data using the OpenAI API</li>
            <li>To organize and manage receipt records for you</li>
            <li>To maintain, improve, and secure the application</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>3. Third-Party Services</h2>
          <p>We use the following third-party services to operate My Fiş App:</p>
          <ul style={styles.list}>
            <li>
              <strong>AWS S3</strong> for secure storage of uploaded receipt
              images
            </li>
            <li>
              <strong>AWS Textract</strong> for OCR processing of receipt images
            </li>
            <li>
              <strong>OpenAI API</strong> to parse and structure receipt data
            </li>
          </ul>
          <p>
            These service providers process data only as needed to provide their
            services to us.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>4. Data Storage and Retention</h2>
          <p>
            Receipt images and extracted receipt information may be stored on
            secure cloud infrastructure. We retain your data only for as long as
            necessary to provide the service, comply with legal obligations, and
            maintain operational security.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>5. Data Sharing</h2>
          <p>We do not sell your personal data.</p>
          <p>
            We may share data only with trusted service providers that help us
            deliver app functionality, or when required by law.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>6. Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect
            your data against unauthorized access, loss, misuse, or disclosure.
            However, no system can be guaranteed to be completely secure.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>7. Children’s Privacy</h2>
          <p>
            My Fiş App is not directed to children under the age of 13, and we
            do not knowingly collect personal data from children.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>8. Your Rights</h2>
          <p>
            Depending on applicable law, you may have the right to request
            access to, correction of, or deletion of your personal data.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>10. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can contact us
            at:
          </p>
          <p>
            <strong>Email:</strong> support@myfisapp.com
          </p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#222",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    lineHeight: 1.7,
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  meta: {
    margin: "4px 0",
    color: "#555",
  },
  section: {
    marginTop: "28px",
  },
  heading: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
  },
};

export default PrivacyPage;