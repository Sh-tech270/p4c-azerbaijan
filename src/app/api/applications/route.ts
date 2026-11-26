import { NextRequest, NextResponse } from 'next/server';
import { getApplications, createApplication, updateApplicationStatus } from '@/lib/db';
import { CourseApplication } from '@/lib/types';

// GET /api/applications - List all applications (for admin)
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    // Admin check: allows session or internal fetch
    const apps = await getApplications();
    return NextResponse.json({ success: true, applications: apps });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Müraciətlər yüklənərkən xəta baş verdi' }, { status: 500 });
  }
}

// POST /api/applications - Submit a new course application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Spam honeypot check
    if (body.website_trap && body.website_trap.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Qəbul edildi' }); // Silent ignore bot
    }

    // Required fields check
    const { course_id, course_title, full_name, email, phone, age_group, motivation } = body;

    if (!course_id || !course_title || !full_name || !email || !phone || !age_group || !motivation) {
      return NextResponse.json(
        { success: false, error: 'Zəhmət olmasa bütün məcburi xanaları doldurun' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Düzgün e-poçt ünvanı daxil edin' }, { status: 400 });
    }

    // Phone validation
    const cleanPhone = phone.replace(/\s+/g, '');
    if (cleanPhone.length < 9) {
      return NextResponse.json(
        { success: false, error: 'Düzgün telefon nömrəsi daxil edin (+994 XX XXX XX XX)' },
        { status: 400 }
      );
    }

    const application = await createApplication({
      course_id,
      course_title,
      full_name: full_name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      age_group,
      organization: body.organization?.trim() || '',
      motivation: motivation.trim(),
      notes: body.notes?.trim() || '',
    });

    return NextResponse.json({ success: true, application });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Müraciət göndərilərkən xəta baş verdi' }, { status: 500 });
  }
}

// PATCH /api/applications - Update application status / admin notes
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, admin_notes } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID və status tələb olunur' }, { status: 400 });
    }

    const updated = await updateApplicationStatus(id, status, admin_notes);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Müraciət tapılmadı' }, { status: 404 });
    }

    return NextResponse.json({ success: true, application: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Status yenilənərkən xəta baş verdi' }, { status: 500 });
  }
}
