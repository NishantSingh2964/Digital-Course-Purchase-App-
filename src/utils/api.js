
export const createCheckoutSession = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ url: "/success" }); 
    }, 1500);
  });
};
