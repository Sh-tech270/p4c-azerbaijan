import { NextRequest, NextResponse } from 'next/server';
import { getInstructors, saveInstructor } from '@/lib/db';
import { Instructor } from '@/lib/types';

export async function GET() {
  try {
    const instructors = await getInstructors();
    return NextResponse.json({ success: true, instructors });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Xəta baş verdi' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { full_name, title, bio, education, p4c_experience, photo_url } = body;

    if (!full_name || !title) {
      return NextResponse.json({ success: false, error: 'Ad və vəzifə tələb olunur' }, { status: 400 });
    }

    const newInst: Instructor = {
      id: body.id || 'inst-' + Date.now().toString(),
      full_name: full_name.trim(),
      title: title.trim(),
      bio: bio?.trim() || '',
      education: education?.trim() || '',
      p4c_experience: p4c_experience?.trim() || '',
      teaching_courses: body.teaching_courses || [],
      photo_url: photo_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      email: body.email?.trim() || '',
      sort_order: body.sort_order ? Number(body.sort_order) : 1,
    };

    const saved = await saveInstructor(newInst);
    return NextResponse.json({ success: true, instructor: saved });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Təlimçi yadda saxlanılarkən xəta baş verdi' }, { status: 500 });
  }
}
