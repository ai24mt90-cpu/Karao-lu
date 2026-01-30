import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import HomeSlider from "@/components/home/HomeSlider";
import HomeProjects from "@/components/home/HomeProjects";

// Force dynamic rendering since we are fetching data
export const dynamic = "force-dynamic";

async function getData() {
  // Get featured projects (starred in admin panel)
  const { data: featuredData, error: featError } = await supabase
    .from("projects")
    .select("*")
    .eq("is_featured", true)
    .order("created_at", { ascending: false });

  let featuredProjects: any[] = [];
  let projectsWithImages: any[] = [];

  if (!featError && featuredData && featuredData.length > 0) {
    // Get cover images for these projects
    const projectIds = featuredData.map(p => p.id);
    const { data: imagesData } = await supabase
      .from("project_images")
      .select("project_id, image_url")
      .in("project_id", projectIds)
      .eq("is_cover", true);

    // Merge project data with images (images optional)
    projectsWithImages = featuredData.map(project => {
      const coverImage = imagesData?.find(img => img.project_id === project.id);
      return { ...project, image_url: coverImage?.image_url };
    });

    featuredProjects = projectsWithImages;
  }

  return { featuredProjects, projectsWithImages };
}

export default async function Home() {
  const { featuredProjects, projectsWithImages } = await getData();

  // Prepare slider data from featured projects
  const sliderData = projectsWithImages
    .filter(p => p.image_url)
    .map(p => ({
      image: p.image_url,
      title: p.title,
      subtitle: `${p.location} - ${p.year}`
    }));

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Slider - Client Component */}
      <HomeSlider featuredProjects={sliderData} />

      {/* Kurumsal Yetkinlik Section - Static SEO Content - Server Rendered */}
      <section className="py-20 bg-white">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Neden Biz?</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                VAN VE ANKARA'DA<br />KAMU PROJELERİNİN<br />GÜVENİLİR ÇÖZÜM ORTAĞI
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>Karaoğlu Universal Mühendislik</strong>, Van ve Ankara merkezli ofisleriyle Türkiye genelinde kamu taahhüt işleri yürütmektedir.
                <br /><br />
                Şirketimiz bugüne kadar 64 projeyi başarıyla tamamlamış olup, bu projelerin büyük bölümü kamu kurumlarına yönelik yapım ve mühendislik işlerinden oluşmaktadır.
                <br /><br />
                İnşaat, altyapı ve üstyapı projelerinde "devlet ciddiyeti" ile hareket ediyor; Hastane, Okul, TOKİ konutları ve Yol projelerini zamanında teslim ediyoruz.
              </p>

              {/* Yetkinlik Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                  <p className="text-2xl font-bold text-primary">64+</p>
                  <p className="text-sm text-text-secondary">Tamamlanan Kamu Projesi</p>
                </div>
                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-sm text-text-secondary">Yıllık Sektör Deneyimi</p>
                </div>
                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                  <p className="text-2xl font-bold text-primary">6+</p>
                  <p className="text-sm text-text-secondary">İl Genelinde Proje</p>
                </div>
                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                  <p className="text-2xl font-bold text-primary">%100</p>
                  <p className="text-sm text-text-secondary">Zamanında Teslim</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projeler/kategori/tamamlanan-kamu-projeleri"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
                  aria-label="Tamamlanan kamu projelerimizi inceleyin"
                >
                  Tamamlanan Projeler <ArrowRight size={18} />
                </Link>
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
                  aria-label="Teknik yeterlilik belgelerimiz"
                >
                  Teknik Yeterlilikler
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              {/* Hizmet Alanları */}
              <div className="bg-primary text-white p-6">
                <h4 className="font-bold text-lg mb-4">HİZMET ALANLARIMIZ</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <strong>Kamu Binaları:</strong> Hastane, Okul, Hükümet Konağı
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <strong>Altyapı Projeleri:</strong> Kanalizasyon, İsale Hattı, Yol
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <strong>TOKİ Konutları:</strong> Van ve Çevre İllerde Toplu Konut
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <strong>Güçlendirme:</strong> Deprem Güçlendirme ve Onarım
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <strong>Çevre Düzenleme:</strong> Millet Bahçeleri ve Peyzaj
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal Slogan */}
      <section className="py-16 bg-primary">
        <div className="layout-container text-center">
          <p className="text-xl md:text-3xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
            &quot;Kamu projelerinde güvenilirlik, teknik yeterlilik ve zamanında teslim garantisi.&quot;
          </p>
          <p className="text-white/70 mt-4">— Karaoğlu Universal Mühendislik</p>
        </div>
      </section>

      {/* Projects Section - Client Component */}
      <HomeProjects projects={featuredProjects} />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="layout-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">İLETİŞİM</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Kamu projeleri ve teknik müşavirlik hizmetleri için Ankara veya Van ofisimizle iletişime geçebilirsiniz.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
            aria-label="İletişim sayfasına git"
          >
            Bize Ulaşın <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
