import {
  Course,
  Instructor,
  StatisticItem,
  Partner,
  Project,
  NewsItem,
  GraduateStory,
  VideoItem,
  QuizQuestion,
  QuizResultProfile,
  SiteSettings,
  CourseApplication,
} from './types';

export const initialSettings: SiteSettings = {
  org_name: 'P4C Azərbaycan',
  tagline: 'Uşaqlarla, gənclərlə və böyüklərlə fəlsəfə',
  hero_title: 'Düşün. Sual ver. Birlikdə kəşf et.',
  hero_subtitle:
    'P4C Azərbaycan — uşaqların, gənclərin və böyüklərin tənqidi, yaradıcı, əməkdaşlıq və qayğıkeş (4C) düşünmə bacarıqlarını inkişaf etdirən rəsmi fəlsəfi təhsil platformasıdır.',
  hero_badge: 'Beynəlxalq P4C Metodologiyası və Standartları',
  email: 'info@p4cazerbaijan.az',
  phone: '+994 (12) 400 44 40',
  whatsapp: '+994 (50) 440 44 40',
  address: 'Bakı şəhəri, Nizami küçəsi 142',
  instagram: 'https://instagram.com/p4cazerbaijan',
  facebook: 'https://facebook.com/p4cazerbaijan',
  linkedin: 'https://linkedin.com/company/p4cazerbaijan',
  youtube: 'https://youtube.com/@p4cazerbaijan',
  announcement_bar: 'Yaz semestri üzrə P4C Təlimçi Sertifikasiya Proqramına qeydiyyat davam edir!',
};

