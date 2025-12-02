export async function getUserProfile() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    name: "Senior Developer",
    avatar: "https://avatar.iran.liara.run/public/33",
    role: "Admin",
    email: "dev@example.com",
  };
}
