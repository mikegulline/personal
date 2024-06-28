type RedirectUrl = {
  [key: string]: string;
};

export const redirectUrl: RedirectUrl = {
  portfolio: 'https://www.gulline.com/works',
  immunocorp: 'https://www.immunocorp.com/',
  kumato: 'https://www.cho-wa.com/',
  hemplandusa: 'https://www.hemplandusa.com/',
  arcticrubyoil: 'https://arcticrubyoil.com/',
  loyaltofew: 'https://www.loyaltofew.com/',
  formlink: 'https://www.gulline.com/works',
  mail: `mailto:${process.env.EMAIL_ADDRESS}?subject=You're%20Hired!%20%F0%9F%A4%98%F0%9F%8F%BB&body=Hello Michael,%0D%0A%0D%0AYour resume looks amazing!%0D%0A%0D%0AJudging by your skills and background, I think you would make an excellent addition to our team.%0D%0A%0D%0ADo you have a free moment to speak about your future?%0D%0A%0D%0AFriends forever,%0D%0A`,
  linkedin: 'https://www.linkedin.com/in/mikegulline/',
  github: 'https://github.com/mikegulline',
};