export const initialCourses: Course[] = [
  // --- TƏLİMÇİ OL PROQRAMLARI (P4C Türkiye & SAPERE standartı) ---
  {
    id: 'course-t1',
    slug: 'p4c-giris-fasilitatorluq-seviyye-1',
    title: 'P4C Giriş və Tətbiqçi Fasilatator Təlimi (1-ci Səviyyə)',
    track: 'trainer',
    level: 1,
    duration_hours: 15,
    format: 'Onlayn',
    price: null, // Qiymət gizlədilir və ya admin tərəfindən daxil edilə bilər
    target_audience: 'Məktəb müəllimləri, məktəbəqədər təhsil mütəxəssisləri, psixoloqlar və pedaqoqlar',
    short_description:
      'Community of Inquiry yanaşması ilə sinifdə və tədris qruplarında fəlsəfi dialoq mühiti yaratmaq üçün baza sertifikat proqramı.',
    long_description:
      'Bu təlim P4C metodologiyasının əsas nəzəri və praktiki fundamentini əhatə edir. Matthew Lipman və Ann Margaret Sharp tərəfindən irəli sürülən "Community of Inquiry" (Araşdırma İcması) modelini dərindən öyrənəcək, şagirdlərin 4C bacarıqlarını (Tənqidi, Yaradıcı, Əməkdaşlıq, Qayğıkeş düşünmə) inkişaf etdirmək üçün stimullarla işləməyi mənimsəyəcəksiniz.',
    learning_outcomes: [
      'P4C-nin fəlsəfi və pedaqoji prinsiplərini anlamaq',
      'Fəlsəfi sual tiplərini adi məlumat suallarından fərqləndirmək',
      'Sinifdə bərabərhüquqlu və təhlükəsiz dialoq icması qurmaq',
      'Hekayə, şəkil və video stimullarından istifadə edərək sessiya aparmaq',
    ],
    syllabus: [
      {
        module: 'Modul 1: P4C-nin Fəlsəfi Əsasları',
        topics: ['Matthew Lipman və Sokratik dialoq', '4C düşüncə bacarıqları', 'Pedaqoji transformasiya'],
      },
      {
        module: 'Modul 2: Araşdırma İcması (Community of Inquiry)',
        topics: ['Dialoq qaydaları və təhlükəsiz mühit', 'Fasilatatorun rolu və neytrallığı', 'Sualvermə sənəti'],
      },
      {
        module: 'Modul 3: Praktiki Sessiyaların Təşkili',
        topics: ['Stimul seçimi və təqdimatı', 'Fikirlərin əlaqələndirilməsi və lövhədən istifadə', 'Yekun refleksiya'],
      },
    ],
    requirements: 'Ali pedaqoji, humanitar və ya psixoloji təhsil (və ya tələbəlik)',
    next_batch: '15 Dekabr 2026',
    is_active: true,
    faqs: [
      {
        question: 'Təlim sonunda hansı sənəd verilir?',
        answer: 'Təlimi uğurla başa vuran iştirakçılara P4C Azərbaycan tərəfindən rəsmi 1-ci Səviyyə Tətbiqçi Fasilatator Sertifikatı təqdim olunur.',
      },
      {
        question: 'Dərslər canlı keçirilirmi?',
        answer: 'Bəli, dərslər interaktiv Zoom sessiyaları şəklində, canlı dialoq və simulyasiyalarla keçirilir.',
      },
    ],
    instructor_name: 'Elmir Məmmədov',
  },
  {
    id: 'course-t2',
    slug: 'ireli-seviyye-p4c-fasilitatorluq-seviyye-2',
    title: 'İrəli Səviyyə P4C Fasilatatorluq və Dialoq İdarəçiliyi (2-ci Səviyyə)',
    track: 'trainer',
    level: 2,
    duration_hours: 30,
    format: 'Hibrid',
    price: null,
    target_audience: '1-ci Səviyyə P4C sertifikatına malik olan və öz təcrübəsini dərinləşdirmək istəyən fasilatatorlar',
    short_description:
      'Mürəkkəb fəlsəfi stimullar, etik dilemmalar, arqumentasiya təhlili və çətin qrup dinamikalarının peşəkar idarə edilməsi.',
    long_description:
      '2-ci Səviyyə təlimində fasilatatorlar mücərrəd fəlsəfi anlayışların (ədalət, həqiqət, azadlıq, gözəllik, bilik) araşdırılmasında dərinləşirlər. Təlim iştirakçıların məntiqi ziddiyyətləri aşkar etmə, əsaslandırma gücünü ölçmə və fəlsəfi müzakirələri daha yüksək idraki səviyyəyə qaldırma bacarıqlarını inkişaf etdirir.',
    learning_outcomes: [
      'Etik dilemmalar və konseptual xəritələmə texnikalarını mənimsəmək',
      'Məntiqi xətaları (fallacies) müzakirə zamanı zərif şəkildə istiqamətləndirmək',
      'Qrupda yaranan passivlik və ya qarşıdurmaları konstruktiv dialoqa çevirmək',
      'Fərdi P4C tədris modulları və stimul bankı hazırlamaq',
    ],
    syllabus: [
      {
        module: 'Modul 1: Konseptual Fəlsəfi Təhlil',
        topics: ['Dilemma növləri və fəlsəfi paradokslar', 'Məfhumların sərhədlərini müəyyənləşdirmək'],
      },
      {
        module: 'Modul 2: İrəli Fasilatasiya Bacarıqları',
        topics: ['Dərinləşdirici suallar (probes)', 'Səssizliyin gücü və dinləmə səviyyələri', 'Qrup psixologiyası'],
      },
      {
        module: 'Modul 3: Superviziya və Canlı Tətbiq',
        topics: ['Real qruplarla pilot sessiyalar', 'Video təhlil və geribildirim', 'Fərdi fasilatator üslubunun inkişafı'],
      },
    ],
    requirements: 'P4C 1-ci Səviyyə Tətbiqçi sertifikatı və minimum 5 təcrübi sessiya qeydləri',
    next_batch: '10 Yanvar 2027',
    is_active: true,
    faqs: [
      {
        question: 'Superviziya nə deməkdir?',
        answer: 'Superviziya mərhələsində apardığınız real sessiyalar təcrübəli mentor tərəfindən izlənir və fərdi inkişafınız üçün ətraflı geribildirim təqdim edilir.',
      },
    ],
    instructor_name: 'Nərgiz Əliyeva',
  },
  {
    id: 'course-t3',
    slug: 'p4c-mutexessis-telimcisi-superviziya-seviyye-3',
    title: 'P4C Mütəxəssis Təlimçisi və Beynəlxalq Sertifikasiya (3-cü Səviyyə)',
    track: 'trainer',
    level: 3,
    duration_hours: 30,
    format: 'Hibrid',
    price: null,
    target_audience: 'Məktəblərdə və təşkilatlarda digər müəllimlərə P4C təlimi keçmək istəyən lider təhsil mütəxəssisləri',
    short_description:
      'Müstəqil təlimçi kimi fəaliyyət göstərmək, kurikulum inteqrasiyası aparmaq və mərhələli beynəlxalq akkreditasiya əldə etmək üçün ən yüksək mərhələ.',
    long_description:
      'Bu proqram P4C-ni təkcə sinif səviyyəsində deyil, bütöv məktəb mədəniyyətində tətbiq edəcək ekspertlər hazırlayır. İştirakçılar təlimçi-təlimi (Train the Trainer) modullarını tamamlayır, P4C kurikulumu dizayn edir və genişmiqyaslı fəlsəfi layihələri idarə etmək hüququ qazanırlar.',
    learning_outcomes: [
      'Digər müəllim və fasilatatorlara supervizorluq etmək',
      'Məktəb fənlərinə (ədəbiyyat, tarix, təbiət elmləri) P4C modullarını inteqrasiya etmək',
      'Beynəlxalq P4C icması ilə birgə layihələrdə təmsil olunmaq',
      'P4C Təlimçisi portfelini hazırlayıb müdafiə etmək',
    ],
    syllabus: [
      {
        module: 'Modul 1: Təlimçinin Təlimi Metodologiyası',
        topics: ['Yetkinlərin öyrənmə psixologiyası', 'Fasilatasiya təliminin strukturu'],
      },
      {
        module: 'Modul 2: Kurikulum və İnstitusional İnteqrasiya',
        topics: ['Məktəb səviyyəsində P4C mühiti qurmaq', 'Məktəb rəhbərliyi və valideynlərlə əməkdaşlıq'],
      },
      {
        module: 'Modul 3: Yekun Müdafiə və Beynəlxalq Portfel',
        topics: ['Tədqiqat layihəsinin təqdimatı', 'Supervizor qiymətləndirməsi və sertifikatlaşma'],
      },
    ],
    requirements: 'P4C 1-ci və 2-ci səviyyə sertifikatları və təsdiq olunmuş fasilatasiya təcrübəsi',
    next_batch: '01 Fevral 2027',
    is_active: true,
    faqs: [
      {
        question: 'Bu proqramdan sonra özüm müəllimlərə təlim keçə bilərəmmi?',
        answer: 'Bəli, 3-cü Səviyyəni bitirən mütəxəssislər P4C Azərbaycanın rəsmi təlimçi reyestrinə daxil olur və akkreditasiya olunmuş təlimlər təşkil edə bilirlər.',
      },
    ],
    instructor_name: 'Elmir Məmmədov',
  },

  // --- İŞTİRAKÇI OL ATELYELƏRİ (Workshops & Dialogue Clubs) ---
  {
    id: 'course-p1',
    slug: 'usaqlar-ucun-felsefe-atelyesi-10-saat',
    title: 'Uşaqlar üçün Fəlsəfə və Nağıllarla Düşüncə Atelyesi',
    track: 'participant',
    duration_hours: 10,
    format: 'Əyani',
    price: null,
    target_audience: '6–10 yaşlı məktəblilər',
    short_description:
      'Uşaqların maraq dolu suallarını fəlsəfi təfəkkürə çevirən, dinləmə və özünü ifadə bacarıqlarını formalaşdıran canlı atelye.',
    long_description:
      'Uşaqlar təbiətən filosofdurlar. Bu atelyedə uşaqlar nağıllar, illüstrasiyalar və maraqlı oyunlar vasitəsilə "Dostluq nədir?", "Doğru danışmaq niyə vacibdir?", "Böyümək nə deməkdir?", "Ədalətli olmaq nədir?" kimi suallar üzərində birlikdə düşünür və bir-birlərini dinləməyi öyrənirlər.',
    learning_outcomes: [
      'Öz fikirlərini cəsarətlə və arqumentlə ifadə etmək',
      'Yoldaşlarının fikirlərini diqqətlə və hörmətlə dinləmək',
      'Bir-birinin ideyalarından yeni düşüncələr qurmaq',
      'Məntiqi suallar vermə vərdişi qazanmaq',
    ],
    syllabus: [
      { module: 'Həftə 1: Dostluq və Paylaşmaq', topics: ['Kimə dost deyirik?', 'Hekayə üzərindən dialoq'] },
      { module: 'Həftə 2: Həqiqət və Yalan', topics: ['Hər doğru danışılmalıdırmı?', 'Rollarla oyun'] },
      { module: 'Həftə 3: Ədalət və Qaydalar', topics: ['Qaydalar olmasa nə baş verər?', 'Ədalətli bölüşdürmə'] },
      { module: 'Həftə 4: Təbiət və Canlılar', topics: ['Təbiətə necə qayğı göstərməliyik?', 'Fəlsəfi rəsm'] },
    ],
    requirements: 'Xüsusi bilik tələb olunmur, yalnız maraq və sual vermək istəyi kifayətdir.',
    next_batch: '5 Dekabr 2026',
    is_active: true,
    faqs: [
      {
        question: 'Valideynlər dərsdə iştirak edə bilərmi?',
        answer: 'Uşaqların sərbəst və çəkinmədən danışması üçün sessiyalar yalnız uşaqlar və fasilatator ilə keçirilir. Sonda valideynlərə ümumi refleksiya təqdim olunur.',
      },
    ],
    instructor_name: 'Leyla Qasımova',
  },
  {
    id: 'course-p2',
    slug: 'yeniyetmeler-ucun-sokratik-dialoq-15-saat',
    title: 'Yeniyetmələr üçün Sokratik Dialoq və Tənqidi Təfəkkür',
    track: 'participant',
    duration_hours: 15,
    format: 'Hibrid',
    price: null,
    target_audience: '11–15 yaşlı yeniyetmələr',
    short_description:
      'Süni intellekt və sosial media dövründə manipulyasiyaya düşməmək, müstəqil düşünmək və güclü arqumentlər qurmaq üçün.',
    long_description:
      'Yeniyetməlik dövrü şəxsi kimliyin və dəyərlərin formalaşdığı ən mühüm mərhələdir. Bu 15 saatlıq atelyedə yeniyetmələr fəlsəfi dilemmalar, elmi-fantastik ssenarilər və real həyat situasiyaları vasitəsilə tənqidi düşüncəni tətbiq edir, emosional mühakimə ilə məntiqi təhlil arasındakı fərqi kəşf edirlər.',
    learning_outcomes: [
      'Sosial şəbəkələrdəki saxta məlumatları və manipulyasiyaları təhlil etmək',
      'Arqumentlə əsaslandırma bacarığı formalaşdırmaq',
      'Fərqli fikirlərə tolerant və analitik yanaşmaq',
      'Müstəqil qərarvermə cəsarətini artırmaq',
    ],
    syllabus: [
      { module: 'Blok 1: Şübhə və Tədqiqat', topics: ['Gördüyümüz hər şey doğrudurmu?', 'Matrix və reallıq sualları'] },
      { module: 'Blok 2: Əxlaq və Süni İntellekt', topics: ['Robotlar düşünə bilərmi?', 'Etik seçimlər'] },
      { module: 'Blok 3: Azadlıq və Məsuliyyət', topics: ['Nə qədər azadıq?', 'Sərhədlər və hüquqlar'] },
    ],
    requirements: '11-15 yaş aralığı',
    next_batch: '12 Dekabr 2026',
    is_active: true,
    faqs: [
      {
        question: 'Dərslər hansı günlər keçirilir?',
        answer: 'Həftəsonları (şənbə və ya bazar) gənclərin məktəb cədvəlinə uyğun təşkil edilir.',
      },
    ],
    instructor_name: 'Tural Həsənov',
  },
  {
    id: 'course-p3',
    slug: 'gencler-ucun-mentiq-ve-arqumentasiya-20-saat',
    title: 'Gənclər üçün Məntiq, Fəlsəfi Arqumentasiya və Debat Klubu',
    track: 'participant',
    duration_hours: 20,
    format: 'Onlayn',
    price: null,
    target_audience: '16–22 yaşlı gənclər və tələbələr',
    short_description:
      'İntellektual müzakirələr, məntiqi xətaların təhlili və fəlsəfi dialoq mədəniyyətinin dərindən mənimsənilməsi.',
    long_description:
      'Gənclər üçün xüsusi hazırlanmış bu 20 saatlıq proqram intellektual müzakirə mədəniyyətini yeni səviyyəyə qaldırır. Qədim Sokratik üsuldan müasir analitik fəlsəfəyə qədər düşüncə alətlərini öyrənərək həm akademik həyatda, həm də karyerada əvəzolunmaz arqumentasiya səriştələri qazanacaqsınız.',
    learning_outcomes: [
      'Klassik və qeyri-formal məntiq qaydalarını tətbiq etmək',
      'Debatlarda güclü və təkzibolunmaz arqumentlər qurmaq',
      'Mürəkkəb sosial və etik problemlərə çoxşaxəli baxış bucağı inkişaf etdirmək',
    ],
    syllabus: [
      { module: 'Bölmə 1: Arqumentin Anatomiyası', topics: ['Premis və nəticə', 'Deduktiv və induktiv mühakimə'] },
      { module: 'Bölmə 2: Məntiqi Xətalar (Fallacies)', topics: ['Ad hominem, saman adam və sürüşkən zəmin xətaları'] },
      { module: 'Bölmə 3: Fəlsəfi Debat Simulyasiyaları', topics: ['Bioetika, ətraf mühit və gələcəyin fəlsəfəsi'] },
    ],
    requirements: 'Fəlsəfə və tənqidi təfəkkürə maraq göstərən bütün gənclər',
    next_batch: '20 Dekabr 2026',
    is_active: true,
    faqs: [
      {
        question: 'İştirak üçün fəlsəfə bazası lazımdırmı?',
        answer: 'Xeyr, bütün anlayışlar interaktiv və praktiki şəkildə sıfırdan izah olunur.',
      },
    ],
    instructor_name: 'Tural Həsənov',
  },
  {
    id: 'course-p4',
    slug: 'valideynler-ucun-felsefi-dialoq-atelyesi-30-saat',
    title: 'Valideynlər üçün Fəlsəfi Dialoq və Şüurlu Tərbiyə Atelyesi',
    track: 'participant',
    duration_hours: 30,
    format: 'Hibrid',
    price: null,
    target_audience: 'Övladları ilə dərin və mənalı bağ qurmaq istəyən valideynlər',
    short_description:
      'Uşaqların suallarına nəsihət deyil, düşüncə tərəfdaşı kimi cavab vermək, evdə demokratik və fəlsəfi mühit yaratmaq.',
    long_description:
      'Çox vaxt valideynlər uşaqların çətin sualları qarşısında ("Niyə öləcəyik?", "Pul hər şeydən vacibdirmi?", "Tanrı haradadır?") dərhal hazır nəsihət verməyə çalışırlar. Bu 30 saatlıq atelye valideynlərə sual verməyi öyrənməyi, övladını müstəqil düşünən şəxsiyyət kimi qəbul etməyi və evdə zəngin fəlsəfi ünsiyyət mühiti qurmağı öyrədir.',
    learning_outcomes: [
      'Uşaqlarla fəlsəfi söhbətlər başlatmaq və davam etdirmək',
      'Qayğıkeş düşünmə (caring thinking) yanaşmasını ailədə tətbiq etmək',
      'Uşağın özünəinamını və düşüncə sərbəstliyini gücləndirmək',
    ],
    syllabus: [
      { module: '1-ci Hissə: Uşağın İdrak Dünyası', topics: ['Fəlsəfi maraq nə vaxt və necə yaranır?', 'Uşaq dili və metaforalar'] },
      { module: '2-ci Hissə: Ailə Fəlsəfə Masası', topics: ['Şam yeməyində dialoq oyunları', 'Hekayə kitablarını fəlsəfi oxumaq'] },
      { module: '3-cü Hissə: Böhran Anlarında Sakit Dialoq', topics: ['Emosiyaları anlamaq', 'Qadağa əvəzinə müzakirə'] },
    ],
    requirements: 'Hər yaşda övladı olan valideynlər',
    next_batch: '18 Dekabr 2026',
    is_active: true,
    faqs: [
      {
        question: 'Dərslər hansı formatdadır?',
        answer: 'Həftədə 2 dəfə axşam saatlarında onlayn nəzəriyyə və ayda bir dəfə əyani təcrübə görüşü keçirilir.',
      },
    ],
    instructor_name: 'Leyla Qasımova',
  },
  {
    id: 'course-p5',
    slug: 'boyukler-ve-korporativ-komandalar-ucun-felsefe-40-saat',
    title: 'Böyüklər və Liderlər üçün Dərin Fəlsəfi Düşüncə və Qərarvermə',
    track: 'participant',
    duration_hours: 40,
    format: 'Əyani',
    price: null,
    target_audience: 'Şirkət rəhbərləri, menecerlər, mütəxəssislər və daxili axtarışda olan yetkinlər',
    short_description:
      'Qeyri-müəyyənlik dövründə strateji qərarvermə, korporativ etika, dərin dinləmə və fəlsəfi rəhbərlik bacarıqları.',
    long_description:
      'Müasir dünyada liderlik təkcə menecment deyil, həm də fəlsəfi aydınlıq tələb edir. Bu 40 saatlıq dərin proqramda klassik stoitsizm, ekzistensializm və etik dilemmalar işığında qeyri-müəyyənliklə başa çıxmaq, komandada həqiqi dialoq mühiti yaratmaq və strateji qərarları fəlsəfi prinsiplər əsasında vermək öyrədilir.',
    learning_outcomes: [
      'Böyük qeyri-müəyyənlik şəraitində rasional və etik qərar vermək',
      'Komandada iyerarxik təzyiq olmadan açıq intellektual dialoq qurmaq',
      'Stoik dözümlülük və emosional möhkəmlik qazanmaq',
    ],
    syllabus: [
      { module: 'Modul 1: Qərarvermənin Fəlsəfəsi', topics: ['Etik çərçivələr və korporativ dilemma', 'Strateji aydınlıq'] },
      { module: 'Modul 2: Fəlsəfi Liderlik və Dialoq', topics: ['Sokratik menecment', 'Birlikdə düşünməyin gücü'] },
      { module: 'Modul 3: Dəyərlər və Məna Axtarışı', topics: ['İş həyatında ekzistensial suallar', 'Davamlı motivasiya'] },
    ],
    requirements: 'Hər kəs müraciət edə bilər.',
    next_batch: '15 Yanvar 2027',
    is_active: true,
    faqs: [
      {
        question: 'Şirkət komandaları üçün korporativ qrup təşkil edilə bilərmi?',
        answer: 'Bəli, təşkilatların sifarişi ilə fərdi korporativ proqram dizayn oluna bilər.',
      },
    ],
    instructor_name: 'Elmir Məmmədov',
  },
];

