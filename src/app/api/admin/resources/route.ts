import { NextRequest, NextResponse } from 'next/server';
import { getResources, saveResource, deleteResource } from '@/lib/db';
import { ResourceItem } from '@/lib/types';

export async function GET() {
  try {
    const resources = await getResources();
    return NextResponse.json({ success: true, resources });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Xəta baş verdi' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, description, file_format, file_size, download_url } = body;

    if (!title || !download_url) {
      return NextResponse.json(
        { success: false, error: 'Materialın adı və yükləmə linki mütləqdir' },
        { status: 400 }
      );
    }

    const newRes: ResourceItem = {
      id: body.id || 'res-' + Date.now().toString(),
      title: title.trim(),
      category: category || 'Metodik Vəsait',
      description: description?.trim() || '',
      file_format: file_format || 'PDF',
      file_size: file_size?.trim() || '1.0 MB',
      download_url: download_url.trim(),
      cover_url: body.cover_url || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
      author: body.author?.trim() || 'P4C Azərbaycan',
      published_year: body.published_year?.trim() || '2026',
      pages: body.pages ? Number(body.pages) : undefined,
      featured: Boolean(body.featured),
    };

    const saved = await saveResource(newRes);
    return NextResponse.json({ success: true, resource: saved });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Resurs yadda saxlanılarkən xəta baş verdi' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID qeyd edilməyib' }, { status: 400 });
    }
    const success = await deleteResource(id);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Silinmə zamanı xəta baş verdi' }, { status: 500 });
  }
}
