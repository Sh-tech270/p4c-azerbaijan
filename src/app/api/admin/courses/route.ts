import { NextRequest, NextResponse } from 'next/server';
import { getCourses, saveCourse } from '@/lib/db';
import { Course } from '@/lib/types';

export async function GET() {
  try {
    const courses = await getCourses();
    return NextResponse.json({ success: true, courses });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Xəta baş verdi' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, track, duration_hours, format, target_audience, short_description } = body;

    if (!title || !track || !duration_hours) {
      return NextResponse.json({ success: false, error: 'Məcburi sahələri doldurun' }, { status: 400 });
    }

    const newCourse: Course = {
      id: body.id || 'course-' + Date.now().toString(),
      slug:
        body.slug ||
        title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, ''),
      title: title.trim(),
      track: track as 'trainer' | 'participant',
      level: body.level ? Number(body.level) : undefined,
      duration_hours: Number(duration_hours),
      format: (format as 'Onlayn' | 'Əyani' | 'Hibrid') || 'Onlayn',
      price: body.price ? Number(body.price) : null,
      target_audience: target_audience?.trim() || 'Hər kəs üçün',
      short_description: short_description?.trim() || '',
      long_description: body.long_description?.trim() || short_description || '',
      learning_outcomes: body.learning_outcomes || [],
      syllabus: body.syllabus || [],
      requirements: body.requirements || '',
      next_batch: body.next_batch || 'Tezliklə',
      is_active: body.is_active !== undefined ? body.is_active : true,
      faqs: body.faqs || [],
      instructor_name: body.instructor_name || '',
    };

    const saved = await saveCourse(newCourse);
    return NextResponse.json({ success: true, course: saved });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Kurs yadda saxlanılarkən xəta baş verdi' }, { status: 500 });
  }
}