export const initialInstructors: Instructor[] = [
  {
    id: 'inst-1',
    full_name: 'Elmir Məmmədov',
    title: 'P4C Baş Fasilatatoru və Fəlsəfə Tədqiqatçısı',
    bio: 'Fəlsəfə üzrə fəlsəfə doktoru, beynəlxalq səviyyəli P4C fasilatatoru və təlimçisidir. 12 ildən artıq təhsil və fəlsəfi dialoq təcrübəsinə malikdir. Azərbaycanda P4C metodologiyasının milli təhsil sisteminə inteqrasiyası üzrə çoxsaylı layihələrin elmi rəhbəridir.',
    education: 'Bakı Dövlət Universiteti (Fəlsəfə fakültəsi), Hacettepe Universiteti P4C Təlimçi Təhsili',
    p4c_experience: '8 il beynəlxalq sertifikatlı fasilatatorluq, 1500+ saat aparılmış sessiya',
    teaching_courses: ['P4C Giriş və Tətbiqçi Fasilatator Təlimi', 'P4C Mütəxəssis Təlimçisi və Superviziya'],
    photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    email: 'elmir.mammadov@p4cazerbaijan.az',
    sort_order: 1,
  },
  {
    id: 'inst-2',
    full_name: 'Nərgiz Əliyeva',
    title: 'Təhsil Psixoloqu və P4C Mütəxəssis Təlimçisi',
    bio: 'Uşaq və yeniyetmə idrak inkişafı üzrə ixtisaslaşmış təhsil psixoloqudur. Community of Inquiry mühitində uşaqların emosional zəkası və empatik dinləmə vərdişlərinin formalaşması istiqamətində praktik və akademik tədqiqatların müəllifidir.',
    education: 'Azərbaycan Dövlət Pedaqoji Universiteti (Təhsildə sosial-psixoloji xidmət)',
    p4c_experience: '6 il P4C fasilatatorluğu, məktəblərdə pilot layihələrin rəhbəri',
    teaching_courses: ['İrəli Səviyyə P4C Fasilatatorluq', 'Valideynlər üçün Fəlsəfi Dialoq'],
    photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    email: 'nargiz.aliyeva@p4cazerbaijan.az',
    sort_order: 2,
  },
  {
    id: 'inst-3',
    full_name: 'Tural Həsənov',
    title: 'Məntiq və Tənqidi Təfəkkür Təlimçisi',
    bio: 'Analitik fəlsəfə və arqumentasiya nəzəriyyəsi üzrə mütəxəssisdir. Gənclər arasında debat mədəniyyətinin inkişafı, məntiqi xətaların təhlili və süni intellekt etikasının tədrisi sahəsində geniş təcrübəyə malikdir.',
    education: 'Azərbaycan Dillər Universiteti, Qlazqo Universiteti (İctimai siyasət və etika üzrə magistr)',
    p4c_experience: '5 il gənclər və yeniyetmələrlə P4C atelye rəhbərliyi',
    teaching_courses: ['Yeniyetmələr üçün Sokratik Dialoq', 'Gənclər üçün Məntiq və Arqumentasiya'],
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    email: 'tural.hasanov@p4cazerbaijan.az',
    sort_order: 3,
  },
  {
    id: 'inst-4',
    full_name: 'Leyla Qasımova',
    title: 'Uşaq İnkişafı üzrə P4C Fasilatatoru',
    bio: 'İbtidai sinif şagirdləri ilə nağıl və hekayə əsaslı fəlsəfi dialoqların qurulmasında ixtisaslaşıb. Uşaq ədəbiyyatının fəlsəfi təhlili və kiçik yaş qrupları üçün stimul vəsaitlərinin hazırlanması üzrə təlimçidir.',
    education: 'Bakı Qızlar Universiteti (İbtidai təhsil pedaqogikası)',
    p4c_experience: '4 il uşaq atelyelərinin fasilatasiyası',
    teaching_courses: ['Uşaqlar üçün Fəlsəfə və Nağıllarla Düşüncə Atelyesi'],
    photo_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    email: 'leyla.gasimova@p4cazerbaijan.az',
    sort_order: 4,
  },
];

