export async function PUT(req: Request) {
    const rst = await fetch(`${process.env.BASE_URL}/api/caregivers/bulk-update`, { 
        method: 'PUT',
        body: JSON.stringify(await req.json()),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return new Response(JSON.stringify(await rst.json()));
  }