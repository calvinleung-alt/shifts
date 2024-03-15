export async function GET() {
  const rst = await fetch(`${process.env.BASE_URL}/api/caregivers`, { cache: 'no-store' });
  const data = await rst.json();
  return new Response(JSON.stringify(data));
}