export const initialStatistics: StatisticItem[] = [
  {
    id: 'stat-1',
    key: 'teachers_trained',
    label: 'Təlim Keçmiş Müəllim və Təlimçi',
    value: 380,
    suffix: '+',
    description: 'Azərbaycan üzrə sertifikatlaşdırılmış və Community of Inquiry quran pedaqoqlar',
    order: 1,
  },
  {
    id: 'stat-2',
    key: 'total_participants',
    label: 'Məzun və İştirakçı Sayı',
    value: 1450,
    suffix: '+',
    description: 'Atelye, təlim və fəlsəfi klublarda iştirak etmiş uşaq, gənc və böyüklər',
    order: 2,
  },
  {
    id: 'stat-3',
    key: 'partner_schools',
    label: 'Əməkdaşlıq Edilən Məktəb və Lisey',
    value: 42,
    suffix: '',
    description: 'Dövlət və özəl təhsil müəssisələrində aparılan mütəmadi fəaliyyətlər',
    order: 3,
  },
  {
    id: 'stat-4',
    key: 'projects_completed',
    label: 'Həyata Keçirilmiş Layihə',
    value: 18,
    suffix: '',
    description: 'Təhsil Nazirliyi, agentliklər və beynəlxalq qurumlarla birgə təşəbbüslər',
    order: 4,
  },
];

