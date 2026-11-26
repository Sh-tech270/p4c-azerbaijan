import { createClient } from '@supabase/supabase-js';
import {
  initialCourses,
  initialInstructors,
  initialStatistics,
  initialPartners,
  initialProjects,
  initialNews,
  initialGraduateStories,
  initialVideos,
  initialQuizQuestions,
  initialSettings,
  initialApplications,
  initialResources,
} from './mock-data';
import {
  Course,
  Instructor,
  StatisticItem,
  Partner,
  Project,
  NewsItem,
  GraduateStory,
  VideoItem,
  SiteSettings,
  CourseApplication,
  ResourceItem,
} from './types';

// Supabase client initialization (if keys are provided)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('your-supabase-url')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// In-Memory / Global Fallback Cache for Server-Side Runtime (ensures edits persist in session)
interface GlobalStore {
  courses: Course[];
  instructors: Instructor[];
  statistics: StatisticItem[];
  partners: Partner[];
  projects: Project[];
  news: NewsItem[];
  graduateStories: GraduateStory[];
  videos: VideoItem[];
  settings: SiteSettings;
  applications: CourseApplication[];
  resources: ResourceItem[];
}

declare global {
  // eslint-disable-next-line no-var
  var __P4C_GLOBAL_STORE__: GlobalStore | undefined;
}

if (!globalThis.__P4C_GLOBAL_STORE__) {
  globalThis.__P4C_GLOBAL_STORE__ = {
    courses: [...initialCourses],
    instructors: [...initialInstructors],
    statistics: [...initialStatistics],
    partners: [...initialPartners],
    projects: [...initialProjects],
    news: [...initialNews],
    graduateStories: [...initialGraduateStories],
    videos: [...initialVideos],
    settings: { ...initialSettings },
    applications: [...initialApplications],
    resources: [...initialResources],
  };
}

export const getStore = (): GlobalStore => {
  return globalThis.__P4C_GLOBAL_STORE__!;
};

// --- DATA ACCESS LAYER ---

export const getCourses = async (): Promise<Course[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('courses').select('*').order('level', { ascending: true });
    if (!error && data && data.length > 0) return data as Course[];
  }
  return getStore().courses;
};

export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('courses').select('*').eq('slug', slug).single();
    if (!error && data) return data as Course;
  }
  return getStore().courses.find((c) => c.slug === slug) || null;
};

export const saveCourse = async (course: Course): Promise<Course> => {
  if (isSupabaseConfigured && supabase) {
    await supabase.from('courses').upsert(course);
  }
  const store = getStore();
  const index = store.courses.findIndex((c) => c.id === course.id);
  if (index >= 0) {
    store.courses[index] = course;
  } else {
    store.courses.push(course);
  }
  return course;
};

export const getInstructors = async (): Promise<Instructor[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('instructors').select('*').order('sort_order', { ascending: true });
    if (!error && data && data.length > 0) return data as Instructor[];
  }
  return getStore().instructors;
};

export const saveInstructor = async (instructor: Instructor): Promise<Instructor> => {
  if (isSupabaseConfigured && supabase) {
    await supabase.from('instructors').upsert(instructor);
  }
  const store = getStore();
  const index = store.instructors.findIndex((i) => i.id === instructor.id);
  if (index >= 0) {
    store.instructors[index] = instructor;
  } else {
    store.instructors.push(instructor);
  }
  return instructor;
};

export const getStatistics = async (): Promise<StatisticItem[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('statistics').select('*').order('order', { ascending: true });
    if (!error && data && data.length > 0) return data as StatisticItem[];
  }
  return getStore().statistics;
};

export const updateStatistic = async (stat: StatisticItem): Promise<StatisticItem> => {
  if (isSupabaseConfigured && supabase) {
    await supabase.from('statistics').upsert(stat);
  }
  const store = getStore();
  const index = store.statistics.findIndex((s) => s.id === stat.id);
  if (index >= 0) {
    store.statistics[index] = stat;
  }
  return stat;
};

