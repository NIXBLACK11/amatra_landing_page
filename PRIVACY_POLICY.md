# Privacy Policy for Amatra

**Effective Date: May 22, 2026**

Amatra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App") and our website (the "Site"), collectively referred to as the "Services."

By using the Services, you agree to the collection and use of information in accordance with this Privacy Policy.

---

## 1. Information We Collect

### 1.1 Personal Information
When you create an account and use Amatra, we may collect:
- **Account Details:** Email address, username, age, gender, and country.
- **Authentication Data:** One-Time Passwords (OTP) sent to your email for secure login.
- **Profile Information:** Profile picture URL.
- **Referral Code:** If you used or generated a referral code during onboarding.

### 1.2 User Content
We collect the content you create, upload, or receive from others when using the App. This includes:
- **Wardrobe Photos:** Images of clothing items (headwear, tops, outerwear, bottoms, footwear, etc.) you upload to your personal gallery, along with optional product names and product URLs.
- **Generated Outfits:** AI-composed outfit images created using your uploaded wardrobe items.
- **Posts and Social Interactions:** Posts (which include outfit images, captions, occasion tags such as casual or formal, and season tags such as spring or winter), comments, likes, bookmarks, follows, and notifications.

### 1.3 Usage and Technical Data
- **Device Information:** We may collect information about the device you use to access the App, including device model, operating system version, and unique device identifiers.
- **Log Data:** Our servers (hosted on Google Cloud Run) automatically record information such as your IP address, browser type, and App usage patterns.
- **Local Storage:** We use on-device local storage (MMKV) to store authentication tokens, theme preferences, and search history. Search history is stored exclusively on your device and is never transmitted to our servers. Authentication tokens are transmitted only as required to authenticate your session.

### 1.4 Device Identifier for Abuse Prevention
When you use the free AI outfit creation feature, the app generates a one-way SHA-256 hash derived from your device's vendor identifier (iOS Identifier for Vendor) or Android ID, combined with your device brand and model name. This hash — which cannot be reverse-engineered back to your device — is sent to our servers solely to enforce the free-tier usage limit and prevent abuse. It is not linked to your Amatra account, not shared with third parties, and is deleted when it is no longer needed for abuse prevention.

### 1.5 Payment Information
Payments for our Premium subscription are processed through **Apple In-App Purchase (IAP)**. We do not store your payment card or bank account details on our servers. All billing is handled by Apple and is governed by Apple's Privacy Policy and Apple's Licensed Application End User License Agreement (EULA). Upon successful purchase, Apple provides us with a transaction ID which we verify server-side to activate your subscription. We store your active subscription tier (e.g. Stylist or Pro) on our servers to unlock the corresponding features in the app.

### 1.6 Website (Landing Page) Data
When you visit our website at amatra.co, we may collect standard web server logs including your IP address, browser type, referring URL, and pages visited. We do not currently use third-party analytics or advertising trackers on our Site.

### 1.7 Device Permissions
Amatra requests the following device permissions to enable core features:

- **Photo Library (Read):** Amatra accesses your photo library so you can select photos of your clothing items to add to your virtual wardrobe. For example, when you tap "Add Item" in your wardrobe, you can choose a photo of a jacket from your camera roll; Amatra uses that image to represent the item in your wardrobe and to generate AI outfit combinations.

- **Photo Library (Write / Save):** When you tap the download button on a wardrobe item, Amatra saves that image to your device's native photo library at your explicit request. Amatra only writes to your photo library when you initiate a save action.

- **Media Location (Android):** On Android, Amatra requests the `ACCESS_MEDIA_LOCATION` permission as part of photo library access. This allows the system to include location metadata (EXIF GPS coordinates) embedded in photos. Amatra does not extract, store, or transmit any location coordinates from your photos.

- **Camera:** Amatra accesses your camera so you can take photos of clothing items directly within the app. For example, you can photograph a new shirt and instantly add it to your wardrobe without leaving the app.

- **Microphone:** iOS requires microphone permission alongside camera access when an app uses the device camera. Amatra requests microphone permission as part of iOS camera functionality used to capture clothing photos. Amatra does not record, transmit, or store any audio from your microphone.

