export async function PUT(req: Request, context: { params: { userId: string } }) {
    const rst = await fetch(`${process.env.BASE_URL}/api/caregivers/${context.params.userId}`, { 
        method: 'PUT',
        body: JSON.stringify(await req.json()),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return new Response(JSON.stringify(await rst.json()));
  }