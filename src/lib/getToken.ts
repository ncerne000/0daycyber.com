export async function getCaptchaToken() {
    return new Promise<string | null>((resolve) => {
      grecaptcha.ready(async () => {
        const siteKey = "6LedfWIqAAAAADtDAXVxKS8VVRh0dbDbjke-2xZM";
  
        if (!siteKey) {
          resolve(null);
          return;
        }
  
        const token = await grecaptcha.execute(siteKey, {
          action: 'submit',
        });
  
        resolve(token);
      });
    });
  }
  