export const initialPartners: Partner[] = [
  {
    id: 'p-1',
    name: 'Azərbaycan Respublikası Elm və Təhsil Nazirliyi',
    category: 'Dövlət Qurumları',
    logo_url: '/images/partners/ministry.svg',
    website_url: 'https://edu.gov.az',
    sort_order: 1,
  },
  {
    id: 'p-2',
    name: 'Azərbaycan Respublikasının Təhsil İnstitutu (ARTİ)',
    category: 'Dövlət Qurumları',
    logo_url: '/images/partners/arti.svg',
    website_url: 'https://arti.edu.az',
    sort_order: 2,
  },
  {
    id: 'p-3',
    name: 'Bakı Avropa Liseyi',
    category: 'Məktəb və Liseylər',
    logo_url: '/images/partners/avropa-liseyi.svg',
    website_url: 'https://bakueuropeanlyceum.edu.az',
    sort_order: 3,
  },
  {
    id: 'p-4',
    name: 'Fizika, Riyaziyyat və İnformatika Təmayüllü Lisey (FRİTL)',
    category: 'Məktəb və Liseylər',
    logo_url: '/images/partners/fritl.svg',
    website_url: 'https://fritl.edu.az',
    sort_order: 4,
  },
  {
    id: 'p-5',
    name: 'Bakı Modern Təhsil Kompleksi',
    category: 'Məktəb və Liseylər',
    logo_url: '/images/partners/modern.svg',
    website_url: 'https://bmtk.edu.az',
    sort_order: 5,
  },
  {
    id: 'p-6',
    name: 'Gənclər İnkişaf və Karyera Mərkəzi',
    category: 'Təhsil Mərkəzləri',
    logo_url: '/images/partners/gikm.svg',
    website_url: 'https://gikm.az',
    sort_order: 6,
  },
  {
    id: 'p-7',
    name: 'P4C Beynəlxalq Fəlsəfə Şəbəkəsi (ICPIC & SAPERE)',
    category: 'Beynəlxalq Tərəfdaşlar',
    logo_url: '/images/partners/icpic.svg',
    website_url: 'https://www.icpic.org',
    sort_order: 7,
  },
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Məktəblərdə Fəlsəfi Dialoq Məkanları',
    slug: 'mekteblerde-felsefi-dialoq-mekanlari',
    status: 'Aktiv',
    category: 'Məktəb Təhsili',
    summary:
      'Bakı və region məktəblərində şagirdlərin həftəlik fəlsəfi araşdırma apardığı "Düşüncə Klubları"nın qurulması və metodiki dəstəyin verilməsi.',
    target_groups: '5–9-cu sinif şagirdləri, sinif rəhbərləri və fənn müəllimləri',
    outcomes: '12 məktəbdə daimi fəlsəfə guşəsi və 600+ şagirdin iştirakı təmin edilib.',
    partners: ['Bakı Avropa Liseyi', 'Təhsil İnstitutu'],
    image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    duration: '2025 – Davam edir',
  },
  {
    id: 'proj-2',
    title: 'Gənc Tənqidi Təfəkkür Elçiləri',
    slug: 'genc-tenqidi-tefekkur-elcileri',
    status: 'Aktiv',
    category: 'Gənclər Siyasəti',
    summary:
      'Universitet tələbələrinə P4C metodologiyası öyrədilərək onların icmalarda və gənclər evlərində fəlsəfi debatlar təşkil etməsinə dəstək verilir.',
    target_groups: '17–24 yaşlı gənclər və tələbə təşkilatları',
    outcomes: '40 gənc təlimçi yetişdirilib, 15 icmada silsilə debat və müzakirələr aparılıb.',
    partners: ['Gənclər İnkişaf və Karyera Mərkəzi'],
    image_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    duration: '2026 – Davam edir',
  },
  {
    id: 'proj-3',
    title: 'Region Müəllimləri üçün P4C İnkişaf Proqramı',
    slug: 'region-muellimleri-p4c-inkisaf-proqrami',
    status: 'Tamamlanmış',
    category: 'Müəllim İnkişafı',
    summary:
      'Gəncə, Şəki və Quba rayonlarının məktəb müəllimləri üçün 15 saatlıq intensiv P4C fasilatatorluq təlimləri.',
    target_groups: 'Region məktəblərinin 120 nəfər müəllim heyəti',
    outcomes: '120 müəllim sertifikatlaşdırılıb, 100% məmnunluq dərəcəsi əldə olunub.',
    partners: ['Elm və Təhsil Nazirliyi'],
    image_url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    duration: '2025',
  },
];