### 1.8 Account Feedback and Reports
- **Account Deletion Survey:** When you delete your account, we collect your selected reason for leaving (chosen from: Something broken, Not getting value, Privacy concern, Better alternative, or Other) and an optional free-text explanation. This feedback is used solely to improve the Service and is not linked to your account after deletion.
- **Content Reports:** When you report another user's post, we collect the report (including your user ID and a reference to the reported content) to enable moderation review. Reports are used exclusively for safety and moderation purposes.

---

## 2. How We Use Your Information

We use the collected information for the following purposes:
- **To Provide and Maintain the Service:** Including managing your account, processing wardrobe uploads, and enabling social features.
- **AI Outfit Generation:** To facilitate outfit creation using your uploaded wardrobe items via our AI processing pipeline.
- **Personalization:** To tailor your feed and App experience based on your activity.
- **Communication:** To send OTPs, service-related notifications (likes, comments, follows), and important updates about the Service.
- **Security and Fraud Prevention:** To monitor for prohibited activities, detect abuse, and protect our users and the platform.
- **Referral Program:** To track and credit referral codes entered during onboarding.
- **Legal Compliance:** To comply with applicable laws, regulations, and legal processes.

---

## 3. Sharing Your Information

We do not sell your personal information to third parties. We may share your data in the following limited circumstances:

- **Service Providers:** We share data with third-party vendors who perform services on our behalf, including cloud hosting (Google Cloud Run, `asia-south1`), AI processing, and payment processing (Apple In-App Purchase). These vendors are contractually bound to use your data only to provide the services we request.
- **Publicly Visible Information:** The following is visible to all Amatra users: your username, profile picture, follower and following counts, posts (including outfit images, captions, occasion and season tags), and product names and URLs attached to items in posts you publish.
- **Third-Party Links:** Outfit posts may contain links to third-party product pages (e.g., clothing brand websites). When you follow these links, you leave our Service and are subject to the privacy policies of those third-party sites. We are not responsible for their data practices.
- **Legal Requirements:** We may disclose your information if required by law, court order, or to protect the rights, property, or safety of Amatra, its users, or the public.
- **Business Transfers:** In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.

---

## 4. Your Privacy Rights

Depending on your location, you may have the following rights regarding your personal data:

- **Access:** Request a copy of the personal data we hold about you.
- **Rectification:** Request correction of inaccurate or incomplete data.
- **Deletion:** Request deletion of your personal data. You can delete your account directly in the App (Settings → Delete Account). Account data is removed from our primary database within **30 days** and from secure backups within **60 days**.
- **Portability:** Request a portable copy of your data in a machine-readable format.
- **Objection:** Object to certain processing of your data, such as for direct marketing.
- **Restriction:** Request that we limit how we process your data in certain circumstances.

To exercise any of these rights, contact us at **admin@amatra.co**. We will respond within 30 days.

---

## 5. Data Retention and Deletion

- **Active Accounts:** We retain your information for as long as your account is active or as needed to provide the Services.
- **Account Deletion:** Upon account deletion:
  - Your data is removed from our primary database within **30 days**.
  - Information may persist in our secure backups for up to **60 days** before being completely purged.
- **Wardrobe Images:** Uploaded images are stored on Google Cloud Storage and are deleted upon account deletion.

---

## 6. Security

We implement industry-standard security measures to protect your data, including JWT-based authentication with automatic token refresh, secure HTTPS connections, and Google Cloud's infrastructure security controls. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.

---

## 7. Children's Privacy

Amatra is not intended for children under the age of **13**. We do not knowingly collect personal information from children under 13. Users are required to confirm their age during onboarding. If we become aware that a child under 13 has provided us with personal information, we will take immediate steps to delete such information.

---

## 8. International Data Transfers

Amatra's backend infrastructure is hosted on **Google Cloud Run** in the `asia-south1` region (Mumbai, India). If you are located outside of India, your information may be transferred to and processed in India. We take steps to ensure that appropriate safeguards are in place for such transfers, consistent with applicable data protection laws.

---

## 9. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of material changes by posting the new Privacy Policy on this page with an updated "Effective Date" and, where required, by sending a notification through the App. Your continued use of the Services after such changes constitutes your acceptance of the updated Policy.

---

## 10. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:

**Email:** admin@amatra.co

We aim to respond to all inquiries within **30 days**.
