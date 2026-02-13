# Contact form email setup (EmailJS)

So that form submissions are sent to **mohdsithik0786@gmail.com**, set up EmailJS and add your keys.

## 1. Create an EmailJS account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up (free tier is enough)

## 2. Add an email service

1. In the dashboard: **Email Services** → **Add New Service**
2. Choose **Gmail** (or another provider)
3. Connect your Gmail (mohdsithik0786@gmail.com) and complete the steps
4. Copy the **Service ID** (e.g. `service_xxxxx`)

## 3. Create an email template

1. **Email Templates** → **Create New Template**
2. Set **To Email** to: `mohdsithik0786@gmail.com` (or leave empty and use `{{to_email}}`)
3. Set **Subject** to: `{{subject}}`
4. In the body, use these variables (so the app can fill them in):

   - `{{from_name}}` – sender’s name  
   - `{{from_email}}` – sender’s email  
   - `{{subject}}` – subject  
   - `{{message}}` – message body  

   Example body:

   ```
   New message from your portfolio

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```

5. Save and copy the **Template ID** (e.g. `template_xxxxx`)

## 4. Get your public key

1. **Account** → **API Keys** (or **General**)
2. Copy your **Public Key**

## 5. Add keys to the project

1. In the project root, copy the example env file:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` and set:

   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. Restart the dev server (`npm start`) and run a test submit.

For **deploy** (e.g. GitHub Pages), set the same variables in your build environment or in GitHub Actions secrets, then run `npm run build` so they are baked into the build.