export const initialNews: NewsItem[] = [
  {
    id: 'news-1',
    title: 'P4C Metodologiyası Məktəblilərin Tənqidi Təfəkkürünü Necə İnkişaf Etdirir?',
    slug: 'p4c-metodologiyasi-tenqidi-tefekkur',
    excerpt:
      'Araşdırmalar göstərir ki, müntəzəm P4C sessiyalarında iştirak edən uşaqlar oxuyub-anlama və məntiqi arqumentasiya testlərində daha yüksək nəticə göstərirlər.',
    content: `
      Uşaqlar üçün Fəlsəfə (P4C) sadəcə qədim filosofların fikirlərini əzbərləmək deyil. Bu, uşağın öz düşüncəsini formalaşdırmaq prosesidir.
      
      Matthew Lipman tərəfindən irəli sürülən Araşdırma İcması (Community of Inquiry) modeli sinfi bərabərhüquqlu müzakirə məkanına çevirir. Burada müəllim hakim deyil, düşüncə bələdçisidir.
      
      Tədqiqatlar sübut edir ki, həftədə 1 saat P4C dərsi keçən məktəblilərdə həm riyazi, həm də dil bacarıqları nəzərəçarpacaq dərəcədə irəliləyir. Ən əsası isə uşaqlar fərqli fikirlərə hörmətlə yanaşmağı və dinləməyi öyrənirlər.
    `,
    category: 'Məqalə və Təhlil',
    cover_image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    published_at: '2026-11-15',
    author: 'P4C Azərbaycan Elmi Heyəti',
    is_published: true,
  },
  {
    id: 'news-2',
    title: 'Yeni Mövsüm P4C Təlimçi Sertifikasiya Proqramına Qəbul Başladı',
    slug: 'yeni-movsum-telimci-sertifikasiya-qebul',
    excerpt:
      'Beynəlxalq standartlara uyğun 1-ci, 2-ci və 3-cü səviyyə fasilatator təlimlərimiz üçün qeydiyyat açıldı. Yerlər məhduddur.',
    content: `
      P4C Azərbaycan pedaqoqlar, psixoloqlar və təhsil işçiləri üçün yeni akademik mövsümün təlim qrafikini elan edir.
      
      15, 30 və 30 saatlıq mərhələli proqram iştirakçılara beynəlxalq səviyyədə tanınan metodiki biliklər və fərdi superviziya dəstəyi təmin edir.
      
      Təlimləri uğurla bitirən məzunlar rəsmi fasilatator sertifikatı ilə təmin ediləcək və P4C Azərbaycanın təlimçilər şəbəkəsinə daxil olacaqlar.
    `,
    category: 'Yeniliklər',
    cover_image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    published_at: '2026-11-10',
    author: 'Təlim Departamenti',
    is_published: true,
  },
  {
    id: 'news-3',
    title: 'Community of Inquiry (Araşdırma İcması) Yanaşması Nədir və Necə Qurulur?',
    slug: 'community-of-inquiry-arasdirma-icmasi-nedir',
    excerpt:
      'Fəlsəfi araşdırma icması təkcə bir tədris texnikası deyil, demokratik və dialoji münasibətlərin bünövrəsidir.',
    content: `
      Araşdırma İcması qrup şəklində fəlsəfi sualların dərindən müzakirə olunduğu təhlükəsiz intellektual məkandır.
      
      Bu mühitdə 4 əsas qayda hökm sürür:
      1. Bir-birini kəsmədən axıra qədər dinləmək.
      2. Təkcə "mən belə düşünürəm" deməmək, fikri arqumentlə əsaslandırmaq.
      3. İnsana deyil, fikrə tənqidi yanaşmaq.
      4. Birlikdə həqiqəti axtarmaq üçün əməkdaşlıq etmək.
    `,
    category: 'Metodologiya',
    cover_image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    published_at: '2026-11-01',
    author: 'Nərgiz Əliyeva',
    is_published: true,
  },
];

export const initialGraduateStories: GraduateStory[] = [
  {
    id: 'grad-1',
    student_name: 'Aysel Quliyeva',
    role: 'İbtidai sinif müəllimi (Bakı Avropa Liseyi)',
    story:
      'P4C 1-ci və 2-ci səviyyə təlimlərini bitirdikdən sonra sinfimdə ab-hava tamamilə dəyişdi. Əvvəllər dərslərdə çəkinən uşaqlar indi inanılmaz fəlsəfi suallar qaldırır və bir-birinin fikirlərini səbirlə dinləyirlər.',
    photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    course_attended: 'P4C Tətbiqçi Fasilatator Təlimi',
    year: '2025',
  },
  {
    id: 'grad-2',
    student_name: 'Fərid Rəhimli',
    role: 'Tələbə, BDU Hüquq fakültəsi',
    story:
      'Gənclər üçün Məntiq və Arqumentasiya atelyesi mənə məhkəmə debatı və akademik yazıda məntiqi xətaları anında aşkar etməyi öyrətdi. P4C düşünmə tərzimi sistemləşdirdi.',
    photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    course_attended: 'Gənclər üçün Məntiq və Arqumentasiya',
    year: '2026',
  },
  {
    id: 'grad-3',
    student_name: 'Səbinə Məhərrəmova',
    role: 'Valideyn (2 uşaq anası)',
    story:
      'Valideyn atelyesi sayəsində uşaqlarıma nəsihət vermək yerinə onlarla fəlsəfi suallar üzərində birgə düşünməyi öyrəndim. Evimizdə artıq dava-dalaş əvəzinə sivil müzakirələr gedir.',
    photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    course_attended: 'Valideynlər üçün Fəlsəfi Dialoq Atelyesi',
    year: '2026',
  },
];

export const initialVideos: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'P4C Nədir? Uşaqlarla Fəlsəfi Söhbətin Gücü',
    youtube_id: '1A_CAkYt3GY',
    category: 'Giriş və Maarifləndirmə',
    description: 'P4C metodologiyasının əsas mahiyyəti, Community of Inquiry və uşaqlarda tənqidi təfəkkürün formalaşması.',
    speaker: 'P4C Azərbaycan Təhsil Komandası',
  },
  {
    id: 'vid-2',
    title: 'Sokratik Sualvermə Sənəti: Fasilatator Necə Yönləndirməlidir?',
    youtube_id: 'vH0S_9918Kk',
    category: 'Fasilatasiya Təlimi',
    description: 'Sinifdə və qrupda fəlsəfi müzakirələri dərinləşdirən açıq tipli və zərif sualvermə texnikaları.',
    speaker: 'Elmir Məmmədov',
  },
  {
    id: 'vid-3',
    title: '4C Düşünmə Modeli: Tənqidi, Yaradıcı, Əməkdaşlıq və Qayğıkeş Düşüncə',
    youtube_id: 'bOPEYd1V-aA',
    category: 'Nəzəriyyə və Konsepsiya',
    description: 'Matthew Lipmanın 4C düşünmə bacarıqları modeli və onun müasir təhsildə tətbiqi.',
    speaker: 'Nərgiz Əliyeva',
  },
];

