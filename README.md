# Dr. Supriya Bansode — Luxury 3D Medical Aesthetic & Cosmetology Portfolio

A stunning, luxurious, modern, fully responsive 3D portfolio website engineered for **Dr. Supriya Bansode**, a qualified Homeopathic Physician, Cosmetologist, Trichologist, and Laser Expert with 2+ years of professional clinical excellence.

---

## ✨ Key Highlights & Features

1. **3D Interactive Hero Experience:**
   - Real-time Three.js scene featuring floating 3D skincare molecules (hyaluronic & collagen peptide bonds), rotating golden DNA double helix, and mouse-reactive champagne gold particle field.
   - Interactive 3D Doctor Avatar Card with mouse-tracking tilt physics, specular glare lighting, and an instant toggle between the **3D Doctor Avatar** and the **Authentic Clinical Portrait**.

2. **Luxury Medical Aesthetic Design:**
   - Palette: Champagne Gold (`#D4AF37`), Soft Rose Gold (`#DDA094`), Nude Beige, and Deep Obsidian Glassmorphism.
   - Typography: Elegant serif headings (*Playfair Display*, *Cormorant Garamond*) paired with clean, accessible sans-serif body (*Plus Jakarta Sans*).

3. **Complete Section Architecture:**
   - **Hero Section:** Full-screen landing with experience badge, main heading, philosophy quote, CTA buttons, and 3D doctor avatar.
   - **Meet Your Doctor (About):** Interactive photo gallery, medical credentials badges (BHMS, Certified Cosmetologist, Trichologist, Laser Specialist), and the 5 key highlighted pillars.
   - **My Specializations:** 3D hover service cards covering Cosmetology, Trichology, Laser Treatments, and Homeopathic Medicine, with interactive pop-up protocols and direct WhatsApp inquiries.
   - **Why Choose Dr. Supriya:** Animated metrics strip and 6 clinical pillars.
   - **Clinical Environment:** Suite concepts (Dermatology Consultation, Treatment Room, Laser Technology, Reception) with transparent clinical standard notice.
   - **Appointment Booking:** Full interactive form with instant formatting for WhatsApp and the prominent 1-click WhatsApp booking button (`https://wa.me/91YOURNUMBER`).
   - **Testimonials:** Luxury feedback cards with star ratings (editable placeholders).
   - **Contact & Map:** Complete contact identity card, Google Maps embed, phone, Instagram, and clinical hours.
   - **Luxury Footer & Floating WhatsApp Channel:** Persistent accessible WhatsApp button with pulsing beacon.

---

## 🚀 How to Run the Website Locally

1. Open your terminal in this directory:
   ```bash
   cd "c:\Users\l\OneDrive\Desktop\Dr.Supriya"
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

4. To create an optimized production build:
   ```bash
   npm run build
   ```

---

## ⚙️ How to Customize Your Details (WhatsApp, Phone, Address)

All contact details and clinic information are centralized in a single, clean file:
👉 **`src/data/clinicData.js`**

Open `src/data/clinicData.js` to change:
- **`whatsappNumber`**: Set your WhatsApp number (e.g. `"919876543210"` without spaces or symbols).
- **`phone`**: Your clinic telephone number.
- **`clinicAddress`**: Your physical clinic address.
- **`instagram`**: Your Instagram profile URL.
- **`timing`**: Consultation working hours.

---

## 👩‍⚕️ Doctor Photographs & Avatars Included
Located in `public/assets/`:
- `dr_supriya_3d_avatar.jpg`: The 3D doctor avatar in white coat with gold trim.
- `dr_supriya_clinical.jpg`: Authentic clinical photograph in doctor's coat with clinic certifications.
- `dr_supriya_portrait.jpg`: Doctor portrait photograph.
- `dr_supriya_sitting.jpg`: Executive seated photograph.