export const getPartners = async (): Promise<Partner[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('partners').select('*').order('sort_order', { ascending: true });
    if (!error && data && data.length > 0) return data as Partner[];
  }
  return getStore().partners;
};

export const savePartner = async (partner: Partner): Promise<Partner> => {
  if (isSupabaseConfigured && supabase) {
    await supabase.from('partners').upsert(partner);
  }
  const store = getStore();
  const index = store.partners.findIndex((p) => p.id === partner.id);
  if (index >= 0) {
    store.partners[index] = partner;
  } else {
    store.partners.push(partner);
  }
  return partner;
};

export const getProjects = async (): Promise<Project[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('projects').select('*');
    if (!error && data && data.length > 0) return data as Project[];
  }
  return getStore().projects;
};

export const getNews = async (): Promise<NewsItem[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('news').select('*').eq('is_published', true).order('published_at', { ascending: false });
    if (!error && data && data.length > 0) return data as NewsItem[];
  }
  return getStore().news;
};

export const getVideos = async (): Promise<VideoItem[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('videos').select('*');
    if (!error && data && data.length > 0) return data as VideoItem[];
  }
  return getStore().videos;
};

export const getGraduateStories = async (): Promise<GraduateStory[]> => {
  return getStore().graduateStories;
};

export const getSettings = async (): Promise<SiteSettings> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('site_settings').select('*').single();
    if (!error && data) return data.settings as SiteSettings;
  }
  return getStore().settings;
};

export const updateSettings = async (settings: SiteSettings): Promise<SiteSettings> => {
  if (isSupabaseConfigured && supabase) {
    await supabase.from('site_settings').upsert({ id: 'main', settings });
  }
  getStore().settings = settings;
  return settings;
};

export const getApplications = async (): Promise<CourseApplication[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('applications').select('*').order('created_at', { ascending: false });
    if (!error && data && data.length > 0) return data as CourseApplication[];
  }
  return getStore().applications;
};

export const createApplication = async (
  appData: Omit<CourseApplication, 'id' | 'status' | 'created_at'>
): Promise<CourseApplication> => {
  const newApp: CourseApplication = {
    ...appData,
    id: 'app-' + Date.now().toString(),
    status: 'Yeni',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    await supabase.from('applications').insert(newApp);
  }

  getStore().applications.unshift(newApp);
  return newApp;
};

export const updateApplicationStatus = async (
  id: string,
  status: CourseApplication['status'],
  adminNotes?: string
): Promise<CourseApplication | null> => {
  const store = getStore();
  const app = store.applications.find((a) => a.id === id);
  if (!app) return null;

  app.status = status;
  if (adminNotes !== undefined) {
    app.admin_notes = adminNotes;
  }

  if (isSupabaseConfigured && supabase) {
    await supabase.from('applications').update({ status, admin_notes: app.admin_notes }).eq('id', id);
  }

  return app;
};

// --- RESOURCES & BOOKS DATA ACCESS ---

export const getResources = async (): Promise<ResourceItem[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('resources').select('*').order('id', { ascending: false });
    if (!error && data && data.length > 0) return data as ResourceItem[];
  }
  return getStore().resources;
};

export const getResourceById = async (id: string): Promise<ResourceItem | null> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('resources').select('*').eq('id', id).single();
    if (!error && data) return data as ResourceItem;
  }
  return getStore().resources.find((r) => r.id === id) || null;
};

export const saveResource = async (resource: ResourceItem): Promise<ResourceItem> => {
  if (isSupabaseConfigured && supabase) {
    await supabase.from('resources').upsert(resource);
  }
  const store = getStore();
  const index = store.resources.findIndex((r) => r.id === resource.id);
  if (index >= 0) {
    store.resources[index] = resource;
  } else {
    store.resources.unshift(resource);
  }
  return resource;
};

export const deleteResource = async (id: string): Promise<boolean> => {
  if (isSupabaseConfigured && supabase) {
    await supabase.from('resources').delete().eq('id', id);
  }
  const store = getStore();
  const index = store.resources.findIndex((r) => r.id === id);
  if (index >= 0) {
    store.resources.splice(index, 1);
    return true;
  }
  return false;
};