export const initialQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Biri ilə fikir ayrılığı yaşayanda ilk reaksiyanız adətən necə olur?',
    options: [
      { label: 'Qarşı tərəfin arqumentində məntiqi ziddiyyət və ya xəta axtarıram.', profile_type: 'analytic', score: 3 },
      { label: 'Onun bu qənaətə hansı səbəblə gəldiyini anlamaq üçün əlavə suallar verirəm.', profile_type: 'socratic', score: 3 },
      { label: 'Hər iki fikrin kəsişdiyi ortaq və uzlaşan məqamları tapmağa çalışıram.', profile_type: 'collaborative', score: 3 },
      { label: 'Məsələyə tamamilə fərqli, gözlənilməz prizmadan baxaraq yeni baxış bucağı təklif edirəm.', profile_type: 'creative', score: 3 },
    ],
  },
  {
    id: 2,
    question: 'Sosial şəbəkədə və ya xəbərlərdə sensasion bir məlumat görəndə nə edirsiniz?',
    options: [
      { label: 'Faktları, statistik rəqəmləri və ilkin mənbənin etibarlılığını dəqiqləşdirirəm.', profile_type: 'analytic', score: 3 },
      { label: '"Bu xəbərin arxasında hansı maraq və ya fərziyyə dayanır?" sualını qoyuram.', profile_type: 'socratic', score: 3 },
      { label: 'Digər insanların bu mövzuda fərqli rəylərini oxuyub müqayisə edirəm.', profile_type: 'collaborative', score: 3 },
      { label: 'Bu hadisənin gələcəkdə cəmiyyətə necə qeyri-adi təsirlər göstərə biləcəyini təsəvvür edirəm.', profile_type: 'creative', score: 3 },
    ],
  },
  {
    id: 3,
    question: 'Uşaq və ya gənc sizdən çətin bir sual soruşanda (məsələn: "Ədalət nədir?")...',
    options: [
      { label: 'Ona hazır tərif vermək əvəzinə: "Bəs sən necə düşünürsən, nə vaxt ədalətsizlik hiss etmisən?" deyə soruşuram.', profile_type: 'socratic', score: 3 },
      { label: 'Həyatdan konkret ədalət və qayda nümunələri gətirərək məntiqi müqayisə aparıram.', profile_type: 'analytic', score: 3 },
      { label: 'Birgə hekayə və ya metafora quraraq bu anlayışı canlandırırıq.', profile_type: 'creative', score: 3 },
      { label: 'Ailəliklə və ya dostlarla bu barədə kiçik bir söhbət açıb hamının fikrini dinləyirik.', profile_type: 'collaborative', score: 3 },
    ],
  },
  {
    id: 4,
    question: 'Komandada müzakirə zamanı ən çox hansı rol sizə yaxındır?',
    options: [
      { label: 'Dialoqun axarını tənzimləyən, hamının səsini eşitdirən və fikirləri birləşdirən.', profile_type: 'collaborative', score: 3 },
      { label: 'Təkliflərin zəif tərəflərini və risklərini soyuqqanlı şəkildə hesablayan.', profile_type: 'analytic', score: 3 },
      { label: 'Hamının doğru hesab etdiyi fərziyyələri sual altına qoyan ("Bəs səhv ediriksə?").', profile_type: 'socratic', score: 3 },
      { label: 'Standart qəliblərdən kənara çıxan orijinal ideyalar irəli sürən.', profile_type: 'creative', score: 3 },
    ],
  },
  {
    id: 5,
    question: 'Bir kitab və ya film sizi ən çox nə vaxt heyran edir?',
    options: [
      { label: 'Gözlənilməz fəlsəfi dilemmalar və cavabsız qalan dərin suallar qoyanda.', profile_type: 'socratic', score: 3 },
      { label: 'Süjeti daxili məntiqə, qüsursuz səbəb-nəticə əlaqələrinə söykənəndə.', profile_type: 'analytic', score: 3 },
      { label: 'İnsanlararası dərin empatiya, bağ və qarşılıqlı anlaşmanı nümayiş etdirəndə.', profile_type: 'collaborative', score: 3 },
      { label: 'Möhtəşəm vizual dil, simvolizm və metaforalarla zəngin olanda.', profile_type: 'creative', score: 3 },
    ],
  },
  {
    id: 6,
    question: 'Qeyri-müəyyənlik və ziddiyyətli vəziyyətlə qarşılaşanda nə hiss edirsiniz?',
    options: [
      { label: 'Maraq və tədqiqat həvəsi — aydın olmayan şeylər məni daha çox cəlb edir.', profile_type: 'socratic', score: 3 },
      { label: 'Vəziyyəti addım-addım hissələrə ayırıb sistemləşdirmək istəyi.', profile_type: 'analytic', score: 3 },
      { label: 'Başqaları ilə məsləhətləşib kollektiv ağla güvənmək istəyi.', profile_type: 'collaborative', score: 3 },
      { label: 'Yeni həll yolları və intuitiv alternativlər yaratmaq istəyi.', profile_type: 'creative', score: 3 },
    ],
  },
  {
    id: 7,
    question: 'Bir qaydanın ədalətli olub-olmadığını necə müəyyən edirsiniz?',
    options: [
      { label: 'Hamıya bərabər tətbiq olunub-olunmadığını və məntiqi əsasını yoxlayıram.', profile_type: 'analytic', score: 3 },
      { label: '"Bu qayda kimin üçün yaradılıb və hansı dəyəri qoruyur?" sualını verirəm.', profile_type: 'socratic', score: 3 },
      { label: 'Həmin qaydadan təsirlənən ən həssas tərəflərin fikrini və hisslərini nəzərə alıram.', profile_type: 'collaborative', score: 3 },
      { label: 'Qaydanın yaratdığı nəticələri fərqli ssenarilərlə sınaqdan keçirirəm.', profile_type: 'creative', score: 3 },
    ],
  },
  {
    id: 8,
    question: 'Sizin üçün "öyrənmək" nə deməkdir?',
    options: [
      { label: 'Öz bildiyin fərziyyələri cəsarətlə sınağa çəkmək və yenidən düşünmək.', profile_type: 'socratic', score: 3 },
      { label: 'Faktları, prinsipləri və strukturları dəqiq qavrayıb tətbiq etmək.', profile_type: 'analytic', score: 3 },
      { label: 'Dialoq və ortaq təcrübə vasitəsilə başqaları ilə birgə böyümək.', profile_type: 'collaborative', score: 3 },
      { label: 'Yeni ideyalar yaratmaq və dünyaya özünəməxsus iz qoymaq.', profile_type: 'creative', score: 3 },
    ],
  },
  {
    id: 9,
    question: 'Biri sizə "Bu həmişə belə olub, dəyişmək olmaz" deyəndə cavabınız necə olur?',
    options: [
      { label: '"Həmişə belə olması onun doğru olduğunu sübut edirmi?" sualını verirəm.', profile_type: 'socratic', score: 3 },
      { label: 'Köhnə qaydanın səmərəlilik göstəricilərini rəqəmlərlə yoxlamağı təklif edirəm.', profile_type: 'analytic', score: 3 },
      { label: 'Dəyişikliyin hamı üçün necə faydalı ola biləcəyini komanda ilə müzakirə edirəm.', profile_type: 'collaborative', score: 3 },
      { label: 'Dərhal köhnəyə alternativ olacaq yeni bir model layihələndirirəm.', profile_type: 'creative', score: 3 },
    ],
  },
  {
    id: 10,
    question: 'Fəlsəfə sizin üçün daha çox nəyi ifadə edir?',
    options: [
      { label: 'Daha yaxşı suallar vermək və həyatın mahiyyətini kəşf etmək sənətini.', profile_type: 'socratic', score: 3 },
      { label: 'Düşüncənin təmizlənməsini və mühakimələrin dəqiq olmasını.', profile_type: 'analytic', score: 3 },
      { label: 'İnsanların bir-birini daha dərindən anlaması və empatik dialoq qurmasını.', profile_type: 'collaborative', score: 3 },
      { label: 'Gələcəyi təsəvvür etmək və yeni mənalar yaratmaq azadlığını.', profile_type: 'creative', score: 3 },
    ],
  },
];

