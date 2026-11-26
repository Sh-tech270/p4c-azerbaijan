export type CourseTrack = 'trainer' | 'participant';

export interface CourseModule {
  module: string;
  topics: string[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  track: CourseTrack; // 'trainer' (Təlimçi Ol) or 'participant' (İştirakçı Ol)
  level?: number;
  duration_hours: number;
  format: 'Onlayn' | 'Əyani' | 'Hibrid';
  price: number | null; // null if not disclosed
  target_audience: string;
  short_description: string;
  long_description: string;
  learning_outcomes: string[];
  syllabus: CourseModule[];
  requirements: string;
  next_batch: string;
  is_active: boolean;
  faqs: CourseFaq[];
  instructor_name?: string;
}

export type ApplicationStatus =
  | 'Yeni'
  | 'Baxılır'
  | 'Əlaqə saxlanılıb'
  | 'Qəbul edilib'
  | 'Gözləmə siyahısı'
  | 'Rədd edilib';

export interface CourseApplication {
  id: string;
  course_id: string;
  course_title: string;
  full_name: string;
  email: string;
  phone: string;
  age_group: string;
  organization?: string;
  motivation: string;
  notes?: string;
  status: ApplicationStatus;
  admin_notes?: string;
  created_at: string;
}

export interface Instructor {
  id: string;
  full_name: string;
  title: string;
  bio: string;
  education: string;
  p4c_experience: string;
  teaching_courses: string[];
  photo_url: string;
  email?: string;
  sort_order: number;
}

export interface StatisticItem {
  id: string;
  key: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  order: number;
}

export interface Partner {
  id: string;
  name: string;
  category: 'Dövlət Qurumları' | 'Məktəb və Liseylər' | 'Təhsil Mərkəzləri' | 'Beynəlxalq Tərəfdaşlar';
  logo_url: string;
  website_url?: string;
  sort_order: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  status: 'Aktiv' | 'Tamamlanmış' | 'Planlaşdırılan';
  category: string;
  summary: string;
  target_groups: string;
  outcomes: string;
  partners: string[];
  image_url: string;
  duration: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  cover_image: string;
  published_at: string;
  author: string;
  is_published: boolean;
}

export interface GraduateStory {
  id: string;
  student_name: string;
  role: string;
  story: string;
  photo_url: string;
  course_attended: string;
  year: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtube_id: string;
  category: string;
  description: string;
  speaker: string;
}

export interface QuizOption {
  label: string;
  profile_type: 'socratic' | 'collaborative' | 'analytic' | 'creative';
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  description?: string;
  options: QuizOption[];
}

export interface QuizResultProfile {
  type: 'socratic' | 'collaborative' | 'analytic' | 'creative';
  title: string;
  subtitle: string;
  description: string;
  strengths: string[];
  recommended_course_slug: string;
  recommended_course_title: string;
}

export interface SiteSettings {
  org_name: string;
  tagline: string;
  hero_title: string;
  hero_subtitle: string;
  hero_badge: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  announcement_bar?: string;
}
