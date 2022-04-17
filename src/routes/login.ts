const target = 'https://github.com/login/oauth/authorize';
const clientId = import.meta.env.VITE_CLIENT_ID;

export function get(req: Request) {
  console.log(req);
  const sessionId = '1234';
  
  return {
    status: 302,
    headers: {
      location: `${target}?client_id=${clientId}&state=${sessionId}`
    }
  }
}
  