import { NextRequest, NextResponse } from 'next/server';
import { getStatistics, updateStatistic } from '@/lib/db';
import { StatisticItem } from '@/lib/types';

export async function GET() {
  try {
    const stats = await getStatistics();
    return NextResponse.json({ success: true, stats });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Xəta baş verdi' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, value, label, suffix, description } = body;

    if (!id || value === undefined) {
      return NextResponse.json({ success: false, error: 'ID və dəyər tələb olunur' }, { status: 400 });
    }

    const currentStats = await getStatistics();
    const stat = currentStats.find((s) => s.id === id);
    if (!stat) {
      return NextResponse.json({ success: false, error: 'Statistika tapılmadı' }, { status: 404 });
    }

    const updated = await updateStatistic({
      ...stat,
      value: Number(value),
      label: label !== undefined ? label : stat.label,
      suffix: suffix !== undefined ? suffix : stat.suffix,
      description: description !== undefined ? description : stat.description,
    });

    return NextResponse.json({ success: true, stat: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Xəta baş verdi' }, { status: 500 });
  }
}