export const quizResultProfiles: Record<string, QuizResultProfile> = {
  socratic: {
    type: 'socratic',
    title: 'Sokratik Tədqiqatçı',
    subtitle: 'Dərinliyi sevən, mahiyyət axtaran və cəsarətli sual verən',
    description:
      'Siz səthi cavablarla qane olmursunuz. Hər bir fikrin kökünə enməyi, ilkin fərziyyələri yoxlamağı və insanları düşünməyə sövq edən suallar verməyi bacarırsınız. P4C icmasında siz güclü fəlsəfi fasilatator potensialına maliksiniz.',
    strengths: [
      'Dərinləşdirici sualvermə bacarığı',
      'Fərziyyələri və doqmaları cəsarətlə təhlil etmək',
      'Müzakirələrdə intellektual dürüstlük və maraq',
    ],
    recommended_course_slug: 'p4c-giris-fasilitatorluq-seviyye-1',
    recommended_course_title: 'P4C Giriş və Tətbiqçi Fasilatator Təlimi (1-ci Səviyyə)',
  },
  collaborative: {
    type: 'collaborative',
    title: 'Dialoq Qurucusu',
    subtitle: 'Əməkdaşlığı, qarşılıqlı dinləməni və təhlükəsiz mühiti ön planda tutan',
    description:
      'Sizin üçün ən böyük dəyər birlikdə düşünmək və ortaq anlayışa çatmaqdır. Siz insanları dinləməyi, fərqli fikirlər arasında körpü salmağı və heç kimi kənarda qoymamağı üstün tutursunuz. Bu, Community of Inquiry-nin ən ali qayğıkeş (caring) dəyəridir.',
    strengths: [
      'Empatik və dərindən dinləmə bacarığı',
      'Təhlükəsiz və inklüziv dialoq mühiti yaratmaq',
      'Kollektiv zəkanın gücünə inanmaq',
    ],
    recommended_course_slug: 'valideynler-ucun-felsefi-dialoq-atelyesi-30-saat',
    recommended_course_title: 'Valideynlər və Tərbiyəçilər üçün Fəlsəfi Dialoq Atelyesi',
  },
  analytic: {
    type: 'analytic',
    title: 'Məntiqi Təhlilçi',
    subtitle: 'Arqumentin möhkəmliyini, səbəb-nəticə əlaqələrini və dəqiqliyi axtaran',
    description:
      'Sizin zəkanız məntiq, struktur və dəlillər üzərində qurulub. Müzakirə zamanı emosional təsirlərə qapılmadan arqumentin daxili ziddiyyətlərini və məntiqi xətaları anında aşkar edirsiniz. Siz təhsil mühitinə aydınlıq və rasional nizam gətirirsiniz.',
    strengths: [
      'Rasional arqumentasiya və analiz gücü',
      'Məntiqi xətaları (fallacies) dəqiq görmək',
      'Sistemli və ardıcıl mühakimə yürütmək',
    ],
    recommended_course_slug: 'gencler-ucun-mentiq-ve-arqumentasiya-20-saat',
    recommended_course_title: 'Gənclər üçün Məntiq, Fəlsəfi Arqumentasiya və Debat Klubu',
  },
  creative: {
    type: 'creative',
    title: 'Yaradıcı Fəlsəfəçi',
    subtitle: 'Standart qəliblərdən kənara çıxan, metaforalarla düşünən və alternativlər quran',
    description:
      'Siz məsələlərə heç kimin baxmadığı fərqli bucaqlardan yanaşmağı sevirsiniz. Metaforalar, hekayələr və düşüncə eksperimentləri sizin təbii dilinizdir. Qəlibləri sındırmaq və uşaqların xəyal dünyasını fəlsəfə ilə birləşdirmək sizin super gücünüzdür.',
    strengths: [
      'Bənzərsiz konseptual təsəvvür və metafora bacarığı',
      'Çətin anlayışları hekayələrlə vizuallaşdırmaq',
      'Qeyri-adi fəlsəfi düşüncə eksperimentləri təklif etmək',
    ],
    recommended_course_slug: 'usaqlar-ucun-felsefe-atelyesi-10-saat',
    recommended_course_title: 'Uşaqlar üçün Fəlsəfə və Nağıllarla Düşüncə Atelyesi',
  },
};

export const initialApplications: CourseApplication[] = [
  {
    id: 'app-001',
    course_id: 'course-t1',
    course_title: 'P4C Giriş və Tətbiqçi Fasilatator Təlimi (1-ci Səviyyə)',
    full_name: 'Günel İsmayılova',
    email: 'gunel.ismayilova@example.com',
    phone: '+994 50 234 56 78',
    age_group: 'Müəllim / Təhsil işçisi',
    organization: 'Bakı Avropa Liseyi',
    motivation: 'İbtidai sinif şagirdlərimdə tənqidi düşünmə və fəlsəfi sualvermə bacarıqlarını inkişaf etdirmək istəyirəm.',
    notes: 'Onlayn formatda iştirak edə bilərəm.',
    status: 'Yeni',
    created_at: '2026-11-20T14:32:00Z',
  },
  {
    id: 'app-002',
    course_id: 'course-p2',
    course_title: 'Yeniyetmələr üçün Sokratik Dialoq və Tənqidi Təfəkkür',
    full_name: 'Murad Əhmədli',
    email: 'murad.ahmadli@example.com',
    phone: '+994 55 987 65 43',
    age_group: 'Yeniyetmə (11–15 yaş)',
    organization: 'FRİTL Liseyi',
    motivation: 'Debatlarda daha güclü çıxış etmək və məntiqi ziddiyyətləri vaxtında tapmaq istəyirəm.',
    notes: 'Valideyn razılığı mövcuddur.',
    status: 'Baxılır',
    admin_notes: 'Valideyn ilə əlaqə saxlanılmalıdır.',
    created_at: '2026-11-19T10:15:00Z',
  },
  {
    id: 'app-003',
    course_id: 'course-t2',
    course_title: 'İrəli Səviyyə P4C Fasilatatorluq və Dialoq İdarəçiliyi (2-ci Səviyyə)',
    full_name: 'Rəşad Nəzərov',
    email: 'rashad.nazarov@example.com',
    phone: '+994 70 312 45 67',
    age_group: 'Müəllim / Təhsil işçisi',
    organization: 'Azərbaycan Dövlət Pedaqoji Universiteti',
    motivation: '1-ci səviyyəni bitirmişəm, superviziya proqramından keçərək təlimçi olmaq niyyətindəyəm.',
    status: 'Əlaqə saxlanılıb',
    admin_notes: '1-ci səviyyə sertifikatı yoxlanıldı, qəbul təsdiqləndi.',
    created_at: '2026-11-18T16:45:00Z',
  },
];
